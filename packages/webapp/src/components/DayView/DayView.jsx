import React from 'react';
import DateHeading from './../DateHeading/DateHeading';
import DayViewForm from './DayViewForm/DayViewForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const DayView = ({ date }) => (
  <Grid container spacing={1}>
    <Grid container item spacing={5}>
      <Grid item xs="auto">
        <FontAwesomeIcon icon={faSun} size="3x" />
      </Grid>
      <Grid item xs>
        <DateHeading date={date} />
      </Grid>
    </Grid>
    <Grid item>
      <DayViewForm date={date} />
    </Grid>
  </Grid>
);

DayView.propTypes = {
  date: PropTypes.string,
};

export default DayView;
