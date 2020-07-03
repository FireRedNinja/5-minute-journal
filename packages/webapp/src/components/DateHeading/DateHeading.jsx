import React from 'react';
import moment from 'moment';


const DateHeading = ({date}) => {
  return (
    <h3 className="title-text">
      Date {moment(date).format("YYYY/MM/DD")}
    </h3>
  )
}

export default DateHeading;