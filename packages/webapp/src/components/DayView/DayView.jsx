import React from "react";
import DateHeading from "./DateHeading";
import "../css/all.min.css";
import "../css/main.css";
import "../css/mustard-ui.min.css";
import DayViewForm from './DayViewForm';



const DayView = () => (
  <div className="window-container">
    <div className="row">
      <div className="col col-sm-2 float-left">
        <i className="fas fa-sun fa-3x"></i>
      </div>
      <div className="col col-sm-10 align-center">
        <DateHeading />
      </div>
    </div>
    <DayViewForm />
  </div>
);

export default DayView;
