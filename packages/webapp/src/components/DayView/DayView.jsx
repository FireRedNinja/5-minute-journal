import React from 'react';
import DateHeading from './../DateHeading/DateHeading';
import DayViewForm from './DayViewForm/DayViewForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const DayView = ({ date }) => (
  <>
    <Row>
      <Col xs="auto">
        <FontAwesomeIcon icon={faSun} size="3x" />
      </Col>
      <Col xs>
        <DateHeading date={date} />
      </Col>
    </Row>
    <DayViewForm date={date} />
  </>
);

DayView.propTypes = {
  date: PropTypes.string,
};

export default DayView;
