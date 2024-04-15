import { Grid, Box, Typography, Avatar } from "@mui/material";
import Image from "../../../../public/logo.svg";

const Header = () => {
  return (
    <Grid
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: "5%",
        paddingRight: "5%",
        marginTop: "20px",
      }}
      item
      xs={12}
      md={12}
      lg={12}
    >
      <Box style={{ display: "flex", flexDirection: "column" }}>
        <img src={Image} alt={Image} width="80" height="40" />
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
      </Box>
      <Box style={{ display: "flex", flexDirection: "row" }}>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "right",
          }}
        >
          <Typography
            style={{ fontSize: "14px", color: "#223767", fontWeight: 600 }}
          >
            Mustafa Dinçer
          </Typography>
          <Typography style={{ fontSize: "12px", color: "#A6A6A6" }}>
            Yönetim Kurulu Başkanı
          </Typography>
        </Box>
        <Avatar
          style={{
            backgroundColor: "#F2F2F2",
            color: "#7F7F7F",
            fontSize: "14px",
            width: "36px",
            height: "36px",
            marginLeft: "5px",
          }}
        >
          MD
        </Avatar>
      </Box>
    </Grid>
  );
};

export default Header;
