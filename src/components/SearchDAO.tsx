import { Box, TextField, Autocomplete } from "@mui/material";
import { useState } from "react";
import DAO from "./DAO";
import { daos, DAO as DAOType } from "../../data";
import Currencies from "./dao/Currencies";

export default function SearchDAO() {
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
        getOptionLabel={(option) => option.dao}
        renderInput={(params) => <TextField {...params} label="Search DAOS" />}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img loading="lazy" width="20" src={option.image} /> {option.dao}
          </Box>
        )}
      />

      <Currencies />

      {dao && <DAO dao={dao} />}
    </Box>
  );
}
