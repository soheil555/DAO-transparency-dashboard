import { useState, useEffect } from "react";
import { covalentEth } from "../../services/api";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Skeleton, Card } from "@mui/material";
import { convertToInternationalCurrencySystem } from "./Treasury";

interface Props {
  address: string;
}

interface Holding {
  timestamp: string;

  close: {
    quote: number;
  };
}

interface Item {
  holdings: Holding[];
}

interface Data {
  date: string;
  treasury: number;
  treasuryShort: string;
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

export default function HistoricalPortfolio({ address }: Props) {
  const [data, setData] = useState<Data[] | null>(null);

  useEffect(() => {
    covalentEth.getHistoricalPortfolioValue!(address).then((result) => {
      const data = calcHistoricalPortfolio(result.items);
      setData(data);
    });
  }, []);

  return (
    <>
      {data ? (
        <Card sx={{ padding: 2 }}>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <Line type="monotone" dataKey="treasury" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="date" />
              <YAxis tickFormatter={convertToInternationalCurrencySystem} />
              <Tooltip formatter={convertToInternationalCurrencySystem} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      ) : (
        <Skeleton animation="wave" variant="rectangular" height={400} />
      )}
    </>
  );
}
