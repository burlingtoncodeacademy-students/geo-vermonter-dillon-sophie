import "./App.css";
import { useState, useEffect, useRef } from "react";
import MyMap from "./components/Map";
import Modal from "./components/Modal";
import L from "leaflet";

import TaskBar from "./components/TaskBar";
import InfoBar from "./components/InfoBar";

//random number generator for lat/long
function randomNum(min, max) {
  min = min * 1000;
  max = max * 1000;
  let range = max - min + 1;

  return parseFloat(((Math.random() * range + min) / 1000).toPrecision(8));
}

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [center, setCenter] = useState([43.8801, -72.7317]);
  const [zoom, setZoom] = useState(8);
  const [running, setRunning] = useState(false);
  const [latDisplay, setLatDisplay] = useState(`?`);
  const [longDisplay, setLongDisplay] = useState(`?`);
  const [fetchLatDisplay, setFetchLatDisplay] = useState(center[0]);
  const [fetchLongDisplay, setFetchLongDisplay] = useState(center[1]);
  const [countyDisplay, setCountyDisplay] = useState(" ");
  const [townDisplay, setTownDisplay] = useState(" ");
  const [insideVT, setInsideVT] = useState(true);
  const [score, setScore] = useState(100);
  const [clickable, setClickable] = useState(false);

  //run function for when start button is pushed
  function Run(event) {
    //checks to see if game is already running
    if (running === false) {
      //get random latitude and longitude
      let latitude = randomNum(42.730315, 45.005419);
      let longitude = randomNum(-73.35218, -71.510225);
      //sets center as new lat/long
      setCenter([latitude, longitude]);
      while (insideVT === false) {
        //not working as intended, need to figure out better way to check location
        latitude = randomNum(42.730315, 45.005419);
        longitude = randomNum(-73.35218, -71.510225);
      }
      //sets new zoom level
      setZoom(18);
      //tells program that the game is running
      setRunning(true);
      //sets infobar lat/long to neutral display
      setLatDisplay(`latitude`);
      setLongDisplay(`longitude`);
      //enables n/s/e/w buttons
      setClickable(true);
      //changes start button to reset button
      event.target.textContent = `Reset`;
    } else {
      //sets center back to middle of vt
      setCenter([43.88, -72.7317]);
      //sets zoom back to default
      setZoom(8);
      //tells program game isn't running
      setRunning(false);
      //sets lat/long display back to neutral
      setLatDisplay(`latitude`);
      setLongDisplay(`longitude`);
      //sets score back to 100
      setScore(100);
      //disables n/s/e/w buttons
      setClickable(false);
      //changes reset button to start button
      event.target.textContent = `Start`;
    }
  }

  //function that moves view when n/s/e/w buttons are clicked
  function MoveView(event) {
    //breaks up center into lat/long
    let lat = center[0];
    let lon = center[1];
    //fetches id of button clicked
    let id = event.target.id;
    //removes 1 point for moving
    setScore(score - 1);
    //if north button is clicked, moves .002 north
    if (id === "north") {
      setCenter([(lat = lat + 0.002), lon]);
    }
    //if south button is clicked, moves .002 south

    if (id === "south") {
      setCenter([(lat = lat - 0.002), lon]);
    }
    //if east button is clicked, moves .002 east
    if (id === "east") {
      setCenter([lat, (lon = lon + 0.002)]);
    }
    //if west button is clicked, moves .002 west
    if (id === "west") {
      setCenter([lat, (lon = lon - 0.002)]);
    }
  }

  //function to display modal when guess button is clicked
  function DisplayModal(event) {
    //when guess button is clicked and modal is not already open, opens modal
    if (event.target.id === "guess" && modalIsOpen === false) {
      setModalIsOpen(true);
    } else if (modalIsOpen === true) {
      //if modal is open, closes it
      setModalIsOpen(false);
    }
  }

  // quit function
  function LocationData(event) {
    if (event.target.id === "quit") {
      //display lat/long in infobar panel
      setLatDisplay(center[0]);
      setLongDisplay(center[1]);
      //displays county and town
      setCountyDisplay(countyDisplay);
      setTownDisplay(townDisplay);
      //sets score to zero
      setScore(0);
    }
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
        setfetchlatdisplay={setFetchLatDisplay}
        setfetchlongdisplay={setFetchLongDisplay}
        moveview={MoveView}
        score={score}
        clickable={clickable}
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

        <MyMap center={center} zoom={zoom} setinsidevt={setInsideVT} />
      </div>
    </div>
  );
}

export default App;
