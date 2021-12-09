import "./App.css";
import { useState, useEffect, useRef } from "react";
import Map from "./components/Map";
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
  const [aboutIsOpen, setAboutIsOpen] = useState(false);
  const [center, setCenter] = useState([43.8801, -72.7317]);
  const [beginCenter, setBeginCenter] = useState([43.8801, -72.7317]);
  const [zoom, setZoom] = useState(8);
  const [running, setRunning] = useState(false);
  const [latDisplay, setLatDisplay] = useState(`?`);
  const [longDisplay, setLongDisplay] = useState(`?`);
  const [countyDisplay, setCountyDisplay] = useState("?");
  const [townDisplay, setTownDisplay] = useState("?");
  const [insideVT, setInsideVT] = useState(true);
  const [score, setScore] = useState(100);
  const [clickable, setClickable] = useState(false);
  const [townHolder, setTownHolder] = useState(" ");
  const [countyHolder, setCountyHolder] = useState(" ");
  // const [initialCenter, setInitialCenter] = useState([43.8801, -72.7317]);

  //run function for when start button is pushed
  function Run(event) {
    //checks to see if game is already running
    if (running === false) {
      //get random latitude and longitude
      let latitude = randomNum(42.730315, 45.005419);
      let longitude = randomNum(-73.35218, -71.510225);
      //sets center as new lat/long
      setCenter([latitude, longitude]);
      setBeginCenter([latitude, longitude]);
      //sets new zoom level
      setZoom(18);
      //tells program that the game is running
      setRunning(true);
      //sets infobar lat/long to neutral display
      setLatDisplay(`?`);
      setLongDisplay(`?`);
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
      //sets lat/long/town/county display back to neutral
      setLatDisplay(`?`);
      setLongDisplay(`?`);
      setTownDisplay("?");
      setCountyDisplay("?");
      //sets score back to 100
      setScore(100);
      //disables n/s/e/w buttons
      setClickable(false);
      //changes reset button to start button
      event.target.textContent = `Start`;
    }
  }

  //function that returns player to starting spot, with no change in score
  function ReturnPlayer(event) {
    if (event.target.id === "return") {
      setCenter(beginCenter);
    }
  }

  //function that fetches reverse geo-coding data from Nominatim
  function LocationFetch() {
    useEffect(() => {
      fetch(
        `https://nominatim.openstreetmap.org/reverse.php?lat=${center[0]}&lon=${center[1]}&zoom=18&format=jsonv2`
      )
        .then((res) => res.json())
        .then((dataArr) => {
          setCountyHolder(dataArr.address.county);
          if (dataArr.address.hasOwnProperty("town")) {
            setTownHolder(dataArr.address.town);
          } else if (dataArr.address.hasOwnProperty("village")) {
            setTownHolder(dataArr.address.village);
          } else if (dataArr.address.hasOwnProperty("city")) {
            setTownHolder(dataArr.address.city);
          } else if (dataArr.address.hasOwnProperty("unknown")) {
            setTownHolder(dataArr.address.unknown);
          }
        });
      // empty array makes sure this doesn't run too many times
    }, []);

    return null;
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

  console.log(countyHolder.toLowerCase());
  //function that checks user's guess

  function CheckGuess(event) {
    //make lower case for match criteria
    let string = countyHolder.toLowerCase();
    //turn string into an array and then split on space for match criteria
    let guessArr = string.split(" ");
    console.log(guessArr);
    //fetches id of button clicked
    let id = event.target.id;
    //if selected county matches countyHolder
    if (id === guessArr[0]) {
      //Congratulatory modal box pops open
      window.alert(`CONGRATULATIONS!!!`);
      //display lat/long in infobar panel
      setLatDisplay(center[0]);
      setLongDisplay(center[1]);
      //displays county and town in infobar panel
      setCountyDisplay(countyHolder);
      setTownDisplay(townHolder);
      setModalIsOpen(false);
    } else {
      //if incorrect answer is selected, modal box informs user they have made incorrect guess
      window.alert(`${id} is incorrect`);
      //subtract 10 points from score
      setScore(score - 10);
      //And modal box closes
      setModalIsOpen(false);
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
      setCountyDisplay(countyHolder);
      setTownDisplay(townHolder);
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
        countydisplay={countyDisplay}
        towndisplay={townDisplay}
        moveview={MoveView}
        score={score}
        clickable={clickable}
        returnplayer={ReturnPlayer}
      />
      <LocationFetch />
      <div
        className="map"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* Render modal component*/}
        <Modal
          modalisopen={modalIsOpen}
          displaymodal={DisplayModal}
          checkguess={CheckGuess}
        />

        <Map center={center} zoom={zoom} setinsidevt={setInsideVT} />
      </div>
    </div>
  );
}

export default App;
