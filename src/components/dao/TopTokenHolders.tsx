import {
  Avatar,
  Card,
  CardContent,
  Skeleton,
  Grid,
  Paper,
  Typography,
  Tooltip,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { covalentEth } from "../../services/api";

interface Props {
  tokenAddress: string;
}

interface Holder {
  address: string;
  balance: string;
}

export default function TopTokenHolders({ tokenAddress }: Props) {
  const [holders, setHolders] = useState<Holder[] | null>(null);

  useEffect(() => {
    covalentEth.getTokenHolders!(tokenAddress).then((result) => {
      const items = result.data.items;
      setHolders(items);
    });
  }, []);

  return (
    <>
      {" "}
      {holders ? (
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
          {holders.map((holder, index) => {
            return (
              <Card sx={{ minWidth: 200 }}>
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
                    <Typography>{holder.balance.slice(0, 9)}...</Typography>
                  </Tooltip>
                </CardContent>
              </Card>
            );
          })}
        </Card>
      ) : (
        <Skeleton animation="wave" height={250} />
      )}
    </>
  );
}
