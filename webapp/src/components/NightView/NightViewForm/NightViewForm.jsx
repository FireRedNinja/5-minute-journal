import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { request } from 'graphql-request';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const QUERY_URL = 'http://localhost:49125/';

const NIGHT_VIEW_QUERY = `
  query NightViewQuery($date: String!) {
    night(date: $date) {
      id
      date
      amazing1
      amazing2
      amazing3
      dayBetter
    }
  }
`;

const NIGHT_VIEW_SUBMIT_QUERY = `
  mutation NightViewSubmit($date: String!, $amazing1: String, $amazing2: String, $amazing3: String, $dayBetter: String) {
    saveNight(date: $date, amazing1: $amazing1, amazing2: $amazing2, amazing3: $amazing3, dayBetter: $dayBetter) {
      id
      date
      amazing1
      amazing2
      amazing3
      dayBetter
    }
  }
`;

const NightViewForm = ({ date }) => {
  const [amazing1, setAmazing1] = useState('');
  const [amazing2, setAmazing2] = useState('');
  const [amazing3, setAmazing3] = useState('');
  const [todayBetter, setTodayBetter] = useState('');

  useEffect(() => {
    request(QUERY_URL, NIGHT_VIEW_QUERY, {
      date: date,
    }).then((data) => {
      if (data.night) {
        setAmazing1(data.night.amazing1);
        setAmazing2(data.night.amazing2);
        setAmazing3(data.night.amazing3);
        setTodayBetter(data.night.dayBetter);
      }
    });
  }, [date]);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    switch (name) {
      case 'amazing1':
        setAmazing1(value);
        break;
      case 'amazing2':
        setAmazing2(value);
        break;
      case 'amazing3':
        setAmazing3(value);
        break;
      case 'todaybetter':
        setTodayBetter(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    request(QUERY_URL, NIGHT_VIEW_SUBMIT_QUERY, {
      date: date,
      amazing1: amazing1,
      amazing2: amazing2,
      amazing3: amazing3,
      dayBetter: todayBetter,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={4}>
        <Grid container item spacing={1}>
          <Grid item>
            <Typography variant="h5">
              3 Amazing things that happened today...
            </Typography>
          </Grid>
          <Grid container item spacing={3}>
            <Grid item xs={12}>
              <TextField
                name="amazing1"
                value={amazing1}
                type="text"
                onChange={handleChange}
                label="1."
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="amazing2"
                type="text"
                value={amazing2}
                onChange={handleChange}
                label="2."
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="amazing3"
                type="text"
                value={amazing3}
                onChange={handleChange}
                label="3."
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid container item spacing={1}>
          <Grid item>
            <Typography variant="h5">
              How could I have made today even better?
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              multiline
              rows={4}
              name="todaybetter"
              type="text"
              value={todayBetter}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

NightViewForm.propTypes = {
  date: PropTypes.string,
};

export default NightViewForm;
