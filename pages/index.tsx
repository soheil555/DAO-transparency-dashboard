import { Container, Box } from "@mui/material";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></Box>
    </Container>
  );
};

export default Home;
