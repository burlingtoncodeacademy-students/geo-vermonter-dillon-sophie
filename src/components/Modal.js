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

function Modal(props) {
  if (props.modalisopen === false) {
    return (
      <div className="modalBox">
        <h4 id="countyQuestion">What county are we in?</h4>

        <ul className="countyList">
          <li>{CountyList}</li>
        </ul>

        <button id="countyGuess">Guess</button>
        <button id="countyCancel">Cancel</button>
      </div>
    );
  }
}

{/* function to display county list in modal */}
function CountyList () {
  let counties = " "
 for (let i = 0; i < CountyArr.length; i ++) {
   counties += "<li>" + CountyArr[i] + "</li>"
 }
 return (counties)
}


{
  /* Turning county names into strings within an array */
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

console.log(CountyArr);

export default Modal;
