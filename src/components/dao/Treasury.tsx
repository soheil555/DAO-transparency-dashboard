import { Typography, Card, CardContent, Skeleton } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { convertToInternationalCurrencySystem } from "utils";

export default function Treasury() {
  const { treasury } = useSelector((state: RootState) => state.dao);

  return (
    <Card sx={{ height: 150 }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          Treasury
        </Typography>
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
