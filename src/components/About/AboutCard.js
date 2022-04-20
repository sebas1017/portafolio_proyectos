import React from "react";
import Card from "react-bootstrap/Card";


import { GiSoccerBall ,GiCommercialAirplane} from "react-icons/gi";

import { FaLaptopCode} from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hola a todos, soy  <span className="purple"> Sebastian Henao Erazo </span>
          de <span className="purple"> Colombia , y vivo en la ciudad de Cali. </span>
            <br />Soy estudiante de último año de ingenieria de sistemas en la Universidad Libre  Seccional Cali y desarrollador backend Python.
            <br />
            <br />
            Pasatiempos
          </p>
          <ul>
            <li className="about-activity">
              <GiSoccerBall /> Futbol
            </li>
            <li className="about-activity">
              <GiCommercialAirplane /> Viajar
            </li>
            <li className="about-activity">
              <FaLaptopCode /> Programar :)
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Aprendizaje autodidacta!"{" "}
          </p>
          <footer className="blockquote-footer">Sebastian Henao Erazo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
