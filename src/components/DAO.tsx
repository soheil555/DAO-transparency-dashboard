import { DAO as DAOType } from "./SearchDAO";
import { Card, Typography, CardMedia, CardContent } from "@mui/material";

interface Props {
  dao: DAOType;
}

export default function DAO({ dao }: Props) {
  return (
    <Card sx={{ width: 345, maxWidth: 345 }}>
      <CardMedia component="img" height="200" image={dao.logo} />
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {dao.label}
        </Typography>
      </CardContent>
    </Card>
  );
}
