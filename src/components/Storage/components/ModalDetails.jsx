import { Box, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf,faFileExcel } from '@fortawesome/free-solid-svg-icons';

const Details = ({ open,handleClose }) => {
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
        Gebze Antrepo <span style={{fontWeight:500}}>Verimlilik</span>
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
              marginLeft: "-25px",
            }}
          >
            <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  marginLeft: "10px",
                }}
              >
               Tarihler
              </Typography>
              <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  
                }}
              >
               Oran%
              </Typography>
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
              marginLeft: "-10px",
            }}
          >
            <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  marginLeft: "-5px",
                }}
              >
               20 Eylül 2023 Çarşamba
              </Typography>
              <Box sx={{display:"flex",flexDirection:"row",alignItems:"center",textAlign:"center",justifyContent:"center",backgroundColor:"#F2F2F2",borderRadius:"5px",width:75,height:30}}>
              <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
               %30
              </Typography>
              </Box>
            
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
              marginLeft: "-10px",
            }}
          >
            <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  marginLeft: "-5px",
                }}
              >
               19 Eylül 2023 Salı
              </Typography>
              <Box sx={{display:"flex",flexDirection:"row",alignItems:"center",textAlign:"center",justifyContent:"center",backgroundColor:"#F2F2F2",borderRadius:"5px",width:75,height:30}}>
              <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
               %20
              </Typography>
              </Box>
            
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
              marginLeft: "-10px",
            }}
          >
            <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  marginLeft: "-5px",
                }}
              >
               18 Eylül 2023 Pazartesi
              </Typography>
              <Box sx={{display:"flex",flexDirection:"row",alignItems:"center",textAlign:"center",justifyContent:"center",backgroundColor:"#F2F2F2",borderRadius:"5px",width:75,height:30}}>
              <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
               %120
              </Typography>
              </Box>
            
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
              marginLeft: "-10px",
            }}
          >
            <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  marginLeft: "-5px",
                }}
              >
               17 Eylül 2023 Pazar
              </Typography>
              <Box sx={{display:"flex",flexDirection:"row",alignItems:"center",textAlign:"center",justifyContent:"center",backgroundColor:"#F2F2F2",borderRadius:"5px",width:75,height:30}}>
              <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
               %90
              </Typography>
              </Box>
            
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
              marginLeft: "-10px",
            }}
          >
            <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  marginLeft: "-5px",
                }}
              >
               Geçmiş
              </Typography>
              <Box sx={{display:"flex",flexDirection:"row",alignItems:"center",textAlign:"center",justifyContent:"center",backgroundColor:"#F2F2F2",borderRadius:"5px",width:75,height:30}}>
              <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
               %70
              </Typography>
              </Box>
            
          </ListItem>
          <Divider
            component="li"
            style={{ width: "595px", marginLeft: "-20px", color: "#E9E9E9" }}
          />
        
        <ListItem
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "-10px",
              gap:"30px",
              marginTop:"10px",
              marginBottom:"-10px"
            }}
          >
            <Box style={{display:"flex",flexDirection:"row",textAlign:"center",alignItems:"center",marginLeft: "-5px",justifyContent:"center",cursor:"pointer"}}>
            <FontAwesomeIcon icon={faFilePdf}  style={{fontSize:"20px",color: "#1E3767",}} />
            <Typography
                style={{
                  fontSize: "13px",
                  marginLeft:"5px",
                  color:"#7F8198",
                  marginTop:"2px"
                }}
              >
               PDF’e aktar.
              </Typography>
            </Box>
            
            <Box style={{display:"flex",flexDirection:"row",textAlign:"center",alignItems:"center",marginLeft: "-5px",justifyContent:"center",cursor:"pointer"}}>
            <FontAwesomeIcon icon={faFileExcel}  style={{fontSize:"20px",color: "#1E3767",}} />
            <Typography
                style={{
                  fontSize: "13px",
                  marginLeft:"5px",
                  color:"#7F8198",
                  marginTop:"2px"
                }}
              >
              Excel’e aktar
              </Typography>
            </Box>
            
          </ListItem>
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default Details;
