import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal, BiGlobe } from "react-icons/bi";
import { BsImage } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.imgPath} target="_blank">
          <BsImage /> &nbsp;
          Diagrama Arquitectura
        </Button>

        {props.landingUrl ? (
          <Button variant="primary" href={props.landingUrl} target="_blank">
            <BiGlobe /> &nbsp;
            Landing Page
          </Button>
        ) : (
          <Button variant="primary" disabled style={{ opacity: 0.4, cursor: "not-allowed" }}>
            <BiGlobe /> &nbsp;
            Landing Page
          </Button>
        )}

        <Button variant="primary" href={props.link_doc} target="_blank">
          <BiLinkExternal /> &nbsp;
          GitHub
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
