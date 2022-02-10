import { Typography, Card, CardContent, Skeleton } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { convertToInternationalCurrencySystem } from "utils";
import Title from "./Title";
import { Treasury as TreasuryType } from "redux/reducers/daoReducer";
import { useEffect, useState } from "react";

function calcTreasuryChange(treasuries: TreasuryType[]) {
  const treasuryChange =
    treasuries[treasuries.length - 1].treasury - treasuries[0].treasury;

  const color =
    treasuryChange > 0 ? "green" : treasuryChange < 0 ? "red" : "grey";

  return [
    convertToInternationalCurrencySystem(Math.abs(treasuryChange)),
    color,
  ];
}

export default function Treasury() {
  const { treasury, historicalTreasury } = useSelector(
    (state: RootState) => state.dao
  );

  const [treasuryChange, setTreasuryChange] = useState<string[] | null>(null);

  useEffect(() => {
    if (historicalTreasury) {
      setTreasuryChange(calcTreasuryChange(historicalTreasury));
    }
  }, [historicalTreasury]);

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

        <Typography fontSize={18} color="text.secondary" gutterBottom>
          Treasury changes over last month
        </Typography>

        {treasuryChange ? (
          <Typography
            variant="h3"
            component="div"
            color={treasuryChange[1]}
            gutterBottom
          >
            ${treasuryChange[1] == "red" && "-"}
            {treasuryChange[0]}
          </Typography>
        ) : (
          <Skeleton variant="text" height={70} />
        )}
      </CardContent>
    </Card>
  );
}
