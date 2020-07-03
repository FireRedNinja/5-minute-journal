import React from "react";
import DateHeading from "./../DateHeading/DateHeading";
import NightViewForm from "./NightViewForm/NightViewForm";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon} from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap';

const NightView = ({date}) => {
  return (
    <div className="night">
      <Row>
        <Col xs='auto'>
          <FontAwesomeIcon icon={faMoon} size='3x'/>
        </Col>
        <Col xs>
          <DateHeading date={date}/>
        </Col>
      </Row>
      <NightViewForm date={date}/>
    </div>
  );
};

export default NightView;
