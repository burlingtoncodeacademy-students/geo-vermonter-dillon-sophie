import "./App.css";
import { useState, useEffect } from "react";
import Map from "./components/Map";
import Modal from "./components/Modal";

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

  function Run(event) {
    if (running === false) {
      let latitude = randomNum(42.730315, 45.005419);
      let longitude = randomNum(-73.35218, -71.510225);
      setCenter([latitude, longitude]);
      setZoom(13);
      setRunning(true);
      event.target.textContent = `Quit`;
    } else {
      setCenter([43.88, -72.7317]);
      setZoom(8);
      setRunning(false);
      event.target.textContent = `Start`;
    }
    console.log(zoom);
    console.log(center);
  }

  {/* Create a function that handles onClick for the Guess button 
  that triggers the modal to open */}
  function DisplayModal(event) {
    if (event.target.id === "guess") {
      setModalIsOpen(true)
    }
  }

  return (
    <div>
      <TaskBar />
      <InfoBar run={Run} displaymodal={DisplayModal}/>
      <div
        className="map"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* Render modal component*/}
        <Modal modalisopen={modalIsOpen} />

        <Map center={center} zoom={zoom} />
      </div>
    </div>
  );
}

export default App;
