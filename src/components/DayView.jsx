import React from "react";
import DateHeading from "./DateHeading";
import "../css/all.min.css";
import "../css/main.css";
import "../css/mustard-ui.min.css";
// import submitForm from './utils/submitForm';
import {saveDay} from '../utils/db';

const handleOnChange = () => {

}

let state = {
  grateful: [],
  great: [],
  iam: ""
}

const submitForm = () => {
  let key = new Date();
  saveDay(key.toISOString.split('T')[0], state);
}


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
      <input type="text" value={state.grateful[0]} onChange={handleOnChange}/>
      <label>2.</label>
      <input type="text" value={state.grateful[1]} onChange={handleOnChange}/>
      <label>3.</label>
      <input type="text" value={state.grateful[2]} onChange={handleOnChange}/>
    </div>

    <h5 className="align-center title title-text">
      What would make today great?
    </h5>
    <div className="form-control">
      <label>1.</label>
      <input type="text" value={state.great[0]} onChange={handleOnChange}/>
      <label>2.</label>
      <input type="text" value={state.great[1]} onChange={handleOnChange}/>
      <label>3.</label>
      <input type="text" value={state.great[2]} onChange={handleOnChange}/>
    </div>

    <h5 className="align-center title title-text">
      Daily affirmation. I am...
    </h5>
    <div className="form-control">
      <textarea type="text" value={state.iam} onChange={handleOnChange}/>
    </div>

    <button value="submit" onClick={submitForm}>Submit</button>
  </div>
);

export default DayView;
