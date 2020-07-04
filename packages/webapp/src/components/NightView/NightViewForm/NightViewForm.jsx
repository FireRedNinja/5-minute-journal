import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { request } from 'graphql-request';
import PropTypes from 'prop-types';

const QUERY_URL = 'http://localhost:3000/graphql/';

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
    <Form onSubmit={handleSubmit}>
      <h5>3 Amazing things that happened today...</h5>
      <Form.Group>
        <Form.Label>1.</Form.Label>
        <Form.Control
          as="input"
          name="amazing1"
          value={amazing1}
          type="text"
          onChange={handleChange}
        />
        <Form.Label>2.</Form.Label>
        <Form.Control
          as="input"
          name="amazing2"
          type="text"
          value={amazing2}
          onChange={handleChange}
        />
        <Form.Label>3.</Form.Label>
        <Form.Control
          as="input"
          name="amazing3"
          type="text"
          value={amazing3}
          onChange={handleChange}
        />
      </Form.Group>

      <h5>How could I have made today even better?</h5>
      <Form.Group>
        <Form.Control
          as="textarea"
          name="todaybetter"
          type="text"
          value={todayBetter}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit" block>
        Submit
      </Button>
    </Form>
  );
};

NightViewForm.propTypes = {
  date: PropTypes.string,
};

export default NightViewForm;
