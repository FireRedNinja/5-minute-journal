import React from 'react';
import DateHeading from './../DateHeading/DateHeading';
import NightViewForm from './NightViewForm/NightViewForm';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const NightView = ({ date }) => {
  return (
    <div className="night">
      <Row>
        <Col xs="auto">
          <FontAwesomeIcon icon={faMoon} size="3x" />
        </Col>
        <Col xs>
          <DateHeading date={date} />
        </Col>
      </Row>
      <NightViewForm date={date} />
    </div>
  );
};

NightView.propTypes = {
  date: PropTypes.string,
};

export default NightView;
