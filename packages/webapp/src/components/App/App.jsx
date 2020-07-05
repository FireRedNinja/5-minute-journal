import React from 'react';

import DayView from '../DayView/DayView';
import NightView from '../NightView/NightView';
import Header from '../Header/Header';
import Container from '@material-ui/core/Container';
import { useState } from 'react';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [dayNight, setDayNight] = useState('Day');

  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Header
            date={date}
            dayNight={dayNight}
            setDayNight={setDayNight}
            setDate={setDate}
          />
        </Grid>
        <Grid item>
          {dayNight === 'Day' ? (
            <DayView date={date} />
          ) : (
            <NightView date={date} />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
