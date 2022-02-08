import { Card, CardContent, Typography, Skeleton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { useEffect } from "react";
import axios from "axios";
import { convertToInternationalCurrencySystem } from "utils";

export default function Governance() {
  const { governance, id } = useSelector((state: RootState) => state.dao);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`/api/dao/${id}/governance`)
      .then((result) => {
        const space = result.data;

        dispatch({
          type: "SET_DAO_GOVERNANCE",
          payload: {
            name: space.name,
            symbol: space.symbol,
            proposalsCount: space.proposalsCount,
            followersCount: space.followersCount,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: "SET_ERROR",
          payload: {
            message: "Failed to get governance. Please refresh page",
          },
        });
      });
  }, []);

  return (
    <Card sx={{ height: 300 }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          Proposals Count
        </Typography>

        <Typography component="div" variant="h3" gutterBottom>
          {governance ? governance.proposalsCount : <Skeleton />}
        </Typography>

        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          Followers Count
        </Typography>

        <Typography component="div" variant="h3">
          {governance ? (
            convertToInternationalCurrencySystem(governance.followersCount)
          ) : (
            <Skeleton />
          )}
        </Typography>
      </CardContent>
    </Card>
  );
}
