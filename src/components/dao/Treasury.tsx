import { Typography, Card, CardContent, Skeleton } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { convertToInternationalCurrencySystem } from "utils";
import Title from "./Title";

export default function Treasury() {
  const { treasury } = useSelector((state: RootState) => state.dao);

  return (
    <Card sx={{ height: 300 }}>
      <CardContent>
        <Title>Treasury</Title>
        <Typography variant="h3" component="div" gutterBottom>
          {treasury ? (
            "$" + convertToInternationalCurrencySystem(treasury)
          ) : (
            <Skeleton />
          )}
        </Typography>
      </CardContent>
    </Card>
  );
}
