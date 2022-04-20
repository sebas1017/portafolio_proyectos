import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn, FaYoutube, FaPython, FaDocker , FaLinux} from "react-icons/fa";
import { TiCoffee } from "react-icons/ti";
import { SiJavascript , SiFlask, SiPostgresql,SiDjango, SiGnubash,SiGit} from "react-icons/si";
import Button from "react-bootstrap/Button";
import "../../style.css";
import PDF from "../../RESUME_CV.pdf";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Permiteme <span className="purple"> Presentarme </span>
            </h1>
            <p className="home-about-body">
            <TiCoffee /> Desarrollador de software en Python, con experiencia en frameworks como Flask, Django , también tengo experiencia en desarrollo backend , análisis de datos, y desarrollo WEB  desde muy chico vengo preparándome en diversos campos de la informática, en donde actualmente estoy mas centrado , ya te lo imaginaras... Desarrollo backend.

              <br />
              <br /> <FaPython />  <SiJavascript /> Mis lenguajes de programacion favoritos son
              <i>
                <b className="purple"> Javascript, Python, and Golang </b>
              </i>
              <br />
              <br />
            Tengo experiencia laboral desarrollando software con  las siguientes tecnologias
              <i>
                <b className="purple">Python,PostgreSQL,Linux,Flask,Django,Docker ,Javascript, Bash,Git, APIS </b>
              </i>
              <FaPython />  <SiJavascript />  <SiFlask /> <SiPostgresql /> <SiDjango /> <SiGnubash /> <SiGit /> <FaDocker /> <FaLinux /> 
              <br />
              <br /> <FaLinux /> Mis áreas de interés personal son&nbsp;
              <i>
                <b className="purple"> Desarrollo Backend, Computacion En La Nube , Sistemas Distribuidos y Linux!!</b>
              </i>
              <br />
              <br /> <FaPython /> Actualmente estoy aprendiendo Golang, Y trabajo en una empresa multinacional como desarrollador Backend Python
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <div md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}>
          <Button variant="primary" href={PDF} target="_blank" size="lg">
            Resume
          </Button>
          </div>
          <Col md={12} className="home-about-social">
            <h1>SÍGUEME</h1>
            <p>
              No dudes en  <span className="purple">conectarte </span>conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sebas1017"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sebastian-henao-erazo-872070152/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/channel/UCjHvG_N3-zrpb8EedpIoFpA"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
