import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { Card, Box, Typography, Grid } from "@mui/material";

export default function Info() {
  const { name, logo, description } = useSelector(
    (state: RootState) => state.dao
  );

  return (
    <Card
      sx={{
        padding: 2,
      }}
    >
      <Grid
        container
        sx={{
          minHeight: 230,
        }}
      >
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
                currentTarget.src = "/default_dao.png";
              }}
            />
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography component="div" variant="h4" gutterBottom>
            {name}
          </Typography>

          <Typography component="div">{description}</Typography>
        </Grid>
      </Grid>
    </Card>
  );
}
