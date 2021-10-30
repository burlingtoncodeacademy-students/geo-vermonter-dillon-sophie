import React from "react";
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
import leafletPip from "@mapbox/leaflet-pip";

import { useEffect, useState } from "react";
import borderData from "../data/border";

function CheckPosition(props) {
  useEffect(() => {
    let geoJson = L.geoJSON(borderData);

    let lat = props.center[0];
    let long = props.center[1];

    let layerLength = leafletPip.pointInLayer([long, lat], geoJson).length;

    if (layerLength > 0) {
      console.log(true);
      props.setinsidevt(true);
    } else if (layerLength === 0) {
      console.log(false);
      props.setinsidevt(false);
    }
  });
  return null;
}

export default CheckPosition;
