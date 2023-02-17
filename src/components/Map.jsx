import React, {useState, useEffect} from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

const Map = ({ipData}) => {
    const [map, setMap] = useState(null)
    const [marker, setMarker] = useState(null)

    useEffect(() => {
        if(ipData) {
        map.flyTo([ipData.lat, ipData.lon], 13)
        marker.setLatLng([ipData.lat, ipData.lon])

        }
    }, [ipData])
    return <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{flex: 1, zIndex: -1}} ref={setMap}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.505, -0.09]} ref={setMarker}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
}

export default Map;