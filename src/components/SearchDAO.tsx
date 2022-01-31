import { Box, TextField, Autocomplete } from "@mui/material";
import { useState } from "react";
import DAO from "./DAO";

export default function SearchDAO() {
  const [dao, setDAO] = useState<DAO | null>(null);

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
        onChange={(event: any, value: DAO | null) => {
          if (value && JSON.stringify(value) != JSON.stringify(dao)) {
            setDAO(value);
          }
        }}
        disablePortal
        options={daos}
        fullWidth
        sx={{ mb: 2 }}
        renderInput={(params) => <TextField {...params} label="Search DAOS" />}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img loading="lazy" width="20" src={option.logo} /> {option.label}
          </Box>
        )}
      />

      {dao && <DAO dao={dao} />}
    </Box>
  );
}

export interface DAO {
  label: string;
  logo: string;
}

const daos: readonly DAO[] = [
  {
    label: "BitDAO",
    logo: "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/bitdao.eth.png",
  },
  {
    label: "Uniswap",
    logo: "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/dao/logo/uniswap.png",
  },
  {
    label: "Lido",
    logo: "https://deepdao-uploads.s3.us-east-2.amazonaws.com/assets/snapshots/spaces/lido-snapshot.eth.png",
  },
];
