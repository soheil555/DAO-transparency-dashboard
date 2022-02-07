import { useState, useEffect } from "react";
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
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import axios from "axios";

interface Data {
  date: string;
  treasury: number;
  treasuryShort: string;
}

export default function HistoricalPortfolio() {
  const [data, setData] = useState<Data[] | null>(null);
  const { id } = useSelector((state: RootState) => state.dao);

  useEffect(() => {
    if (id) {
      axios.get(`/api/dao/${id}/historical_treasury`).then((result) => {
        setData(result.data);
      });
    }
  }, [id]);

  return (
    <>
      {data ? (
        <Card sx={{ padding: 2 }}>
          <ResponsiveContainer width="100%" height={455}>
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
