import { Typography, Card, CardContent, Skeleton } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

function convertToInternationalCurrencySystem(labelValue: number) {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(1) + "B"
    : // Six Zeroes for Millions
    Math.abs(Number(labelValue)) >= 1.0e6
    ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(1) + "M"
    : // Three Zeroes for Thousands
    Math.abs(Number(labelValue)) >= 1.0e3
    ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(1) + "K"
    : Math.abs(Number(labelValue));
}

export default function Treasury() {
  const { treasury, isTreasuryLoading } = useSelector(
    (state: RootState) => state.dao
  );

  return (
    <Card sx={{ height: 200 }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          Treasury
        </Typography>
        <Typography variant="h3" component="div">
          {!isTreasuryLoading && treasury ? (
            "$" + convertToInternationalCurrencySystem(treasury)
          ) : (
            <Skeleton />
          )}
        </Typography>
      </CardContent>
    </Card>
  );
}