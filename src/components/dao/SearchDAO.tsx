import { Box, TextField, Autocomplete, CircularProgress } from "@mui/material";
import { useState, useEffect, Fragment } from "react";
import { DAO as DAOType } from "prisma/seed";
import { LoadingButton } from "@mui/lab";
import { ArrowRightAlt } from "@mui/icons-material";
import axios from "axios";

export default function SearchDAO() {
  const [dao, setDAO] = useState<DAOType | null>(null);
  const [daos, setDAOS] = useState<readonly DAOType[]>([]);
  const [open, setOpen] = useState(false);
  const [analyzeLoading, setAnalyzeLoading] = useState(false);

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
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        disablePortal
        options={daos}
        fullWidth
        sx={{ mr: 2 }}
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
      <LoadingButton
        href={`/dao/${dao?.id}`}
        endIcon={<ArrowRightAlt />}
        variant="contained"
        size="small"
        onClick={() => {
          setAnalyzeLoading(true);
        }}
        loading={analyzeLoading}
        loadingPosition="end"
        disabled={analyzeLoading || !dao}
      >
        Start Analayze
      </LoadingButton>
    </Box>
  );
}
