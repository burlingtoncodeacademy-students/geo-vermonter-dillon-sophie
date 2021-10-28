import "./App.css";
import { useState, useEffect } from "react";
import Map from "./components/Map";

import TaskBar from "./components/TaskBar";
import InfoBar from "./components/InfoBar";

function App() {
  const [center, setCenter] = useState([43.88, -72.7317]);

  return (
    <div>
      <TaskBar />
      <InfoBar />
      <div
        className="map"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Map center={center} />
      </div>
    </div>
  );
}

export default App;
