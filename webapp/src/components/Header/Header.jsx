import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import DateHeading from './../DateHeading/DateHeading';
import Grid from '@material-ui/core/Grid';
import NightDaySwitch from './NightDaySwitch';

const Header = ({ date, dayNight, setDayNight, setDate }) => (
  <Grid container justify="space-between" direction="row" alignItems="center">
    <Grid item>
      <FontAwesomeIcon icon={dayNight === 'Day' ? faSun : faMoon} size="3x" />
    </Grid>
    <Grid item>
      <DateHeading date={date} setDate={setDate} />
    </Grid>
    <Grid item>
      <NightDaySwitch dayNight={dayNight} setDayNight={setDayNight} />
    </Grid>
  </Grid>
);

Header.propTypes = {
  date: PropTypes.string,
  dayNight: PropTypes.string,
  setDayNight: PropTypes.func,
  setDate: PropTypes.func,
};

export default Header;
