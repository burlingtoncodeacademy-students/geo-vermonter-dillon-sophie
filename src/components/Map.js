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

import L from "leaflet";

import { useEffect, useState } from "react";
import borderData from "../data/border";

// import geoJson
import leafletPip from "@mapbox/leaflet-pip";

function Map(props) {
  let vtOutline = borderData.geometry.coordinates[0].map((coords) => [
    coords[1],
    coords[0],
  ]);
  console.log(props.zoom);
  console.log(props.center);

  function CheckPostition() {
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

  function MyComponent({ center, zoom }) {
    const map = useMap();
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
      <CheckPostition />
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
