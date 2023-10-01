import style from './Contact.module.css'
import { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const mapRef = useRef(null);
  const latitude = 37.014396;
  const longitude = -121.583751;

  return ( 
      <div className={style.mapContainer}>
        <MapContainer center={[latitude, longitude]} zoom={17} ref={mapRef} style={{height: '400px', width: "600px"}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* Additional map layers or components can be added here */}
        </MapContainer>
      </div>
  )
};

export default Map;
