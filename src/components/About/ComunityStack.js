import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiUdemy, SiYoutube } from "react-icons/si";

import openaiLogo from "../../Assets/logos/openai.svg";
import geminiLogo from "../../Assets/logos/gemini.svg";
import pytorchLogo from "../../Assets/logos/pytorch.svg";
import vapiLogo from "../../Assets/logos/vapi.svg";

function Comunitystack() {
  const aiTools = [
    { logo: openaiLogo, name: "OpenAI" },
    { logo: geminiLogo, name: "Gemini" },
    { logo: pytorchLogo, name: "PyTorch" },
    { logo: vapiLogo, name: "Vapi.ai" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiUdemy />
        <p style={{ fontSize: "0.35em", marginTop: "8px", marginBottom: 0 }}>Udemy</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiYoutube />
        <p style={{ fontSize: "0.35em", marginTop: "8px", marginBottom: 0 }}>YouTube</p>
      </Col>
      {aiTools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <img src={tool.logo} alt={tool.name} style={{ width: "50px", height: "50px" }} />
          <p style={{ fontSize: "0.35em", marginTop: "8px", marginBottom: 0 }}>{tool.name}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Comunitystack;
