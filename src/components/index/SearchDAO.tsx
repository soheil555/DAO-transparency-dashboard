import { Box, TextField, Autocomplete, CircularProgress } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import DAO from "./DAO";
import { DAO as DAOType } from "prisma/seed";
import axios from "axios";

export default function SearchDAO() {
  const [dao, setDAO] = useState<DAOType | null>(null);
  const [daos, setDAOS] = useState<readonly DAOType[]>([]);
  const [open, setOpen] = useState(false);

  const loading = open && daos.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const result = await axios.get("/api/dao");

      if (active) {
        setDAOS(result.data);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

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
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        loading={loading}
        disablePortal
        options={daos}
        fullWidth
        sx={{ mb: 2 }}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search DAOS"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </Fragment>
              ),
            }}
          />
        )}
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
