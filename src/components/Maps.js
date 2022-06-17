import React from "react";
import { Icon } from "leaflet";
import { Map, MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const Maps = ({ lat, lang }) => {
  return (
    <div className=" pb-28 md:pb-36">
      <MapContainer
        id="map"
        center={[lat, lang]}
        zoom={6}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lang]}>
          <Popup>{lat + " " + lang}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Maps;
