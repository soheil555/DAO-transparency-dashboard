import type { NextPage, GetServerSideProps } from "next";
import { Container, Box, Grid, Paper } from "@mui/material";
import { daos, DAO } from "../../data";
import { styled } from "@mui/material/styles";
import Currencies from "../../src/components/dao/Currencies";
import Treasury from "../../src/components/dao/Treasury";
import Info from "../../src/components/dao/Info";
import HistoricalPortfolio from "../../src/components/dao/HistoricalPortfolio";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

interface Props {
  dao: DAO;
}

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Info />
          </Grid>
          <Grid item xs={4}>
            <Treasury />
          </Grid>
          <Grid item xs={12}>
            <HistoricalPortfolio address={dao.treasuryAddress} />
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
