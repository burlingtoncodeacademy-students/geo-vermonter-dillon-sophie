import {
  MapContainer,
  TileLayer,
  Polygon,
  Marker,
  Polyline,
  useMap,
} from "react-leaflet";

import L from "leaflet";

import { useEffect } from "react";
import borderData from "../data/border";

// import geoJson
import leafletPip from "@mapbox/leaflet-pip";

function Map(props) {
  let vtOutline = borderData.geometry.coordinates[0].map((coords) => [
    coords[1],
    coords[0],
  ]);

  //checks if center is inside VT border. want to use this to make sure coords in Run are within border, not quite working right though?
  function CheckPosition() {
    useEffect(() => {
      let geoJson = L.geoJSON(borderData);

      let lat = props.center[0];
      let long = props.center[1];

      let layerLength = leafletPip.pointInLayer([long, lat], geoJson).length;

      if (layerLength > 0) {
        props.setinsidevt(true);
      } else if (layerLength === 0) {
        props.setinsidevt(false);
      }
    });
    return null;
  }

  let polyArray = props.polyArray;

  //sets center and zoom of map
  function MyComponent({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

  return (
    <MapContainer
      center={props.center}
      zoom={props.zoom}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      zoomControl={false}
      // the keyword is DRAGGING, not DRAGGABLE. They're different, apparently
      dragging={false}
      style={{
        display: "flex",
        justifyContent: "center",
        height: "600px",
        width: "600px",
        zIndex: "1",
      }}
    >
      <CheckPosition />
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
      <Polyline
        pathOptions={{ color: "green", dashArray: "10 10" }}
        positions={polyArray}
      />
    </MapContainer>
  );
}

export default Map;
