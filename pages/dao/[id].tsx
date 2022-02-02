import { useRouter } from "next/router";
import type { NextPage, GetServerSideProps } from "next";
import { Container, Box } from "@mui/material";
import { daos, DAO } from "../../data";

interface Props {
  dao: DAO;
}

const DAO: NextPage<Props> = ({ dao }) => {
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
        {dao.dao}
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
