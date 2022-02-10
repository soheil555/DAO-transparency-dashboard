import { Box, TextField, Autocomplete } from "@mui/material";
import { useState } from "react";
import { DAO as DAOType } from "prisma/seed";
import { LoadingButton } from "@mui/lab";
import { ArrowRightAlt } from "@mui/icons-material";

interface Props {
  daos: DAOType[];
}

export default function SearchDAO({ daos }: Props) {
  const [dao, setDAO] = useState<DAOType | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <Box
      sx={{
        width: 800,
        maxWidth: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Autocomplete
        onChange={(event: any, value: DAOType | null) => {
          setDAO(value);
        }}
        disablePortal
        options={daos}
        fullWidth
        sx={{ mr: 2 }}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => <TextField {...params} label="Search DAOS" />}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = "/default_dao.png";
              }}
              loading="lazy"
              width="20"
              src={option.logoUrl}
            />{" "}
            {option.name}
          </Box>
        )}
      />
      <LoadingButton
        href={`/dao/${dao?.id}`}
        endIcon={<ArrowRightAlt />}
        variant="contained"
        size="small"
        onClick={() => {
          setLoading(true);
        }}
        loading={loading}
        loadingPosition="end"
        disabled={loading || !dao}
      >
        Start Analayze
      </LoadingButton>
    </Box>
  );
}
