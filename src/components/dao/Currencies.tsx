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
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import axios from "axios";

interface Item {
  contract_ticker_symbol: string;
  balance: string | number;
  quote: number;
  logo_url: string;
  contract_address: string;
  contract_name: string;
}

export default function Currencies() {
  const [items, setItems] = useState<Item[] | null>(null);
  const dispatch = useDispatch();
  const { name, id } = useSelector((state: RootState) => state.dao);

  const USDFromatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const numberFormatter = new Intl.NumberFormat();

  useEffect(() => {
    if (name && items) {
      const daoName = name.toLowerCase().replace("dao", "").trim();

      const daoTokens = items.filter((item: Item) =>
        item.contract_name.toLowerCase().includes(daoName)
      );

      let daoToken: Item | undefined;

      if (daoTokens.length === 1) {
        daoToken = daoTokens[0];
      } else {
        const candidates = [
          `${name.toLowerCase()} token`,
          `${name.toLowerCase()} dao token`,
          `${daoName} token`,
          `${daoName} dao token`,
          daoName,
        ];

        for (const candidate of candidates) {
          daoToken = daoTokens.find((token) =>
            token.contract_name.toLowerCase().includes(candidate)
          );

          if (daoToken) {
            break;
          }
        }
      }

      if (daoToken) {
        dispatch({
          type: "SET_DAO_TOKEN",
          payload: {
            contract_ticker_symbol: daoToken.contract_ticker_symbol,
            contract_address: daoToken.contract_address,
            logoUrl: daoToken.logo_url,
          },
        });
      }
    }
  }, [name, items]);

  useEffect(() => {
    if (id) {
      axios
        .get(`/api/dao/${id}/treasury`)
        .then((result) => {
          setItems(result.data.tokenBalances);

          dispatch({
            type: "SET_DAO_TREASURY",
            payload: { treasury: result.data.treasury },
          });
        })
        .catch((error) => {
          dispatch({
            type: "SET_ERROR",
            payload: {
              message: "Failed to load treasury. Please refresh page.",
            },
          });
        });
    }
  }, [id]);

  return (
    <>
      {" "}
      {items ? (
        <TableContainer sx={{ height: 400 }} component={Paper}>
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
                          currentTarget.src = "/default_token.png";
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
        <Skeleton animation="wave" variant="rectangular" height={400} />
      )}
    </>
  );
}
