import React, { useRef } from "react";
import { Map } from "react-leaflet";

function ChangeView() {
  const mapRef = useRef();

  function handleOnSetView() {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    map.setView(43, -72);
  }
}
