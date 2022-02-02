import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Skeleton,
} from "@mui/material";
import { covalentEth } from "../../services/api";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface Item {
  contract_ticker_symbol: string;
  balance: string | number;
  quote: number;
  logo_url: string;
}

function calcTreasury(items: Item[]) {
  let treasury = 0;
  items.forEach((item) => (treasury += item.quote));
  return treasury;
}

interface Props {
  address: string;
}

export default function Currencies({ address }: Props) {
  const [items, setItems] = useState<Item[] | null>(null);
  const dispatch = useDispatch();

  const USDFromatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const numberFormatter = new Intl.NumberFormat();

  useEffect(() => {
    covalentEth.getTokenBalances!(address).then((result) => {
      const items = result.data.items;
      setItems(items);
      const treasury = calcTreasury(items);
      dispatch({ type: "SET_DAO_TREASURY", payload: { treasury } });
    });
  }, []);

  return (
    <>
      {" "}
      {items ? (
        <TableContainer sx={{ height: 400, width: 750 }} component={Paper}>
          <Table stickyHeader sx={{ minWidth: 700 }} aria-label="currencies">
            <TableHead>
              <TableRow>
                <TableCell>Rank</TableCell>
                <TableCell align="center">Token</TableCell>
                <TableCell align="right">USD Value</TableCell>
                <TableCell align="right">Token balance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item: Item, index: number) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="left">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        height: "2rem",
                      }}
                    >
                      <img
                        loading="lazy"
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null;
                          currentTarget.src =
                            "https://deepdao.io/static/media/default_token_placeholder.5a319af1.svg";
                        }}
                        style={{
                          width: "50%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                        src={item.logo_url}
                      />
                      <p style={{ width: "50%", textAlign: "center" }}>
                        {item.contract_ticker_symbol}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    {USDFromatter.format(item.quote)}
                  </TableCell>
                  <TableCell align="right">
                    {numberFormatter.format(item.balance as number)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={750}
          height={400}
        />
      )}
    </>
  );
}
