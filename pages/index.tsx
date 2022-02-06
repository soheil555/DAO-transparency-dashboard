import { Container, Box } from "@mui/material";
import type { NextPage, GetServerSideProps } from "next";
import SearchDAO from "../src/components/SearchDAO";
import prisma from "../prisma/client";
import { DAO } from "../prisma/seed";

interface Props {
  daos: DAO[];
}

const Home: NextPage<Props> = ({ daos }) => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SearchDAO daos={daos} />
      </Box>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const daos = await prisma.dAO.findMany();

  return {
    props: { daos },
  };
};

export default Home;
