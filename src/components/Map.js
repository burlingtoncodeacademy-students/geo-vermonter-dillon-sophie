import {
  MapContainer,
  TileLayer,
  Polygon,
  Marker,
  Polyline,
  useMap,
  useMapEvent,
  useMapEvents,
} from "react-leaflet";

import { useState } from "react";
import borderData from "../data/border";

function Map(props) {
  let vtOutline = borderData.geometry.coordinates[0].map((coords) => [
    coords[1],
    coords[0],
  ]);
  console.log(props.zoom);
  console.log(props.center);

  const [click, setClick] = useState(``);
  let center = props.center;
  let zoom = props.zoom;

  function MyComponent({ center, zoom }) {
    const map = useMap();
    console.log(`inside useMapEvent`);
    map.setView(center, zoom);

    console.log(map.getCenter());
    return null;
  }

  return (
    <MapContainer
      center={props.center}
      zoom={props.zoom}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      zoomControl={false}
      draggable={false}
      style={{
        display: "flex",
        justifyContent: "center",
        height: "600px",
        width: "600px",
        zIndex: "1",
      }}
    >
      <MyComponent center={props.center} zoom={props.zoom} />
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
      />
      <Marker position={props.center} />
      <Polygon
        positions={vtOutline}
        pathOptions={{ color: "orange", fillOpacity: 0 }}
      />
    </MapContainer>
  );
}

export default Map;
