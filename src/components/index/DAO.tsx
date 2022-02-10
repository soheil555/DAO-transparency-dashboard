import { DAO as DAOType } from "prisma/seed";
import {
  Card,
  Typography,
  CardMedia,
  CardContent,
  Grow,
  CardActions,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import Link from "./Link";

import { ArrowRightAlt } from "@mui/icons-material";

interface Props {
  dao: DAOType;
}

export default function DAO({ dao }: Props) {
  const [loading, setLoading] = useState(false);

  return (
    <Grow in={true}>
      <Card sx={{ width: 345, maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="200"
          image={dao.logoUrl}
          onError={(e: any) => {
            e.target.onerror = null;
            e.target.src = "/default_dao.png";
          }}
        />
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            {dao.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {dao.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
          <LoadingButton
            LinkComponent={Link}
            href={`/dao/${dao.id}`}
            endIcon={<ArrowRightAlt />}
            variant="contained"
            size="medium"
            onClick={() => {
              setLoading(true);
            }}
            loading={loading}
            loadingPosition="end"
            disabled={loading}
          >
            Start To Analyze
          </LoadingButton>
        </CardActions>
      </Card>
    </Grow>
  );
}
