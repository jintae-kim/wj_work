import React from "react";
import { Gnb, Aside, HistoryStack } from "./components/Include";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const LayoutProvider = () => {
  return (
    <Container fluid className="container-wrapper">
      <Gnb />
      <Row className="contents-wrapper">
        <Col className="aside-section">
          <Aside />
        </Col>
        <Col xs="10" className="contents-section">
          <Outlet />
        </Col>
      </Row>
      <HistoryStack />
    </Container>
  )
};

export default LayoutProvider;