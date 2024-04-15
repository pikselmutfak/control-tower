import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const propTypes = {
  title: PropTypes.string,
  icon: PropTypes.elementType,
  path:PropTypes.string,
  numbers: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      color: PropTypes.string,
    })
  ),
};

const defaultProps = {
  title: "",
  path:"",
  icon: () => null,
  numbers: [],
};

const useStyles = makeStyles({
  menuBox: {
    position: "relative",
    backgroundColor: "#FFFFFF",
    border: "1px solid #E8E8E8",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    width: "120px",
    height: "120px",
    cursor:"pointer"
  },
  icon: {
    fontSize: "44px",
    marginBottom: "10px",
  },
  numberBox: {
    position: "absolute",
    top: "5px",
    right: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    width: "15px",
    height: "15px",
    borderRadius: "2px", // Make it circular
    margin: "1px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "10px",
    color: "white",
  },
});

const MenuBox = ({ title, icon: Icon, numbers,path }) => {
  const classes = useStyles();
  const navigate = useNavigate()

  return (
    <Box onClick={() => {navigate(path)}} className={classes.menuBox}>
      <Icon className={classes.icon} />
      <Typography
        style={{
          fontSize: "13px",
          fontWeight: 600,
          textAlign: "center",
          width: "100%",
        }}
        component="h2"
      >
        {title.split("<br />").map((item, index) => (
          <Fragment key={index}>
            {item}
            <br />
          </Fragment>
        ))}
      </Typography>
      <Box className={classes.numberBox}>
        {numbers.map((number, index) => (
          <Box
            key={index}
            className={classes.number}
            style={{ backgroundColor: number.color }}
          >
            {number.value}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

MenuBox.propTypes = propTypes;
MenuBox.defaultProps = defaultProps;

export default MenuBox;
