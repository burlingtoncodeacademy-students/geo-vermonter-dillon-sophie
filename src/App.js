import "./App.css";
import { useState, useEffect, useRef } from "react";
import MyMap from "./components/Map";
import Modal from "./components/Modal";
import L from "leaflet";

import TaskBar from "./components/TaskBar";
import InfoBar from "./components/InfoBar";

function randomNum(min, max) {
  min = min * 1000;
  max = max * 1000;
  let range = max - min + 1;

  return parseFloat(((Math.random() * range + min) / 1000).toPrecision(6));
}

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [center, setCenter] = useState([43.8801, -72.7317]);
  const [zoom, setZoom] = useState(8);
  const [running, setRunning] = useState(false);
  const [latDisplay, setLatDisplay] = useState("latitude");
  const [longDisplay, setLongDisplay] = useState("longitude");

  function Run(event) {
    if (running === false) {
      let latitude = randomNum(42.730315, 45.005419);
      let longitude = randomNum(-73.35218, -71.510225);
      setCenter([latitude, longitude]);
      setZoom(18);
      setRunning(true);
      setLatDisplay(`latitude`);
      setLongDisplay(`longitude`);
      event.target.textContent = `Reset`;
    } else {
      setCenter([43.88, -72.7317]);
      setZoom(8);
      setRunning(false);
      setLatDisplay(`latitude`);
      setLongDisplay(`longitude`);
      event.target.textContent = `Start`;
    }
  }

  /* Create a function that handles onClick for the Guess button 
  that triggers the modal to open */

  function DisplayModal(event) {
    if (event.target.id === "guess" && modalIsOpen === false) {
      setModalIsOpen(true);
    } else if (modalIsOpen === true) {
      setModalIsOpen(false);
    }
  }

  /* Create a function that handles onClick for the Quit Button 
  that triggers correct answer to populate respective fields in information box*/

  function GiveUp(event) {
    if (event.target.id === "quit") {
      setLatDisplay(center[0]);
      setLongDisplay(center[1]);
    }
  }

  return (
    <div>
      <TaskBar />
      <InfoBar
        run={Run}
        displaymodal={DisplayModal}
        giveup={GiveUp}
        latdisplay={latDisplay}
        longdisplay={longDisplay}
      />
      <div
        className="map"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* Render modal component*/}
        <Modal modalisopen={modalIsOpen} displaymodal={DisplayModal} />

        <MyMap center={center} zoom={zoom} />
      </div>
    </div>
  );
}

export default App;
