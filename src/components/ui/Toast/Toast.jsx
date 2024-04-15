import { useEffect, useState,forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useRedux } from "@/core/redux/hooks";
import { deleteToast } from "@/core/redux/actions/rootActions";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Toast = () => {
  const { toasts } = useRedux();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (toasts.length > 0) {
      setOpen(true);
      const { delay } = toasts[0];
      const timeout = setTimeout(() => {
        deleteToast();
        setOpen(false);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [toasts]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const styles = {
    snackbar: {
      zIndex: 99999 // Adjust the z-index value as needed
    }
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      autoHideDuration={3000} // Adjust the duration as needed
      onClose={handleClose}
      style={styles.snackbar} // Apply the style here
    >
      <Alert onClose={handleClose} severity={toasts[0]?.type || "info"}>
        {toasts[0]?.message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
