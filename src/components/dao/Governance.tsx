import { Card, CardContent, Typography, Skeleton, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { useEffect } from "react";
import axios from "axios";
import { convertToInternationalCurrencySystem } from "utils";
import Title from "./Title";

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
    <>
      <Card sx={{ height: 300 }}>
        <CardContent>
          <Title>Snapshot Governance</Title>

          {governance ? (
            governance.name != undefined ? (
              <>
                <Typography
                  sx={{ fontSize: 18, marginTop: 3 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Proposals Count
                </Typography>
                <Typography component="div" variant="h3" gutterBottom>
                  {governance.proposalsCount}
                </Typography>
                <Typography
                  sx={{ fontSize: 18 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Followers Count
                </Typography>
                <Typography component="div" variant="h3">
                  {convertToInternationalCurrencySystem(
                    governance.followersCount
                  )}
                </Typography>
              </>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "13rem",
                  textAlign: "center",
                }}
              >
                <Typography color="text.secondary">
                  SnapShot governance not found. This cause the Transparency
                  Score to show the wrong result
                </Typography>
              </Box>
            )
          ) : (
            <Skeleton height={200} />
          )}
        </CardContent>
      </Card>
    </>
  );
}
