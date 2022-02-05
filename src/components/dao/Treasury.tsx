import {
  Typography,
  Card,
  CardContent,
  Skeleton,
  Avatar,
  Box,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Token } from "../../../redux/reducers/daoReducer";
import { useState, useEffect } from "react";

export function convertToInternationalCurrencySystem(
  labelValue: number
): string {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(1) + "B"
    : // Six Zeroes for Millions
    Math.abs(Number(labelValue)) >= 1.0e6
    ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(1) + "M"
    : // Three Zeroes for Thousands
    Math.abs(Number(labelValue)) >= 1.0e3
    ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(1) + "K"
    : String(Math.abs(Number(labelValue)));
}

export default function Treasury() {
  const { treasury, isTreasuryLoading, token, isTokenLoaded } = useSelector(
    (state: RootState) => state.dao
  );

  const [daoToken, setDaoToken] = useState<Token | null>(null);

  useEffect(() => {
    if (token && isTokenLoaded) {
      setDaoToken(token);
    }
  }, [isTokenLoaded]);

  return (
    <Card sx={{ height: 300 }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          Treasury
        </Typography>
        <Typography variant="h3" component="div" gutterBottom>
          {!isTreasuryLoading && treasury ? (
            "$" + convertToInternationalCurrencySystem(treasury)
          ) : (
            <Skeleton />
          )}
        </Typography>

        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          DAO Token
        </Typography>

        <Box component="div">
          {daoToken ? (
            <Box
              component="div"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <img
                loading="lazy"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = "/token.png";
                }}
                style={{
                  height: "2.5rem",
                  objectFit: "contain",
                }}
                src={daoToken.logo_url}
              />
              <Typography variant="h3" component="div">
                {daoToken.contract_ticker_symbol}
              </Typography>
            </Box>
          ) : (
            <Skeleton />
          )}
        </Box>
      </CardContent>
    </Card>
  );
}
