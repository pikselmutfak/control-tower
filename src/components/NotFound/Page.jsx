import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Typography, Box, Button, Container } from "@mui/material";

const useStyles = makeStyles({
  fullscreenBox: {
    minWidth: "100vw",
    minHeight: "100vh",
    backgroundColor: "#AFDEE8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  innerBoxSignIn: {
    width: "90%",
    height: "90vh",
    background:
      "radial-gradient(86.86% 86.86% at 43.43% 43.43%, rgba(255, 255, 255, 0.32) 29%, rgba(127.34, 187.05, 199.75, 0.69) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.65) 100%)",
    borderRadius: 40,
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    overflowY: "auto" /* Yalnızca dikey kaydırma */,
    overflowX: "hidden" /* Yatay kaydırmayı devre dışı bırakma */,
  },
  inputField: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#004757",
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
  title: {
    color: "#004757",
    fontSize: 40,
    fontWeight: "700",
  },
  title404: {
    color: "#004757",
    fontSize: 80,
    fontWeight: "700",
  },
  altTitle: {
    color: "#004757",
    fontSize: 18,
    fontWeight: 400,
  },
});

const Page = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Container className={classes.fullscreenBox}>
      <div className={classes.innerBoxSignIn}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: "60%",
            gap: "20px",
          }}
        >
          <Box>
            <Typography className={classes.title404} gutterBottom>
              404
            </Typography>
            <Typography className={classes.title} gutterBottom>
              The page you’re looking for doesn’t exist.
            </Typography>
          </Box>

          <Button
            sx={{
              color: "white",
              fontSize: 16,
              fontWeight: "700",
              background: "#004757",
              marginTop: "20px",
              width: "90%",
            }}
            variant="contained"
            fullWidth
            onClick={() => {
              navigate("/Home");
            }}
          >
            Back Home
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Page;
