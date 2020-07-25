import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { request } from 'graphql-request';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const QUERY_URL = 'http://localhost:49125/';

const DAY_VIEW_QUERY = `
  query DayViewQuery($date: String!) {
    day(date: $date) {
      id
      date
      grateful1
      grateful2
      grateful3
      great1
      great2
      great3
      iam
    }
  }
`;

const DAY_VIEW_SUBMIT_QUERY = `
  mutation DayViewSubmit($date: String!, $grateful1: String, $grateful2: String, $grateful3: String, $great1: String, $great2: String, $great3: String, $iam: String) {
    saveDay(date: $date, grateful1: $grateful1, grateful2: $grateful2, grateful3: $grateful3, great1: $great1, great2: $great2, great3: $great3, iam: $iam) {
      date
      grateful1
      grateful2
      grateful3
      great1
      great2
      great3
      iam
    }
  }
`;

const DayViewForm = ({ date }) => {
  const [grateful1, setGrateful1] = useState('');
  const [grateful2, setGrateful2] = useState('');
  const [grateful3, setGrateful3] = useState('');
  const [great1, setGreat1] = useState('');
  const [great2, setGreat2] = useState('');
  const [great3, setGreat3] = useState('');
  const [iam, setIam] = useState('');

  useEffect(() => {
    request(QUERY_URL, DAY_VIEW_QUERY, {
      date: date,
    }).then((data) => {
      if (data.day) {
        setGrateful1(data.day.grateful1);
        setGrateful2(data.day.grateful2);
        setGrateful3(data.day.grateful3);
        setGreat1(data.day.great1);
        setGreat2(data.day.great2);
        setGreat3(data.day.great3);
        setIam(data.day.iam);
      }
    });
  }, [date]);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    switch (name) {
      case 'grateful1':
        setGrateful1(value);
        break;
      case 'grateful2':
        setGrateful2(value);
        break;
      case 'grateful3':
        setGrateful3(value);
        break;
      case 'great1':
        setGreat1(value);
        break;
      case 'great2':
        setGreat2(value);
        break;
      case 'great3':
        setGreat3(value);
        break;
      case 'iam':
        setIam(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    request(QUERY_URL, DAY_VIEW_SUBMIT_QUERY, {
      date: date,
      grateful1: grateful1,
      grateful2: grateful2,
      grateful3: grateful3,
      great1: great1,
      great2: great2,
      great3: great3,
      iam: iam,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={4}>
        <Grid container item spacing={1}>
          <Grid item>
            <Typography variant="h5">I am grateful for...</Typography>
          </Grid>
          <Grid container item spacing={3}>
            <Grid item xs={12}>
              <TextField
                name="grateful1"
                value={grateful1}
                type="text"
                label="1."
                onChange={handleChange}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="grateful2"
                value={grateful2}
                type="text"
                label="2."
                onChange={handleChange}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="grateful3"
                value={grateful3}
                type="text"
                label="3."
                onChange={handleChange}
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid container item spacing={1}>
          <Grid item>
            <Typography variant="h5">What would make today great?</Typography>
          </Grid>
          <Grid container item spacing={3}>
            <Grid item xs={12}>
              <TextField
                name="great1"
                value={great1}
                type="text"
                onChange={handleChange}
                label="1."
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="great2"
                value={great2}
                type="text"
                onChange={handleChange}
                label="2."
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="great3"
                value={great3}
                type="text"
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
            <Typography variant="h5">Daily affirmation. I am...</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              multiline
              rows={4}
              name="iam"
              value={iam}
              type="text"
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

DayViewForm.propTypes = {
  date: PropTypes.string,
};

export default DayViewForm;
