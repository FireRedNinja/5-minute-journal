import React from 'react';

const date = new Date();

const DateHeading = () => {
  return (
    <h3 className="title-text">
      Date {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
    </h3>
  )
}

export default DateHeading;