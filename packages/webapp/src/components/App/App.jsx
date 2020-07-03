import React from "react";

import DayView from "../DayView/DayView";
import NightView from "../NightView/NightView";
import { Container } from "react-bootstrap";
import { useState } from "react";
import moment from "moment";

const App = () => {
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));

  return (
    <Container>
      <DayView date={date}/>
      <br />
      <NightView date={date}/>
    </Container>
  );
};

export default App;
