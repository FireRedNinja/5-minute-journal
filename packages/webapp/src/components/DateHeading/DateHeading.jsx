import React from 'react';
import PropTypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const DateHeading = ({ date, setDate }) => {
  const handleDateChange = (date) => {
    setDate(date);
  };

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date"
          format="dd-MM-yyyy"
          value={date}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
    </>
  );
};

DateHeading.propTypes = {
  date: PropTypes.string,
  setDate: PropTypes.func,
};

export default DateHeading;
