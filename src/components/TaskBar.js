import React from "react";
import "./pageCss.css";

function TaskBar(props) {
  return (
    <span className="taskBar">
      <div className="about">About</div>
      <div className="placeHolder">Placeholder</div>
      <div className="highScores">High Scores</div>
    </span>
  );
}
export default TaskBar;
