import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Card, Box, Typography } from "@mui/material";

export default function Info() {
  const { name, logo, description } = useSelector(
    (state: RootState) => state.dao
  );

  return (
    <Card
      sx={{
        height: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ width: "50%", display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width: "10rem",
            height: "10rem",
            borderRadius: "50%",
            overflow: "hidden",
            border: 2,
            borderColor: "darkgray",
          }}
          component="div"
        >
          <img
            src={logo}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              // currentTarget.src =
              //   "https://deepdao.io/static/media/default_organization_placeholder.deb3bbce.svg";
            }}
          />
        </Box>
      </Box>

      <Box sx={{ width: "50%" }}>
        <Typography component="div" variant="h4" gutterBottom>
          {name}
        </Typography>

        <Typography component="div">{description}</Typography>
      </Box>
    </Card>
  );
}
