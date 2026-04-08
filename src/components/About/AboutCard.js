import React from "react";
import Card from "react-bootstrap/Card";

import { GiSoccerBall, GiCommercialAirplane } from "react-icons/gi";
import { GrMail } from "react-icons/gr";
import { MdPhone } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, soy <span className="purple">Sebastián Henao Erazo </span>
            de <span className="purple">Colombia, ciudad de Cali.</span>
            <br />
            <br />
            Ingeniero de Sistemas y <span className="purple">Senior Backend Developer</span> con
            más de 4 años de experiencia profesional desarrollando software.
            Actualmente trabajo en <span className="purple">Simetrik</span> como Senior Backend Developer
            donde desarrollo y mantengo servicios backend con FastAPI, creo pipelines de CI/CD con AWS Code Build,
            orquesto infraestructuras con EKS, implemento LLMs en backend, y trabajo con Apache Cassandra,
            PostgreSQL, Docker y Bitbucket.
            <br />
            <br />
            He trabajado en empresas como <span className="purple">Habi, Tata Consultancy Services,
            PCA Ingeniería y GrupoBit</span>, donde he construido desde arquitecturas serverless en AWS
            hasta migraciones de aplicaciones monolíticas a microservicios.
            <br />
            <br />
            Me apasiona enseñar, soy instructor en <span className="purple">Udemy</span> y creador de
            contenido en <span className="purple">YouTube</span> donde comparto conocimiento sobre
            desarrollo de software y tecnología.
          </p>

          <p style={{ textAlign: "justify" }}>
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
