import React from 'react';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const NightDaySwitch = ({ dayNight, setDayNight }) => {
  const handleChange = () => {
    setDayNight(dayNight === 'Day' ? 'Night' : 'Day');
  };
  return (
    <Grid container>
      <Grid item>
        <FontAwesomeIcon icon={faSun} size="2x" />
      </Grid>
      <Grid item>
        <Switch onChange={handleChange} size="medium" />
      </Grid>
      <Grid item>
        <FontAwesomeIcon icon={faMoon} size="2x" />
      </Grid>
    </Grid>
  );
};

NightDaySwitch.propTypes = {
  dayNight: PropTypes.string,
  setDayNight: PropTypes.func,
};

export default NightDaySwitch;
