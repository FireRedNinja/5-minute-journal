import React from "react";
import DateHeading from "./../DateHeading/DateHeading";
import DayViewForm from './DayViewForm/DayViewForm';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSun} from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap';

const DayView = ({date}) => (
  <>
    <Row>
      <Col xs='auto'>
          <FontAwesomeIcon icon={faSun} size='3x'/>
      </Col>
      <Col xs >
          <DateHeading date={date}/>
      </Col>
      
    </Row>
    <DayViewForm date={date}/>
  </>
);

export default DayView;
