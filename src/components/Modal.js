import React from "react";
import "./pageCss.css";

// Create Modal func-component so that we can pass it to parent (App.js)

function Modal(props) {
  if (!props.modalisopen === false) {
    return (
      <div className="modalBox">
        <div className="modalContent">
          <h4 id="countyQuestion">What county are we in?</h4> 
          <p><i>Make your guess by clicking on a county from this list:</i></p>
          <ul className="vtCounties">
            <li id="addison" onClick={props.checkguess}>
              Addison
            </li>
            <li id="bennington" onClick={props.checkguess}>
              Bennington
            </li>
            <li id="caledonia" onClick={props.checkguess}>
              Caledonia
            </li>
            <li id="chittenden" onClick={props.checkguess}>
              Chittenden
            </li>
            <li id="essex" onClick={props.checkguess}>
              Essex
            </li>
            <li id="franklin county" onClick={props.checkguess}>
              Franklin
            </li>
            <li id="grandIsle" onClick={props.checkguess}>
              Grand Isle
            </li>
            <li id="lamoille" onClick={props.checkguess}>
              Lamoille
            </li>
            <li id="orange" onClick={props.checkguess}>
              Orange
            </li>
            <li id="orleans" onClick={props.checkguess}>
              Orleans
            </li>
            <li id="rutland" onClick={props.checkguess}>
              Rutland
            </li>
            <li id="washington" onClick={props.checkguess}>
              Washington
            </li>
            <li id="windham" onClick={props.checkguess}>
              Windham
            </li>
            <li id="windsor" onClick={props.checkguess}>
              Windsor
            </li>
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

export default Modal;
