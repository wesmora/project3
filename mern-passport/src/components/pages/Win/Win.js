import React, { Component } from 'react';
import './Win.css';
import { Col, Row, Container } from "../../Grid";

const Lose = () => (
  <Container fluid>
    <Row>
      <Col size="md-2" />
      <Col size="md-8">
          <h1>You Win</h1>
          <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji" className="emoji-span">
              🙄
            </span>
          </h1>
      </Col>
      <Col size="md-2" />
    </Row>
  </Container>
);

export default Lose;