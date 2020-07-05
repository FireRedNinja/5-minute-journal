import React from 'react';
import DayViewForm from './DayViewForm/DayViewForm';

import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const DayView = ({ date }) => (
  <Grid container spacing={1}>
    <Grid item>
      <DayViewForm date={date} />
    </Grid>
  </Grid>
);

DayView.propTypes = {
  date: PropTypes.string,
};

export default DayView;
