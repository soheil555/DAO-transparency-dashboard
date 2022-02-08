import { LinearProgress, Paper, Typography, Rating } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

export default function TransparencyScore() {
  const [score, setScore] = useState<number | null>(null);
  const { treasury } = useSelector((state: RootState) => state.dao);

  useEffect(() => {
    if (treasury) {
      setScore(8);
    }
  }, [treasury]);

  return (
    <Paper
      sx={{
        height: 230,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {score !== null ? (
        <>
          <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
            Transparency Score
          </Typography>
          <Typography color="primary" variant="h3">
            {score} / 10
          </Typography>
          <Rating readOnly value={score} max={10} size="large" />
        </>
      ) : (
        <>
          <Typography color="primary" gutterBottom>
            Computing Transparency Score
          </Typography>
          <LinearProgress sx={{ width: "90%" }} color="primary" />
        </>
      )}
    </Paper>
  );
}
