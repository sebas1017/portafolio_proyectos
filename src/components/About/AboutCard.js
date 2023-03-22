import React from "react";
import Card from "react-bootstrap/Card";


import { GiSoccerBall ,GiCommercialAirplane} from "react-icons/gi";
import { GrMail} from "react-icons/gr";
import { MdPhone} from "react-icons/md";
import { FaLaptopCode} from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hola a todos, soy  <span className="purple">Sebastián Henao Erazo de </span>
           <span className="purple">Colombia, y vivo en la ciudad de Cali.</span>
            <br />Soy  ingeniero  de sistemas y desarrollador backend Python.
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
          <p style={{ textAlign: "justify" }}>
            Datos De Contacto
          </p>
          <ul>
          
            <li className="about-activity">
              <MdPhone /> Teléfono - 3016425869
            </li>
            <li className="about-activity">
              <GrMail /> Email - henaoerazosebastian995@gmail.com
            </li>
          </ul>


          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Aprendizaje autodidacta!"{" "}
          </p>
          <footer className="blockquote-footer">Sebastián Henao Erazo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
