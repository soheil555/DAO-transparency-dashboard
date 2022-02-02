import { DAO as DAOType } from "../../data";
import {
  Card,
  Typography,
  CardMedia,
  CardContent,
  Grow,
  CardActions,
  Button,
} from "@mui/material";
import Link from "./Link";

import { ArrowRight } from "@mui/icons-material";

interface Props {
  dao: DAOType;
}

export default function DAO({ dao }: Props) {
  return (
    <Grow in={true}>
      <Card sx={{ width: 345, maxWidth: 345 }}>
        <CardMedia component="img" height="200" image={dao.image} />
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            {dao.dao}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {dao.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Link href={`/dao/${dao.dao}`}>
            <Button endIcon={<ArrowRight />} variant="contained" size="medium">
              Start Analayze
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grow>
  );
}
