import { Snackbar, Alert } from "@mui/material";
import { useDispatch } from "react-redux";

export default function Error({ message }: { message: string }) {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch({
      type: "HIDE_ERROR",
    });
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={true}
      autoHideDuration={10000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
