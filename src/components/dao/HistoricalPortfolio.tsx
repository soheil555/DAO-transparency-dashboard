import { useEffect, useState } from "react";
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
import { convertToInternationalCurrencySystem } from "utils";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "redux/store";
import axios from "axios";
import Title from "./Title";

interface Data {
  date: string;
  treasury: number;
  treasuryShort: string;
}

export default function HistoricalPortfolio() {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const { id, historicalTreasury } = useSelector(
    (state: RootState) => state.dao
  );

  useEffect(() => {
    axios
      .get(`/api/dao/${id}/historical_treasury`)
      .then((result) => {
        dispatch({
          type: "SET_DAO_HISTORICAL_TREASURY",
          payload: result.data,
        });
      })
      .catch((error) => {
        if (count < 7) {
          setTimeout(() => {
            setCount(count + 1);
          }, 300);
        } else {
          dispatch({
            type: "SET_ERROR",
            payload: {
              message:
                "Failed to load historical treasury. Please refresh page.",
            },
          });
        }
      });
  }, [count]);

  return (
    <>
      <Title>DAO Treasury over last month</Title>
      {historicalTreasury ? (
        <Card sx={{ padding: 2 }}>
          <ResponsiveContainer width="100%" height={455}>
            <LineChart data={historicalTreasury}>
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
