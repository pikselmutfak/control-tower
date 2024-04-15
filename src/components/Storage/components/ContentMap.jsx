import { useEffect, useState, useRef } from "react";
import { GoogleMap, MarkerF, InfoWindowF, useLoadScript } from "@react-google-maps/api";
import {  Typography, IconButton, CircularProgress, Paper,Box } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import LocationIcon from '../../../../public/locationIcon.png'


const SecondAlert = () => {
  const libraries = ['places'];
  const [currentLocation, setCurrentLocation] = useState(null);
  const mapRef = useRef(null);
  const [selectedStation, setSelectedStation] = useState(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDiroB9BWpxX22eXECEsFu7NXnuFQs6tc0', // Replace 'YOUR_API_KEY' with your actual Google Maps API key
    libraries,
  });
  const boxes = [{color:"#C00000",title:"Verimlilik Oranı",value:"%30"},
                 {color:"#FFC000",title:"Raf Doluluk Oranı",value:"%60"},
                 {color:"#70AD47",title:"Kapasite Oranı",value:"%80"},
                 {color:"#C00000",title:"Sipariş Toplama Oranı",value:"%20"},
                 {color:"#C00000",title:"Sistem Kesinti",value:"0"},
                 {color:"#C00000",title:"Teslim Evrağı Eksik",value:"3"},
                 {color:"#C00000",title:"Yerde Kalan Ürünler",value:"23 Ton"},
                 {color:"#C00000",title:"Sipariş Teslim Durumu",value:"250"},
                ]
                const modalBoxes = [{color:"#C00000",title:"Verimlilik Oranı",value:"%30"},
                {color:"#FFC000",title:"Raf Doluluk Oranı",value:"%40"},
                {color:"#70AD47",title:"Kapasite Oranı",value:"%60"},
                {color:"#C00000",title:"Sipariş Toplama",value:"%10"},
                {color:"#C00000",title:"Sistem Kesinti",value:"Yok"},
                {color:"#C00000",title:"Teslim Evrak Eksik",value:"3"},
                {color:"#C00000",title:"Yerde Kalan Ürün",value:"23 Ton"},
                {color:"#C00000",title:"Sipariş Tes. Dur.",value:"250"},
               ]
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting current location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser");
    }
  }, []);

  const fuelStations = [
    { lat: 40.9876, lng: 29.1234, name: "Eko İstasyon", district: "Kartal" },
    { lat: 41.2345, lng: 28.8765, name: "Opet İstasyon", district: "Kadıköy" },
    { lat: 41.0000, lng: 28.8000, name: "Shell İstasyon", district: "Üsküdar" },
    { lat: 41.0987, lng: 29.0123, name: "BP İstasyon", district: "Maltepe" },
    { lat: 41.5432, lng: 28.6543, name: "Total İstasyon", district: "Pendik" },
    { lat: 41.6789, lng: 28.9876, name: "İpragaz İstasyon", district: "Tuzla" },
];

  

  const handleMarkerClick = (station) => {
    setSelectedStation(station);
  };

  return (
    <div style={{ position: "relative" }}>
    
      <Paper style={{ position: "relative", height: "85vh",marginBottom:"30px" }}>
        {!isLoaded ? (
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <CircularProgress />
          </div>
        ) : (
          <>
            <Box style={{ position: "absolute", bottom: "-40px", zIndex: 1000,display:"flex",flexDirection:"row",gap:"5px",width:"100%",padding:"5px 10px 5px 10px",justifyContent:"center" }}>
    
    {boxes.map((_, index) => (
        <Paper key={index} style={{ padding: "10px", borderRadius: "5px", background: "white",width:"180px",height:"80px",display:"flex",flexDirection:"row",alignItems:"center",gap:"10px",justifyContent:"flex-start" }}>
          <Box style={{
    width: "8px",
    height: "100%",
    background: _.color }} />
    <Box style={{display:"flex",flexDirection:"column",gap:"3px",}}>
        <Typography style={{color:"#3B366C",fontSize:"13px",fontWeight:600}}>
        {_.title}
        </Typography>
        <Typography style={{color:"#3B366C",fontSize:"22px",fontWeight:600}}>
        {_.value}
        </Typography>
    </Box>
        </Paper>
    ))}

</Box>
          <GoogleMap
            options={{
              styles: [
                {
                  featureType: "poi",
                  elementType: "labels",
                  stylers: [{ visibility: "off" }],
                },
                {
                  featureType: "road",
                  elementType: "labels",
                  stylers: [{ visibility: "off" }],
                },
              ],
              restriction: {
                latLngBounds: {
                  north: 41.75, // Upper bound
                  south: 40.5, // Lower bound
                  west: 26.0, // Left bound
                  east: 30.0 // Right bound
                },
                strictBounds: true // Keep the map within bounds
              },
              gestureHandling: "none", // Disable panning
              zoomControl: false, // Remove zoom control
            }}
            mapContainerStyle={{ height: "100%", width: "100%", borderRadius: "5px" }}
            center={{ lat: 41.109, lng: 28.874 }} // Marmara Bölgesi'nin bir konumu
            zoom={9}
            onLoad={(map) => (mapRef.current = map)}
          >
          

            {fuelStations.map((station, index) => (
              <MarkerF
                key={index}
                position={{ lat: station.lat, lng: station.lng }}
                title={station.name}
                icon={{
                  url: LocationIcon,
                  scaledSize: new window.google.maps.Size(40, 40),
                }}
                onClick={() => handleMarkerClick(station)}
                visible={!selectedStation || (selectedStation && selectedStation !== station)}
              />
            ))}

            {selectedStation && (
              <InfoWindowF
                position={{ lat: selectedStation.lat, lng: selectedStation.lng }}
                onCloseClick={() => setSelectedStation(null)}
                clickable={true}
              >
                <Box style={{ display: "flex", flexDirection: "column", alignItems: "left",marginBottom:"10px" }}>
                <IconButton
                  style={{ position: "absolute", top: "6px", right: "10px", color: "black" }}
                  onClick={() => setSelectedStation(null)}
                >
                  <CloseIcon />
                </IconButton>
                <Box style={{display:"flex",flexDirection:"row",justifyContent:"flex-start",textAlign:"center",alignItems:"flex-end",gap:"5px"}}>
        <WarehouseOutlinedIcon style={{fontSize:"32px",color: "#1E3767",}} />
        <Typography
          style={{
            fontSize: "20px",
            color: "#1E3767",
            fontWeight: 700,
            marginBottom:"-4px"
          }}
        >
          Gebze
        </Typography>
        </Box>

        <Box style={{ display: "flex", flexWrap: "wrap", gap: "5px",marginTop:"10px",width:"330px"}}>
  {modalBoxes.map((_, index) => (
    <Paper elevation={1} key={index} style={{ width:"160px", padding: "10px", borderRadius: "5px", display: "flex", flexDirection: "row", alignItems: "center", gap: "10px", justifyContent: "flex-start" }}>
      <Box style={{ width: "8px", height: "100%", background: _.color }} />
      <Box style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
        <Typography style={{ color: "#3B366C", fontSize: "13px", fontWeight: 600 }}>
          {_.title}
        </Typography>
        <Typography style={{ color: "#3B366C", fontSize: "22px", fontWeight: 600 }}>
          {_.value}
        </Typography>
      </Box>
    </Paper>
  ))}
</Box>
                
                 
                </Box>
              </InfoWindowF>
            )}
          </GoogleMap>
          </>
        )}
      </Paper>
    </div>
  );
};

export default SecondAlert;
