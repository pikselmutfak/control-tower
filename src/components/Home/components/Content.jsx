import { Grid, Box, Typography } from "@mui/material";
import MenuBox from "./MenuBox";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";

const Content = () => {
  return (
    <>
      <Grid
        style={{
          display: "flex",
          flexDirection: "row",
          paddingLeft: "5%",
          paddingRight: "5%",
          marginTop: "30px",
          gap: "20px",
        }}
        item
        xs={12}
        md={6}
        lg={6}
      >
        <Box>
          <Typography
            style={{ fontSize: "18px", color: "#404040", fontWeight: 600 }}
          >
            Operasyon
          </Typography>
          <Typography style={{ fontSize: "16px", color: "#404040" }}>
            Canlı İzleme
          </Typography>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              flexWrap: "wrap",
              gap: "20px",
              marginTop: "5px",
            }}
          >
            <MenuBox
              icon={WarehouseOutlinedIcon}
              title={"Depolama Genel Bakış"}
              numbers={[
                { value: "1", color: "#C00000" },
                { value: "2", color: "#FFC000" },
                { value: "7", color: "#70AD47" },
              ]}
              path={"/Storage"}
            />
            <MenuBox
              icon={LocalShippingOutlinedIcon}
              title={"Nakliye Genel Bakış"}
              numbers={[
                { value: "1", color: "#C00000" },
                { value: "0", color: "#FFC000" },
                { value: "0", color: "#70AD47" },
              ]}
            />
            <MenuBox
              icon={NotificationsNoneOutlinedIcon}
              title={"Operasyon Bildirimleri"}
              numbers={[
                { value: "1", color: "#C00000" },
                { value: "3", color: "#FFC000" },
                { value: "0", color: "#70AD47" },
              ]}
            />
          </Box>
        </Box>
      </Grid>

      <Grid
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "5%",
          paddingRight: "5%",
          marginTop: "30px",
          gap: "20px",
        }}
        item
        xs={12}
        md={6}
        lg={6}
      >
        <Box>
          <Typography
            style={{ fontSize: "18px", color: "#404040", fontWeight: 600 }}
          >
            Bilgi Teknolojileri
          </Typography>
          <Typography style={{ fontSize: "16px", color: "#404040" }}>
            Canlı İzleme
          </Typography>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              flexWrap: "wrap",
              gap: "20px",
              marginTop: "5px",
            }}
          >
            <MenuBox
              icon={LanguageOutlinedIcon}
              title={"BT <br /> Genel Bakış"}
              numbers={[
                { value: "1", color: "#C00000" },
                { value: "2", color: "#FFC000" },
                { value: "7", color: "#70AD47" },
              ]}
            />
            <MenuBox
              icon={UpdateOutlinedIcon}
              title={"Service Desk Genel Bakış"}
              numbers={[
                { value: "1", color: "#C00000" },
                { value: "0", color: "#FFC000" },
                { value: "0", color: "#70AD47" },
              ]}
            />
          </Box>
        </Box>
      </Grid>

      <Grid
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "5%",
          paddingRight: "5%",
          marginTop: "30px",
          gap: "20px",
        }}
        item
        xs={12}
        md={12}
        lg={12}
      >
        <Box>
          <Typography
            style={{ fontSize: "18px", color: "#404040", fontWeight: 600 }}
          >
            Diğer
          </Typography>
          <Typography style={{ fontSize: "16px", color: "#404040" }}>
            Canlı İzleme
          </Typography>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              flexWrap: "wrap",
              gap: "20px",
              marginTop: "5px",
            }}
          >
            <MenuBox
              icon={TrendingUpIcon}
              title={"Finans <br /> Genel Bakış"}
              numbers={[
                { value: "1", color: "#C00000" },
                { value: "2", color: "#FFC000" },
                { value: "7", color: "#70AD47" },
              ]}
            />
            <MenuBox
              icon={GroupsOutlinedIcon}
              title={"Müşteri Genel Bakış"}
              numbers={[
                { value: "1", color: "#C00000" },
                { value: "0", color: "#FFC000" },
                { value: "0", color: "#70AD47" },
              ]}
            />
            <MenuBox
              icon={AccountTreeOutlinedIcon}
              title={"İK <br /> Genel Bakış"}
              numbers={[
                { value: "1", color: "#C00000" },
                { value: "3", color: "#FFC000" },
                { value: "0", color: "#70AD47" },
              ]}
            />
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Content;
