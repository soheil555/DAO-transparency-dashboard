import { Box, Skeleton, Typography, Card, CardContent } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { Token as TokenType } from "redux/reducers/daoReducer";
import { useState, useEffect } from "react";
import { covalentEth } from "src/services/api";

interface Price {
  price: number;
}

interface TokenPrice {
  lastPrice: string | number;
  priceChange: string | number;
  color: string | number;
}

function calcPriceChange(prices: Price[]) {
  const lastPrice = Number(prices[0].price.toFixed(2));
  const priceChange = Number(
    (prices[0].price - prices[prices.length - 1].price).toFixed(2)
  );

  const color = priceChange > 0 ? "green" : priceChange < 0 ? "red" : "grey";

  return [lastPrice, priceChange, color];
}

export default function Token() {
  const { token, isTokenLoaded } = useSelector((state: RootState) => state.dao);

  const [daoToken, setDaoToken] = useState<TokenType | null>(null);
  const [tokenPrice, setTokenPrice] = useState<TokenPrice | null>(null);

  useEffect(() => {
    if (token && isTokenLoaded) {
      setDaoToken(token);

      let now: Date | string;
      let lastMonth: Date | string;
      now = new Date();
      lastMonth = new Date();
      lastMonth.setMonth(lastMonth.getMonth() - 1);

      now = now.toISOString().split("T")[0];
      lastMonth = lastMonth.toISOString().split("T")[0];

      covalentEth.getHistoricalTokenPrices!(
        token.contract_address,
        lastMonth,
        now
      ).then((result) => {
        const prices = result.data.data[0].prices;
        const [lastPrice, priceChange, color] = calcPriceChange(prices);

        setTokenPrice({
          lastPrice,
          priceChange,
          color,
        });
      });
    }
  }, [isTokenLoaded]);

  return (
    <Card sx={{ height: 320 }}>
      <CardContent>
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
                  currentTarget.src = "/default_token.png";
                }}
                style={{
                  height: "2.5rem",
                  objectFit: "contain",
                }}
                src={daoToken.logoUrl}
              />
              <Typography variant="h3" component="div">
                {daoToken.contract_ticker_symbol}
              </Typography>
            </Box>
          ) : (
            <Skeleton />
          )}
        </Box>

        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          Token Price
        </Typography>

        <Typography variant="h3" component="div" gutterBottom>
          {tokenPrice ? "$" + tokenPrice.lastPrice : <Skeleton />}
        </Typography>

        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          Price changes over last month
        </Typography>

        <Typography variant="h3" component="div">
          {tokenPrice ? (
            <>
              <Box component="span" color={tokenPrice.color as string}>
                ${tokenPrice.priceChange}
              </Box>
            </>
          ) : (
            <Skeleton />
          )}
        </Typography>
      </CardContent>
    </Card>
  );
}
