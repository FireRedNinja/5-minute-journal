import React from 'react';
import NightViewForm from './NightViewForm/NightViewForm';

import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const NightView = ({ date }) => (
  <Grid container spacing={1}>
    <Grid item>
      <NightViewForm date={date} />
    </Grid>
  </Grid>
);

NightView.propTypes = {
  date: PropTypes.string,
};

export default NightView;
