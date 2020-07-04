import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const DateHeading = ({ date }) => {
  return (
    <h3 className="title-text">Date {moment(date).format('YYYY/MM/DD')}</h3>
  );
};

DateHeading.propTypes = {
  date: PropTypes.string,
};

export default DateHeading;
