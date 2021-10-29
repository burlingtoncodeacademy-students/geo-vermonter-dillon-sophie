import React from "react";
import "./pageCss.css";

/* Create Modal func-component so that we can pass it to parent (App.js) */

function Modal(props) {
  if (!props.modalisopen === false) {
    return (
      <div className="modalBox">
        <div className="modalContent">
          <h4 id="countyQuestion">What county are we in?</h4>
          <ul>
            <li id="addison">Addison</li>
            <li id="bennington">Bennington</li>
            <li id="caledonia">Caledonia</li>
            <li id="chittenden">Chittenden</li>
            <li id="essex">Essex</li>
            <li id="franklin">Franklin</li>
            <li id="grandIsle">Grand Isle</li>
            <li id="lamoille">Lamoille</li>
            <li id="orange">Orange</li>
            <li id="orleans">Orleans</li>
            <li id="rutland">Rutland</li>
            <li id="washington">Washington</li>
            <li id="windham">Windham</li>
            <li id="windsor">Windsor</li>
          </ul>
        </div>
        <div>
          <button id="countyCancel" onClick={props.displaymodal}>
            Cancel
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

/* Turning county names into strings within an array */

export default Modal;
