import React from "react";
import DateHeading from "./DateHeading";

const NightView = () => {
  return (
    <div className="night">
      <div className="window-container">
        <div className="row">
          <div className="col col-sm-2 float-left">
            <i className="fas fa-moon fa-3x"></i>
          </div>
          <div className="col col-sm-10 align-center">
            <DateHeading />
          </div>
        </div>
        <h5 className="align-center title title-text">
          3 Amazing things that happened today...
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
          How could I have made today even better?
        </h5>
        <div className="form-control">
          <textarea type="text" />
        </div>
      </div>
    </div>
  );
};

export default NightView;
