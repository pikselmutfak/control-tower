import {useState} from 'react'
import { Container, Grid,Typography,Box,Paper } from '@mui/material';
import Table from '@/components/ui/Table/Table'
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Image from "../../../public/logo.svg";
import ContentMap from './components/ContentMap'
import ModalRegions from './components/ModalRegions'


const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const data = [
    { action: 'Row 1 Action', store: 'Adana Parsiyel', efficiency: 85, fill: 70, capacity: 100, picking: 30, downtime: false, document: 20, onSite: 10, delivery: 80 },
    { action: 'Row 2 Action', store: 'Gebze Antrepo', efficiency: 75, fill: 80, capacity: 120, picking: 40, downtime: true, document: 25, onSite: 15, delivery: 90 },
    { action: 'Row 2 Action', store: 'Gebze Antrepo', efficiency: 75, fill: 80, capacity: 120, picking: 40, downtime: true, document: 25, onSite: 15, delivery: 90 },
    { action: 'Row 2 Action', store: 'Gebze Antrepo', efficiency: 75, fill: 80, capacity: 120, picking: 40, downtime: true, document: 25, onSite: 15, delivery: 90 },
    { action: 'Row 2 Action', store: 'Gebze Antrepo', efficiency: 75, fill: 80, capacity: 120, picking: 40, downtime: true, document: 25, onSite: 15, delivery: 90 },
    { action: 'Row 2 Action', store: 'Gebze Antrepo', efficiency: 75, fill: 80, capacity: 120, picking: 40, downtime: true, document: 25, onSite: 15, delivery: 90 },
    { action: 'Row 2 Action', store: 'Gebze Antrepo', efficiency: 75, fill: 80, capacity: 120, picking: 40, downtime: true, document: 25, onSite: 15, delivery: 90 },
    { action: 'Row 2 Action', store: 'Gebze Antrepo', efficiency: 75, fill: 80, capacity: 120, picking: 40, downtime: true, document: 25, onSite: 15, delivery: 90 },
    { action: 'Row 2 Action', store: 'Gebze Antrepo', efficiency: 75, fill: 80, capacity: 120, picking: 40, downtime: true, document: 25, onSite: 15, delivery: 90 },
    { action: 'Row 2 Action', store: 'Gebze Antrepo', efficiency: 75, fill: 80, capacity: 120, picking: 40, downtime: true, document: 25, onSite: 15, delivery: 90 },
    { action: 'Row 2 Action', store: 'Gebze Antrepo', efficiency: 75, fill: 80, capacity: 120, picking: 40, downtime: true, document: 25, onSite: 15, delivery: 90 },
    { action: 'Row 2 Action', store: 'Gebze Antrepo', efficiency: 75, fill: 80, capacity: 120, picking: 40, downtime: true, document: 25, onSite: 15, delivery: 90 },
    { action: 'Row 2 Action', store: 'Gebze Antrepo', efficiency: 75, fill: 80, capacity: 120, picking: 40, downtime: true, document: 25, onSite: 15, delivery: 90 },
    { action: 'Row 2 Action', store: 'Gebze Antrepo', efficiency: 75, fill: 80, capacity: 120, picking: 40, downtime: true, document: 25, onSite: 15, delivery: 90 },
    { action: 'Row 2 Action', store: 'Gebze Antrepo', efficiency: 75, fill: 80, capacity: 120, picking: 40, downtime: true, document: 25, onSite: 15, delivery: 90 },
    { action: 'Row 2 Action', store: 'Gebze Antrepo', efficiency: 75, fill: 80, capacity: 120, picking: 40, downtime: true, document: 25, onSite: 15, delivery: 90 },
    { action: 'Row 2 Action', store: 'Gebze Antrepo', efficiency: 75, fill: 80, capacity: 120, picking: 40, downtime: true, document: 25, onSite: 15, delivery: 90 },
    { action: 'Row 2 Action', store: 'Gebze Antrepo', efficiency: 75, fill: 80, capacity: 120, picking: 40, downtime: true, document: 25, onSite: 15, delivery: 90 },
    { action: 'Row 2 Action', store: 'Gebze Antrepo', efficiency: 75, fill: 80, capacity: 120, picking: 40, downtime: true, document: 25, onSite: 15, delivery: 90 },
    { action: 'Row 2 Action', store: 'Gebze Antrepo', efficiency: 75, fill: 80, capacity: 120, picking: 40, downtime: true, document: 25, onSite: 15, delivery: 90 },
    { action: 'Row 2 Action', store: 'Gebze Antrepo', efficiency: 75, fill: 80, capacity: 120, picking: 40, downtime: true, document: 25, onSite: 15, delivery: 90 },
    { action: 'Row 2 Action', store: 'Gebze Antrepo', efficiency: 75, fill: 80, capacity: 120, picking: 40, downtime: true, document: 25, onSite: 15, delivery: 90 },

    // Daha fazla veri ekleyin
];

const data2 = [
  { action: 'Row 1 Action', location: 'Gebze A. - Arnavutköy',status:"error",message:"Gecikme: 20 dk"  },
  { action: 'Row 2 Action', location: 'Çorlu P. – Adana P.',status:"success",message:"Zamanında Teslimat"  },
  { action: 'Row 2 Action', location: 'Bursa P. – Bursa P.',status:"warning",message:"Yavaş: 20 dk" },
  { action: 'Row 1 Action', location: 'Gebze A. - Arnavutköy',status:"error",message:"Gecikme: 20 dk"  },
  { action: 'Row 2 Action', location: 'Çorlu P. – Adana P.',status:"success",message:"Zamanında Teslimat"  },
  { action: 'Row 2 Action', location: 'Bursa P. – Bursa P.',status:"warning",message:"Yavaş: 20 dk" },
  { action: 'Row 1 Action', location: 'Gebze A. - Arnavutköy',status:"error",message:"Gecikme: 20 dk"  },
  { action: 'Row 2 Action', location: 'Çorlu P. – Adana P.',status:"success",message:"Zamanında Teslimat"  },
  { action: 'Row 2 Action', location: 'Bursa P. – Bursa P.',status:"warning",message:"Yavaş: 20 dk" },
  { action: 'Row 1 Action', location: 'Gebze A. - Arnavutköy',status:"error",message:"Gecikme: 20 dk"  },
  { action: 'Row 2 Action', location: 'Çorlu P. – Adana P.',status:"success",message:"Zamanında Teslimat"  },
  { action: 'Row 2 Action', location: 'Bursa P. – Bursa P.',status:"warning",message:"Yavaş: 20 dk" },
  { action: 'Row 1 Action', location: 'Gebze A. - Arnavutköy',status:"error",message:"Gecikme: 20 dk"  },
  { action: 'Row 2 Action', location: 'Çorlu P. – Adana P.',status:"success",message:"Zamanında Teslimat"  },
  { action: 'Row 2 Action', location: 'Bursa P. – Bursa P.',status:"warning",message:"Yavaş: 20 dk" },
  { action: 'Row 1 Action', location: 'Gebze A. - Arnavutköy',status:"error",message:"Gecikme: 20 dk"  },
  { action: 'Row 2 Action', location: 'Çorlu P. – Adana P.',status:"success",message:"Zamanında Teslimat"  },
  { action: 'Row 2 Action', location: 'Bursa P. – Bursa P.',status:"warning",message:"Yavaş: 20 dk" },

];

const rows = [
    { title: "Aksiyon", name: "action", key: "action", sorting: false },
    { title: "Depo İsmi", name: "store", sorting: false },
    { title: "Verimlilik", name: "efficiency", key: "ratio", sorting: true },
    { title: "Raf Doluluk", name: "fill", key: "ratio", sorting: true },
    { title: "Kapasite", name: "capacity", key: "ratio", sorting: true },
    { title: "Toplama", name: "picking", key: "ratio", sorting: true },
    { title: "Kesinti", name: "downtime", key: "boolean", sorting: true },
    { title: "Evrak", name: "document", key: "number", sorting: true },
    { title: "Yerde", name: "onSite", key: "number", sorting: true },
    { title: "Teslim", name: "delivery", key: "number", sorting: true },
]

const rows2 = [
  { title: "Aksiyon", name: "action", key: "action", sorting: false },
  { title: "Kalkış-Varış", name: "location", sorting: false },
  { title: "Durum", name: "status", key: "status", sorting: true },
]

  return (
    <Container maxWidth={false} style={{marginBottom:"20px"}}>
      <Grid container spacing={1}>
      <Grid item xs={12} md={12} lg={12} style={{marginTop:"10px"}}>
       <Paper  style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:"10px 10px 10px 10px"}}>
       <Box style={{display:"flex",flexDirection:"row",justifyContent:"center",textAlign:"center",alignItems:"center",gap:"10px"}}>
        <WarehouseOutlinedIcon style={{fontSize:"32px",color: "#1E3767",}} />
        <Typography
          style={{
            fontSize: "20px",
            color: "#1E3767",
            fontWeight: 700,
          }}
        >
          DEPOLAMA GENEL BAKIŞ 
        </Typography>
        </Box>

        <Box onClick={() => {setIsModalOpen(true)}} style={{display:"flex",flexDirection:"row",justifyContent:"center",textAlign:"center",alignItems:"center",gap:"10px",cursor:"pointer"}}>
        <FontAwesomeIcon icon={faChevronDown}  style={{fontSize:"20px",color: "#1E3767",}} />
        <Typography
          style={{
            fontSize: "20px",
            color: "#1E3767",
            fontWeight: 700,
          }}
        >
          MARMARA BÖLGESİ 
        </Typography>
        </Box>
        <Box style={{width:160,display:"flex",flexDirection:"row-reverse"}}>
        <img src={Image} alt={Image} width="80" height="40" />
        </Box>
       
       
       </Paper>
        
       
      
        </Grid>

        <Grid item xs={12} md={12} lg={12} style={{marginTop:"5px"}}>
          <ContentMap />
        </Grid>
        <Grid item xs={12} md={9} lg={9}>
          <Table title="Depolama" data={data} rows={rows} pageSize="15" isLoading={false} />
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Table title="Nakliye" rows={rows2} data={data2} pageSize="11" isLoading={false} />
        </Grid>
      </Grid>

      <ModalRegions open={isModalOpen} handleClose={() => {setIsModalOpen(false)}} />
    </Container>
  );
};

export default Page;
