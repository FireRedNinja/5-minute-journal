import React from 'react';
import DateHeading from './../DateHeading/DateHeading';
import NightViewForm from './NightViewForm/NightViewForm';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const NightView = ({ date }) => {
  return (
    <Grid container spacing={1}>
      <Grid container item spacing={5}>
        <Grid item xs="auto">
          <FontAwesomeIcon icon={faMoon} size="3x" />
        </Grid>
        <Grid item xs>
          <DateHeading date={date} />
        </Grid>
      </Grid>
      <Grid item>
        <NightViewForm date={date} />
      </Grid>
    </Grid>
  );
};

NightView.propTypes = {
  date: PropTypes.string,
};

export default NightView;
