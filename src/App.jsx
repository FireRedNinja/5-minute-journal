import React from 'react';
import './App.css';
import DayView from './components/DayView';
import NightView from './components/NightView';
import './css/normalize.css'

const time = new Date();

function App() {
  return (
    <div>
      {time.getHours() <= 17 ? <DayView /> : <NightView />}
    </div>
  );
}

export default App;
