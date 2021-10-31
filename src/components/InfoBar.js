import React from "react";
import "./pageCss.css";
import { useState, useEffect } from "react";

function InfoBar(props) {
  const [disable, setDisable] = useState(false);

  {
    /* Create a fetch request that will take the randomly generated coordinates 
  and print the town and county in correct area on infobar*/
  }

  useEffect(() => {
    fetch(
      "https://nominatim.openstreetmap.org/reverse.php?lat=42.730315&lon=-73.35218&zoom=18&format=jsonv2"
      // `https://nominatim.openstreetmap.org/reverse.php?lat=${props.latdisplay}&lon=${props.longdisplay}&zoom=18&format=jsonv2`
    )
      .then((response) => response.json())
      .then((json) => console.log(json));
    // every time location (value contained in variable "center" changes,then fetch is rendered)
  }, [props.center]);

  {
    /* Need to figure out how to map over the array from fetch and pull out the infoBar data */
  }

  return (
    <span className="infoBar">
      <div className="infoPanel">Info</div>
      <span className="locationInfo">
        <div id="latitude">Latitude: </div>
        <div id="longitude">Longitude: </div>
        <div id="county">County: </div>
        <div id="town">Town: </div>
        {/* <div id="latitude">Latitude: {props.latdisplay} </div>
        <div id="longitude">Longitude: {props.longdisplay}</div> */}
        {/* <div id="county">county: {props.countydisplay}</div>
        <div id="town">town: {props.towndisplay}</div> */}
      </span>

      <span className="navigator">
        <div className="compass">
          <div className="north">North</div>
          <div className="south">South</div>
          <div className="east">East</div>
          <div className="west">West</div>
        </div>
      </span>
      <div className="gameControl">
        <button className="startEnd" onClick={props.run}>
          Start
        </button>
        {/* start should begin game and disable when clicked */}
        <button id="guess" onClick={props.displaymodal}>
          Guess
        </button>
        {/* guess button should never be disabled and when clicked should route to modal box with drop-down menu of Vermont counties */}
        <button id="quit" onClick={props.giveup}>
          Quit
        </button>
        {/* quit button should populate correct answer into informational text box*/}
      </div>
      <h1 className="scoreText">Score</h1>
      <h3 className="scoreNumber">100</h3>
    </span>
  );
}

export default InfoBar;
