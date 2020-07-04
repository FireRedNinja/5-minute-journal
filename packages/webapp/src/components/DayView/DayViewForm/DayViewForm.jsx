import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { request } from "graphql-request";

const QUERY_URL = "http://localhost:3000/graphql/";

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

const DayViewForm = ({date}) => {
  const [grateful1, setGrateful1] = useState("");
  const [grateful2, setGrateful2] = useState("");
  const [grateful3, setGrateful3] = useState("");
  const [great1, setGreat1] = useState("");
  const [great2, setGreat2] = useState("");
  const [great3, setGreat3] = useState("");
  const [iam, setIam] = useState("");

  useEffect(() => {
    request(QUERY_URL, DAY_VIEW_QUERY, {
      date: date,
    }).then((data) => {
      if (data.day) {
        setGrateful1(data.day.grateful1)
        setGrateful2(data.day.grateful2)
        setGrateful3(data.day.grateful3)
        setGreat1(data.day.great1)
        setGreat2(data.day.great2)
        setGreat3(data.day.great3)
        setIam(data.day.iam)
      }
    });
  }, [date]);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    switch (name) {
      case "grateful1":
        setGrateful1(value);
        break;
      case "grateful2":
        setGrateful2(value);
        break;
      case "grateful3":
        setGrateful3(value);
        break;
      case "great1":
        setGreat1(value);
        break;
      case "great2":
        setGreat2(value);
        break;
      case "great3":
        setGreat3(value);
        break;
      case "iam":
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
    })
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h5>I am grateful for...</h5>
      <Form.Group>
        <Form.Label>1.</Form.Label>
        <Form.Control
          as="input"
          name="grateful1"
          value={grateful1}
          type="text"
          onChange={handleChange}
        />
        <Form.Label>2.</Form.Label>
        <Form.Control
          as="input"
          name="grateful2"
          value={grateful2}
          type="text"
          onChange={handleChange}
        />
        <Form.Label>3.</Form.Label>
        <Form.Control
          as="input"
          name="grateful3"
          value={grateful3}
          type="text"
          onChange={handleChange}
        />
      </Form.Group>

      <h5>What would make today great?</h5>
      <Form.Group>
        <Form.Label>1.</Form.Label>
        <Form.Control
          as="input"
          name="great1"
          value={great1}
          type="text"
          onChange={handleChange}
        />
        <Form.Label>2.</Form.Label>
        <Form.Control
          as="input"
          name="great2"
          value={great2}
          type="text"
          onChange={handleChange}
        />
        <Form.Label>3.</Form.Label>
        <Form.Control
          as="input"
          name="great3"
          value={great3}
          type="text"
          onChange={handleChange}
        />
      </Form.Group>

      <h5>Daily affirmation. I am...</h5>
      <Form.Group>
        <Form.Control
          as="textarea"
          name="iam"
          value={iam}
          type="text"
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit" block>
        Submit
      </Button>
    </Form>
  );
};

export default DayViewForm;
