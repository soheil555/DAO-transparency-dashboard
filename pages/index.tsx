import { Container, Box } from "@mui/material";
import type { NextPage } from "next";
import SearchDAO from "src/components/index/SearchDAO";

const Home: NextPage = () => {
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
        <SearchDAO />
      </Box>
    </Container>
  );
};

export default Home;
