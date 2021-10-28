
import React from "react";
import "./pageCss.css";

//Create Modal component so that we can pass it to parent (App.js)
function Modal(props) {
  if (props.modalisopen === false) {
    return (
      <div className= "modalBox">
        <button id="countyQuestion">What county are we in?</button>
        <button id="countyGuess">Guess</button>
        <button id="countyCancel">Cancel</button>
      </div>
    );
  }
}

//Turning counties into objects within an array
let CountyArr = [
  { id: 1, county: "Addison County" },

  { id: 2, county: "Bennington County" },

  { id: 3, county: "Caledonia County" },

  { id: 4, county: "Chittenden County" },

  { id: 5, county: "Essex County" },

  { id: 6, county: "Franklin County" },

  { id: 7, county: "Grand Isle County" },

  { id: 8, county: "Lamoille County" },

  { id: 9, county: "Orange County" },

  { id: 10, county: "Orleans County" },

  { id: 11, county: "Rutland County" },

  { id: 12, county: "Washington County" },

  { id: 13, county: "Windham County" },

  { id: 14, county: "Windsor" },
];

console.log(CountyArr);

export default Modal;
