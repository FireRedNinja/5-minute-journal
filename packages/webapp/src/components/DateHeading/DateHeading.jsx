import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const DateHeading = ({ date }) => {
  return (
    <Typography variant="h3" className="title-text">
      Date {moment(date).format('YYYY/MM/DD')}
    </Typography>
  );
};

DateHeading.propTypes = {
  date: PropTypes.string,
};

export default DateHeading;
