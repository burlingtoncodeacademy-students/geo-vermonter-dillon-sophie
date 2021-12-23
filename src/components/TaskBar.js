import React from "react";
import "./pageCss.css";

function TaskBar(props) {
  return (
    <div className="taskBar">
      <div id="about">About</div>
      {/* about should bring up some kind of contents page */}
      <div className="title">Geo-Vermonter</div>
      {/* should be used for something? Maybe just title of game? */}
      <div className="highScores">High Scores</div>
      {/* should store game score locally. Ideally, should be able to replay old games for icebox */}
    </div>
  );
}
export default TaskBar;
