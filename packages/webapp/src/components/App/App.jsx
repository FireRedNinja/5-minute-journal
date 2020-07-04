import React from 'react';

import DayView from '../DayView/DayView';
import NightView from '../NightView/NightView';
import Container from '@material-ui/core/Container';
import { useState } from 'react';
import moment from 'moment';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));

  return (
    <Container maxWidth="md">
      <DayView date={date} />
      <br />
      <NightView date={date} />
    </Container>
  );
};

export default App;
