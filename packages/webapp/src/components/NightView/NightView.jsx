import React from "react";
import DateHeading from "./DateHeading";
import NightViewForm from "./NightViewForm";

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
        <NightViewForm />
      </div>
    </div>
  );
};

export default NightView;
