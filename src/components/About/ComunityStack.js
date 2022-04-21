
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiUdemy,
  SiYoutube
} from "react-icons/si";

function Comunitystack() {
    return (
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiUdemy />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiYoutube/>
        </Col>
      
      </Row>
    );
  }
  export default Comunitystack;