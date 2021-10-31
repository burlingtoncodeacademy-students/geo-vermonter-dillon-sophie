import React from "react";
import "./pageCss.css";
import { useState, useEffect } from "react";

function InfoBar(props) {
  const [disable, setDisable] = useState(false);

  /* Create a fetch request that will take the randomly generated coordinates 
  and print the town and county in correct area on infobar*/

  return (
    <span className="infoBar">
      <div className="infoPanel">Info</div>
      <span className="locationInfo">
        <div id="latitude">Latitude: {props.latdisplay} </div>
        <div id="longitude">Longitude: {props.longdisplay}</div>
        <div id="county">County: {props.countydisplay}</div>
        <div id="town">Town: {props.towndisplay}</div>
      </span>

      <span className="navigator">
        <div className="compass">
          <button
            disabled={!props.clickable}
            id="north"
            className="north"
            onClick={props.moveview}
          >
            North
          </button>
          <button
            disabled={!props.clickable}
            id="south"
            className="south"
            onClick={props.moveview}
          >
            South
          </button>
          <button
            disabled={!props.clickable}
            id="east"
            className="east"
            onClick={props.moveview}
          >
            East
          </button>
          <button
            disabled={!props.clickable}
            id="west"
            className="west"
            onClick={props.moveview}
          >
            West
          </button>
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
        <button id="quit" onClick={props.locationdata}>
          Quit
        </button>
        {/* quit button should populate correct answer into informational text box*/}
      </div>
      <h1 className="scoreText">Score</h1>
      <h3 className="scoreNumber">{props.score}</h3>
    </span>
  );
}

export default InfoBar;
