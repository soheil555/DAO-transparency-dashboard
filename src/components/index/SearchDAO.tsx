import { Box, TextField, Autocomplete } from "@mui/material";
import { useState } from "react";
import DAO from "./DAO";
import { DAO as DAOType } from "prisma/seed";

interface Props {
  daos: DAOType[];
}

export default function SearchDAO({ daos }: Props) {
  const [dao, setDAO] = useState<DAOType | null>(null);

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Autocomplete
        onChange={(event: any, value: DAOType | null) => {
          if (value && JSON.stringify(value) != JSON.stringify(dao)) {
            setDAO(value);
          }
        }}
        disablePortal
        options={daos}
        fullWidth
        sx={{ mb: 2 }}
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

      {dao && <DAO dao={dao} />}
    </Box>
  );
}
