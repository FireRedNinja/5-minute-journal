import React from "react";
import DateHeading from "./DateHeading";
import "../css/all.min.css";
import "../css/main.css";
import "../css/mustard-ui.min.css";

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
    <h5 className="align-center title title-text">I am grateful for...</h5>
    <div className="form-control">
      <label>1.</label>
      <input type="text" />
      <label>2.</label>
      <input type="text" />
      <label>3.</label>
      <input type="text" />
    </div>

    <h5 className="align-center title title-text">
      What would make today great?
    </h5>
    <div className="form-control">
      <label>1.</label>
      <input type="text" />
      <label>2.</label>
      <input type="text" />
      <label>3.</label>
      <input type="text" />
    </div>

    <h5 className="align-center title title-text">
      Daily affirmation. I am...
    </h5>
    <div className="form-control">
      <textarea type="text" />
    </div>
  </div>
);

export default DayView;
