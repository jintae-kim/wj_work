import React from "react";
import { Gnb, Aside, HistoryStack } from "./components/Include";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Split } from "@geoffcox/react-splitter";

const LayoutProvider = () => {
  return (
    <Container fluid className="container-wrapper">
      <Gnb />
      <Row className="contents-wrapper">
        <Split initialPrimarySize='300px' minPrimarySize='10px' minSecondarySize='calc(100% - 300px)' splitterSize='5px' vertical>
          <div className="aside-section">
            <Aside />
          </div>
          <div className="contents-section">
            <Outlet />
          </div>
        </Split>
      </Row>
      <HistoryStack />
    </Container>
  )
};

export default LayoutProvider;