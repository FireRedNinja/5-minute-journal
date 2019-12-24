import React from "react";
import "./App.css";
import DayView from "./components/DayView";
import NightView from "./components/NightView";
import "./css/normalize.css";

const date = new Date();


function App() {
  return (
    <div>
      <DayView />
      {/* {date.getHours() <= 17 ? <DayView /> : <NightView />} */}
    </div>
  );
}

export default App;
