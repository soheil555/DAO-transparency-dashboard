import type { NextPage } from "next";
import { Container, Box, Grid, CircularProgress } from "@mui/material";
import Currencies from "src/components/dao/Currencies";
import Treasury from "src/components/dao/Treasury";
import Info from "src/components/dao/Info";
import HistoricalPortfolio from "src/components/dao/HistoricalPortfolio";
import TopTokenHolders from "src/components/dao/TopTokenHolders";
import Token from "src/components/dao/Token";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { DAO } from "prisma/seed";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import Error from "src/components/dao/Error";
import Governance from "src/components/dao/Governance";
import TransparencyScore from "src/components/dao/TransparencyScore";
import SearchDAO from "src/components/dao/SearchDAO";
import { useRouter } from "next/router";
import axios from "axios";

const DAO: NextPage = () => {
  const dispatch = useDispatch();
  const [daoLoaded, setDaoLoaded] = useState(false);
  const { error } = useSelector((state: RootState) => state.dao);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return undefined;
    }

    dispatch({ type: "RESET_DAO" });

    axios
      .get(`/api/dao/${id}`)
      .then((result) => {
        const dao = result.data;

        dispatch({
          type: "SET_DAO_INFO",
          payload: {
            id: dao.id,
            name: dao.name,
            description: dao.description,
            logo: dao.logoUrl,
          },
        });

        setDaoLoaded(true);
      })
      .catch((error) => {
        router.push("/");
      });
  }, [id]);

  return (
    <>
      {daoLoaded ? (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} md={8}>
                <SearchDAO />
              </Grid>

              <Grid item xs={12}>
                <Info />
              </Grid>

              <Grid item xs={12} md={6}>
                <TransparencyScore />
              </Grid>

              <Grid item container xs={12} spacing={2}>
                <Grid item xs={12} md={4}>
                  <Governance />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Treasury />
                </Grid>

                <Grid item xs={12} md={4}>
                  <Token />
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <HistoricalPortfolio />
              </Grid>

              <Grid item xs={12}>
                <TopTokenHolders />
              </Grid>

              <Grid item xs={12}>
                <Currencies />
              </Grid>
            </Grid>
          </Box>
          {error && <Error message={error.message} />}
        </Container>
      ) : (
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size={50} />
        </Box>
      )}
    </>
  );
};

export default DAO;
