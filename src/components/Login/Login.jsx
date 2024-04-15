import * as Yup from "yup";
import { setAuthenticate } from "@/core/redux/actions/rootActions";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Image from "../../../public/logo.svg";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  inputField: {
    "& label.Mui-focused": {
      color: "#B2BAC2",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#F2F2F2",
        color: "black",
      },
      "&:hover fieldset": {
        borderColor: "#B2BAC2",
        color: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#B2BAC2",
        color: "black",
      },
      "& input": {
        color: "black",
      },
    },
  },
  errorInput: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
      },
    },
  },
});

const Login = ({ open }) => {
  const classes = useStyles();
  const NewProductSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(NewProductSchema),
  });

  const onSubmit = async (data) => {
    try {
      console.log("data", data);
      setAuthenticate(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog
      open={open}
      keepMounted
      fullWidth={true}
      maxWidth={"xs"}
      aria-describedby="alert-dialog-slide-description"
      sx={{
        backdropFilter: "blur(5px) sepia(10%)",
      }}
      // 👇 Props passed to Paper (modal content)
      PaperProps={{ sx: { borderRadius: "20px", width: "380px" } }}
    >
      <DialogContent
        sx={{
          background: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={Image}
          alt={Image}
          width="80"
          height="40"
          style={{ marginTop: "15px" }}
        />
        <Typography
          style={{
            fontSize: "24px",
            color: "#1E3767",
            fontWeight: 700,
            marginTop: "5px",
          }}
        >
          CONTROL TOWER
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            paddingLeft: "10px",
            paddingRight: "10px",
            gap: "10px",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Kullanıcı Adı"
                  className={`${classes.inputField} ${
                    errors.username ? classes.errorInput : ""
                  }`}
                  style={{
                    marginTop: "25px",
                    backgroundColor: "#F2F2F2",
                    borderRadius: "5px",
                  }}
                  variant="outlined"
                  fullWidth
                  size="small"
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="password"
                  label="Şifre"
                  style={{
                    marginTop: "15px",
                    backgroundColor: "#F2F2F2",
                    borderRadius: "5px",
                  }}
                  className={`${classes.inputField} ${
                    errors.password ? classes.errorInput : ""
                  }`}
                  variant="outlined"
                  fullWidth
                  size="small"
                />
              )}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                marginTop: "30px",
                marginBottom: "30px",
                backgroundColor: "#1E3767",
              }}
              fullWidth
              disabled={isSubmitting}
            >
              Giriş Yap
            </Button>
          </form>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
