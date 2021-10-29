import React from "react";
import "./pageCss.css";

{
  /* Create Modal func-component so that we can pass it to parent (App.js) */
}
{
  /* text question: "What county are we in?" */
}
{
  /* unordered-list of counties */
}
{
  /* buttons: "guess" and "cancel" */
}

let CountyArr = [
  "Addison",

  "Bennington",

  "Caledonia",

  "Chittenden",

  "Essex",

  "Franklin",

  "Grand Isle",

  "Lamoille",

  "Orange",

  "Orleans",

  "Rutland",

  "Washington",

  "Windham",

  "Windsor",
];

let counties = "";

function CountyList() {
  let counties = " ";
  for (let i = 0; i < CountyArr.length; i++) {
    counties += <li> CountyArr[i]. </li>;
  }
  console.log(counties);
  return counties;
}

function Modal(props) {
  if (!props.modalisopen === false) {
    return (
      <div className="modalBox">
        <h4 id="countyQuestion">What county are we in?</h4>
        <ul>
          <li>Addison</li>
          <li>Bennington</li>
          <li>Caledonia</li>
          <li>Chittenden</li>
          <li>Essex</li>
          <li>Franklin</li>
          <li>Grand Isle</li>
          <li>Lamoille</li>
          <li>Orange</li>
          <li>Orleans</li>
          <li>Rutland</li>
          <li>Washington</li>
          <li>Windham</li>
          <li>Windsor</li>
        </ul>
        <button id="countyGuess">Guess</button>
        <button id="countyCancel">Cancel</button>
      </div>
    );
  } else {
    return null;
  }
}

/* Turning county names into strings within an array */

export default Modal;
