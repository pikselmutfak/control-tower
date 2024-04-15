import * as Yup from "yup";
import { setAuthenticate } from "@/core/redux/actions/rootActions";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Regions = ({ open,handleClose }) => {
  return (
    <Dialog
      open={open}
      keepMounted
      fullWidth={true}
      maxWidth={"md"}
      aria-describedby="alert-dialog-slide-description"
      sx={{
        backdropFilter: "blur(5px) sepia(10%)",
      }}
      // 👇 Props passed to Paper (modal content)
      PaperProps={{ sx: { borderRadius: "20px", width: "600px", padding: 0 } }}
    >
          <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent
        sx={{
          background: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography style={{ fontSize: "20px", fontWeight: 600, marginBottom:"5px"}}>
          BÖLGE SEÇİN
        </Typography>

        <List style={{ width: "100%" }} aria-label="mailbox folders">
          <Divider
            component="li"
            style={{ width: "595px", marginLeft: "-20px", color: "#E9E9E9" }}
          />
          <ListItem
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: "10px",
              paddingBottom: "10px",
              marginLeft: "-10px",
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <OpenWithIcon />
              <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  marginLeft: "10px",
                }}
              >
                Marmara Bölgesi
              </Typography>
            </Box>
            <FormControlLabel
              style={{
                backgroundColor: "#F2F2F2",
                paddingRight: "10px",
                borderRadius: "5px",
              }}
              control={<Checkbox style={{ color: "black" }} />}
              label={
                <Typography style={{ fontSize: "14px", fontWeight: 500 }}>
                  Göster
                </Typography>
              }
            />
          </ListItem>
          <Divider
            component="li"
            style={{ width: "595px", marginLeft: "-20px", color: "#E9E9E9" }}
          />
          <ListItem
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: "10px",
              paddingBottom: "10px",
              marginLeft: "-10px",
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <OpenWithIcon />
              <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  marginLeft: "10px",
                }}
              >
                Ege Bölgesi
              </Typography>
            </Box>
            <FormControlLabel
              style={{
                backgroundColor: "#F2F2F2",
                paddingRight: "10px",
                borderRadius: "5px",
              }}
              control={<Checkbox style={{ color: "black" }}  />}
              label={
                <Typography style={{ fontSize: "14px", fontWeight: 500 }}>
                  Göster
                </Typography>
              }
            />
          </ListItem>
          <Divider
            component="li"
            style={{ width: "595px", marginLeft: "-20px", color: "#E9E9E9" }}
          />
          <ListItem
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: "10px",
              paddingBottom: "10px",
              marginLeft: "-10px",
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <OpenWithIcon />
              <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  marginLeft: "10px",
                }}
              >
                Akdeniz Bölgesi
              </Typography>
            </Box>
            <FormControlLabel
              style={{
                backgroundColor: "#F2F2F2",
                paddingRight: "10px",
                borderRadius: "5px",
              }}
              control={<Checkbox style={{ color: "black" }}  />}
              label={
                <Typography style={{ fontSize: "14px", fontWeight: 500 }}>
                  Göster
                </Typography>
              }
            />
          </ListItem>
          <Divider
            component="li"
            style={{ width: "595px", marginLeft: "-20px", color: "#E9E9E9" }}
          />
          <ListItem
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: "10px",
              paddingBottom: "10px",
              marginLeft: "-10px",
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <OpenWithIcon />
              <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  marginLeft: "10px",
                }}
              >
              Karadeniz Bölgesi
              </Typography>
            </Box>
            <FormControlLabel
              style={{
                backgroundColor: "#F2F2F2",
                paddingRight: "10px",
                borderRadius: "5px",
              }}
              control={<Checkbox style={{ color: "black" }} />}
              label={
                <Typography style={{ fontSize: "14px", fontWeight: 500 }}>
                  Göster
                </Typography>
              }
            />
          </ListItem>
          <Divider
            component="li"
            style={{ width: "595px", marginLeft: "-20px", color: "#E9E9E9" }}
          />
          <ListItem
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: "10px",
              paddingBottom: "10px",
              marginLeft: "-10px",
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <OpenWithIcon />
              <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  marginLeft: "10px",
                }}
              >
              İç Anadolu Bölgesi
              </Typography>
            </Box>
            <FormControlLabel
              style={{
                backgroundColor: "#F2F2F2",
                paddingRight: "10px",
                borderRadius: "5px",
              }}
              control={<Checkbox style={{ color: "black" }}  />}
              label={
                <Typography style={{ fontSize: "14px", fontWeight: 500 }}>
                  Göster
                </Typography>
              }
            />
          </ListItem>
          <Divider
            component="li"
            style={{ width: "595px", marginLeft: "-20px", color: "#E9E9E9" }}
          />
          <ListItem
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: "10px",
              paddingBottom: "10px",
              marginLeft: "-10px",
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <OpenWithIcon />
              <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  marginLeft: "10px",
                }}
              >
              Doğu Anadolu Bölgesi
              </Typography>
            </Box>
            <FormControlLabel
              style={{
                backgroundColor: "#F2F2F2",
                paddingRight: "10px",
                borderRadius: "5px",
              }}
              control={<Checkbox style={{ color: "black" }}  />}
              label={
                <Typography style={{ fontSize: "14px", fontWeight: 500 }}>
                  Göster
                </Typography>
              }
            />
          </ListItem>
          <Divider
            component="li"
            style={{ width: "595px", marginLeft: "-20px", color: "#E9E9E9" }}
          />
          <ListItem
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: "10px",
              marginBottom: "-15px",
              marginLeft: "-10px",
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <OpenWithIcon />
              <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  marginLeft: "10px",
                }}
              >
              G.Doğu Anadolu Bölgesi
              </Typography>
            </Box>
            <FormControlLabel
              style={{
                backgroundColor: "#F2F2F2",
                paddingRight: "10px",
                borderRadius: "5px",
              }}
              control={<Checkbox style={{ color: "black" }}  />}
              label={
                <Typography style={{ fontSize: "14px", fontWeight: 500 }}>
                  Göster
                </Typography>
              }
            />
          </ListItem>
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default Regions;
