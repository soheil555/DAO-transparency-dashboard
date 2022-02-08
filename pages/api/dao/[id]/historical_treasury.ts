import { NextApiRequest, NextApiResponse } from "next";
import { convertToInternationalCurrencySystem } from "utils";
import prisma from "prisma/client";
import { covalentEth } from "src/services/api";

interface Holding {
  timestamp: string;

  close: {
    quote: number;
  };
}

interface Item {
  holdings: Holding[];
}

function calcHistoricalPortfolio(items: Item[]) {
  const data: {
    [key: string]: number;
  } = {};

  for (const item of items) {
    for (const holding of item.holdings) {
      if (data[holding.timestamp]) {
        data[holding.timestamp] += holding.close.quote;
      } else {
        data[holding.timestamp] = holding.close.quote;
      }
    }
  }

  const shortMonthName = new Intl.DateTimeFormat("en-US", { month: "short" })
    .format;

  const result = [];
  for (const [timestamp, treasury] of Object.entries(data)) {
    const date = new Date(timestamp);
    const month = shortMonthName(date);
    const day = date.getDate();

    const treasuryShort = convertToInternationalCurrencySystem(
      treasury
    ) as string;

    result.unshift({ date: `${month} ${day}`, treasury, treasuryShort });
  }

  return result;
}

async function daoHistoricalTreasuryRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      const dao = await prisma.dAO.findFirst({
        where: { id: Number(id) },
        include: { addresses: { where: { type: "treasury", active: true } } },
      });

      if (!dao) {
        return res.status(404).end("DAO not found");
      }

      if (dao.addresses.length === 0) {
        return res.status(200).json([]);
      }

      let totalHistoricalItems: Item[] = [];

      for (const address of dao.addresses) {
        let historical: any;

        historical = await covalentEth.getHistoricalPortfolioValue!(
          address.address
        );

        totalHistoricalItems = [
          ...totalHistoricalItems,
          ...historical.data.items,
        ];
      }

      const historicalTreasury = calcHistoricalPortfolio(totalHistoricalItems);

      return res.status(200).json(historicalTreasury);
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} is not allowed`);
  }
}

export default daoHistoricalTreasuryRoute;
