import { NextApiRequest, NextApiResponse } from "next";
import prisma from "prisma/client";
import { covalentEth } from "src/services/api";
import BigNumber from "bignumber.js";

interface TokenBalance {
  contract_name: string;
  contract_ticker_symbol: string;
  contract_address: string;
  logo_url: string;
  balance: string;
  quote: number;
  quote_rate?: number;
}

async function daoTreasuryRoute(req: NextApiRequest, res: NextApiResponse) {
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
        return res.status(200).json({});
      }

      const totalTokenBalances: TokenBalance[] = [];
      let treasury = 0;

      for (const address of dao.addresses) {
        const tokenBalances: TokenBalance[] = (
          await covalentEth.getTokenBalances!(address.address)
        ).data.items;

        for (const tokenBalance of tokenBalances) {
          const tokenExists = totalTokenBalances.find(
            (t) => t.contract_address === tokenBalance.contract_address
          );

          if (
            !tokenBalance.quote_rate ||
            tokenBalance.quote_rate! > 100000 ||
            tokenBalance.quote_rate! <= 0 ||
            tokenBalance.quote <= 0
          ) {
            continue;
          }

          treasury += tokenBalance.quote;

          if (tokenExists) {
            tokenExists.balance = new BigNumber(tokenBalance.balance)
              .plus(tokenExists.balance)
              .toFixed();
            tokenExists.quote += tokenBalance.quote;
          } else {
            totalTokenBalances.push({
              contract_address: tokenBalance.contract_address,
              contract_name: tokenBalance.contract_name,
              balance: tokenBalance.balance,
              logo_url: tokenBalance.logo_url,
              quote: tokenBalance.quote,
              contract_ticker_symbol: tokenBalance.contract_ticker_symbol,
            });
          }
        }
      }

      totalTokenBalances.sort((a, b) => b.quote - a.quote);

      return res.status(200).json({
        tokenBalances: totalTokenBalances,
        treasury,
      });
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} is not allowed`);
  }
}

export default daoTreasuryRoute;
