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
  const [latDisplay, setLatDisplay] = useState(`?`);
  const [longDisplay, setLongDisplay] = useState(`?`);
  const [fetchLatDisplay, setFetchLatDisplay] = useState(center [0])
  const [fetchLongDisplay, setFetchLongDisplay] = useState(center [1])
  const [countyDisplay, setCountyDisplay] = useState(" ");
  const [townDisplay, setTownDisplay] = useState(" ");
 
  
  function Run(event) {
    if (running === false) {
      let latitude = randomNum(42.730315, 45.005419);
      let longitude = randomNum(-73.35218, -71.510225);
      setCenter([latitude, longitude]);
      setZoom(13);
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

  {
    /* Create a function that handles onClick for the Guess button 
  that triggers the modal to open */
  }
  function DisplayModal(event) {
    if (event.target.id === "guess" && modalIsOpen === false) {
      setModalIsOpen(true);
    } else if (modalIsOpen === true) {
      setModalIsOpen(false);
    }
  }

  {
    /* Create a function that handles onClick for the Quit Button 
  that triggers correct info to display respective fields in information box*/
  }
  function LocationData(event) {
    if (event.target.id === "quit") {
      setLatDisplay(center[0]);
      setLongDisplay(center[1]);
      setCountyDisplay(countyDisplay)
      setTownDisplay(townDisplay)
    }
  }

  {
    /* Create a function that handles onClick for the list of counties. 
  A click on a county will trigger a check to see if user's guess matches the geo-code result*/
  }

  return (
    <div>
      <TaskBar />
      <InfoBar
        run={Run}
        displaymodal={DisplayModal}
        locationdata={LocationData}
        latdisplay={latDisplay}
        longdisplay={longDisplay}
        center={center}
        setcountydisplay={setCountyDisplay}
        settowndisplay={setTownDisplay}
        setfetchlatdisplay = {setFetchLatDisplay}
        setfetchlongdisplay = {setFetchLongDisplay}
        
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

        <Map center={center} zoom={zoom} />
      </div>
    </div>
  );
}

export default App;
