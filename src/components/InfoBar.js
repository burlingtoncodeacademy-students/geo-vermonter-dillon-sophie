import React from "react";
import "./pageCss.css";
import { useState, useEffect } from "react";

function InfoBar(props) {
  const [disable, setDisable] = useState(false);

  return (
    <span className="infoBar">
      <div className="infoPanel">Info</div>
      <span className="locationInfo">
        <div id="latitude">Latitude: {props.latdisplay} </div>
        <div id="longitude">Longitude: {props.longdisplay}</div>
        <div id="county">county</div>
        <div id="town">town</div>
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
