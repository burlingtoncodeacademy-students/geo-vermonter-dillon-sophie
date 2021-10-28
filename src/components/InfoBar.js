import React from "react";
import "./pageCss.css";
import { useState, useEffect } from "react";

function InfoBar(props) {
  return (
    <span className="infoBar">
      <div className="infoPanel">Info</div>
      <span className="locationInfo">
        <div className="latitude">latitude</div>
        <div className="longitude">longitude</div>
        <div className="county">county</div>
        <div className="town">town</div>
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
        <button className="guess">Guess</button>
        {/* guess button should never be disabled and when clicked should route to modal box with drop-down menu of Vermont counties */}
      </div>
      <h1 className="scoreText">Score</h1>
      <h3 className="scoreNumber">100</h3>
    </span>
  );
}

export default InfoBar;
