import { LinearProgress, Paper, Typography, Rating } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import {
  TokenPrice,
  Governance,
  TokenHolder,
  Treasury,
} from "redux/reducers/daoReducer";
import BigNumber from "bignumber.js";

function getTreasuryScore(treasury: number) {
  let score = 0;
  if (treasury >= 1e9) {
    score += 3;
  } else if (treasury >= 5e8) {
    score += 2;
  } else if (treasury > 25e7) {
    score += 1.5;
  } else if (treasury >= 1e6) {
    score += 1;
  } else {
    score += 0.5;
  }

  return score;
}

function getTokenPricesScore(tokenPrices: TokenPrice[]) {
  let score = 0;

  let oldPrice = tokenPrices[tokenPrices.length - 1];
  let lastPrice = tokenPrices[0];

  if (lastPrice.price >= 1) {
    score += 1;
  }

  if (lastPrice.price - oldPrice.price > 0) {
    score += 0.5;
  }

  let priceSum = 0;
  tokenPrices.forEach((tokenPrice) => (priceSum += tokenPrice.price));
  if (lastPrice.price > priceSum / tokenPrices.length) {
    score += 0.5;
  }

  return score;
}

function getTopTokenHoldersScore(topTokenHolders: TokenHolder[]) {
  let score = 0;
  const totalSupply = new BigNumber(topTokenHolders[0].total_supply);

  const balanceSum = new BigNumber(0);
  topTokenHolders.forEach((tokenHolder) => {
    const balance = new BigNumber(tokenHolder.balance);
    balanceSum.plus(balance);
  });

  if (balanceSum.dividedBy(totalSupply).multipliedBy(100).toNumber() < 50) {
    score += 1;
  }

  return score;
}

function getHistoricalTreasuryScore(historicalTreasury: Treasury[]) {
  let score = 0;
  const lastTreasury = historicalTreasury[historicalTreasury.length - 1];
  const oldTreasury = historicalTreasury[0];

  if (lastTreasury.treasury - oldTreasury.treasury > 0) {
    score += 0.5;
  }

  let treasurySum = 0;
  historicalTreasury.forEach((treasury) => (treasurySum += treasury.treasury));

  if (lastTreasury.treasury > treasurySum / historicalTreasury.length) {
    score += 0.5;
  }

  return score;
}

function getGovernanceScore(governance: Governance) {
  let score = 0;

  if (governance.proposalsCount > 30) {
    score += 1.5;
  } else if (governance.proposalsCount > 20) {
    score += 1;
  } else if (governance.proposalsCount > 5) {
    score += 0.5;
  }

  if (governance.followersCount > 1e4) {
    score += 1.5;
  } else if (governance.followersCount > 1000) {
    score += 1;
  } else if (governance.followersCount > 500) {
    score += 0.5;
  }

  return score;
}

export default function TransparencyScore() {
  const [score, setScore] = useState<number | null>(null);
  const {
    treasury,
    tokenPrices,
    topTokenHolders,
    historicalTreasury,
    governance,
  } = useSelector((state: RootState) => state.dao);

  useEffect(() => {
    // 3 points - treasury
    // 1 points - treasury history
    // 1 points - top token holders
    // 2 points - token prices
    // 3 points - governance

    if (
      treasury &&
      tokenPrices &&
      topTokenHolders &&
      historicalTreasury &&
      governance
    ) {
      const s1 = getTreasuryScore(treasury);
      const s2 = getTokenPricesScore(tokenPrices);
      const s3 = getTopTokenHoldersScore(topTokenHolders);
      const s4 = getHistoricalTreasuryScore(historicalTreasury);
      const s5 = getGovernanceScore(governance);

      setScore(s1 + s2 + s3 + s4 + s5);
    }
  }, [treasury, tokenPrices, topTokenHolders, historicalTreasury, governance]);

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
          <Rating
            readOnly
            value={score}
            max={10}
            size="large"
            precision={0.5}
          />
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
