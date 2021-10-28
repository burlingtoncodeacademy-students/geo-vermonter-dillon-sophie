import React from "react";
import "./pageCss.css";

function InfoBar(props) {
  return (
    <span className="infoBar">
      <div className="infoPanel">Info</div>
      <span className="navigator">
        <div className="compass">
          <div className="north">North</div>
          <div className="south">South</div>
          <div className="east">East</div>
          <div className="west">West</div>
        </div>
      </span>
      <div className="gameControl">
        <button className="start">Start</button>
        <button className="guess">Guess</button>
        <button className="quit">Quit</button>
      </div>
      <h1 className="scoreText">Score</h1>
      <h3 className="scoreNumber">100</h3>
    </span>
  );
}

export default InfoBar;
