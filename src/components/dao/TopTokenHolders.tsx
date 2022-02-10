import {
  Avatar,
  Card,
  CardContent,
  Skeleton,
  Typography,
  Tooltip,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { covalentEth } from "src/services/api";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "redux/store";
import BigNumber from "bignumber.js";
import Title from "./Title";

interface Holder {
  address: string;
  balance: string;
  total_supply: string;
}

function calcHoldPercentage(_balance: string, _totalSupply: string) {
  const balance = new BigNumber(_balance);
  const totalSupply = new BigNumber(_totalSupply);

  return balance.dividedBy(totalSupply).multipliedBy(100).toFixed(2);
}

export default function TopTokenHolders() {
  const { token, topTokenHolders, topTokenHoldersError, tokenNotFound } =
    useSelector((state: RootState) => state.dao);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      covalentEth.getTokenHolders!(token.contract_address)
        .then((result) => {
          if (result) {
            const items = result.data.items;
            dispatch({
              type: "SET_DAO_TOP_TOKEN_HOLDERS",
              payload: items,
            });
          } else {
            dispatch({
              type: "DAO_TOP_TOKEN_HOLDERS_ERROR",
            });
          }
        })
        .catch((error) => {
          dispatch({
            type: "SET_ERROR",
            payload: {
              message: "Failed to get token holders. Please refresh page.",
            },
          });
        });
    }
  }, [token]);

  return (
    <>
      <Title>Top '{token?.contract_ticker_symbol}' Token Holders</Title>{" "}
      {topTokenHolders ? (
        <Card
          sx={{
            height: 250,
            display: "flex",
            alignItems: "center",
            gap: 3,
            overflow: "auto",
            px: 2,
          }}
        >
          {topTokenHolders.map((holder, index) => {
            return (
              <Card key={index} sx={{ minWidth: 200 }}>
                <CardContent>
                  <Box
                    sx={{
                      marginBottom: 4,
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Avatar>{index + 1}</Avatar>
                  </Box>
                  <Typography color="text.secondary" gutterBottom>
                    Address
                  </Typography>
                  <Tooltip title={holder.address} arrow>
                    <Typography>{holder.address.slice(0, 9)}...</Typography>
                  </Tooltip>
                  <Typography color="text.secondary" gutterBottom>
                    Balance
                  </Typography>
                  <Tooltip title={holder.balance} arrow>
                    <Typography>
                      {holder.balance.slice(0, 9)}... (
                      {calcHoldPercentage(holder.balance, holder.total_supply)}
                      %)
                    </Typography>
                  </Tooltip>
                </CardContent>
              </Card>
            );
          })}
        </Card>
      ) : topTokenHoldersError || tokenNotFound ? (
        <Card
          sx={{
            height: 250,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {" "}
          <Typography variant="h6" color="text.secondary">
            {tokenNotFound ? "DAO Token not found" : "API request failed"}. This
            cause the Transparency Score to show the wrong result
          </Typography>{" "}
        </Card>
      ) : (
        <Skeleton animation="wave" height={250} />
      )}
    </>
  );
}
