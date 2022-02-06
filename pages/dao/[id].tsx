import type { NextPage, GetServerSideProps } from "next";
import { Container, Box, Grid, Paper } from "@mui/material";
import { daos, DAO } from "../../data";
import { styled } from "@mui/material/styles";
import Currencies from "../../src/components/dao/Currencies";
import Treasury from "../../src/components/dao/Treasury";
import Info from "../../src/components/dao/Info";
import HistoricalPortfolio from "../../src/components/dao/HistoricalPortfolio";
import TopTokenHolders from "../../src/components/dao/TopTokenHolders";
import Token from "../../src/components/dao/Token";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../../redux/store";

interface Props {
  dao: DAO;
}

const DAO: NextPage<Props> = ({ dao }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "SET_DAO_INFO",
      payload: {
        name: dao.dao,
        description: dao.description,
        logo: dao.image,
      },
    });
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} justifyContent="flex-end">
          <Grid item xs={12}>
            <Info />
          </Grid>

          <Grid item container xs={12} md={4} spacing={2}>
            <Grid item xs={12}>
              <Treasury />
            </Grid>

            <Grid item xs={12}>
              <Token />
            </Grid>
          </Grid>

          <Grid item xs={12} md={8}>
            <HistoricalPortfolio address={dao.treasuryAddress} />
          </Grid>

          <Grid item xs={12}>
            <TopTokenHolders />
          </Grid>

          <Grid item xs={12}>
            <Currencies address={dao.treasuryAddress} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  const dao = daos.find(
    (dao) => dao.dao.toLowerCase() == (id as string).toLowerCase()
  );

  if (!dao) {
    return {
      notFound: true,
    };
  }

  return {
    props: { dao },
  };
};

export default DAO;
