import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn, FaYoutube, FaPython, FaDocker, FaLinux, FaAws } from "react-icons/fa";
import { SiJavascript, SiUdemy, SiFastapi, SiPostgresql, SiDjango, SiGnubash, SiGit, SiKubernetes } from "react-icons/si";
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
            Permíteme <span className="purple"> Presentarme </span>
            </h1>
            <p className="home-about-body">
              Senior Backend Developer con <span className="purple">+4 años de experiencia</span> profesional
              construyendo sistemas escalables y arquitecturas distribuidas.
              <br /><br />
              Actualmente trabajo en <span className="purple">Simetrik</span> donde desarrollo servicios backend
              con FastAPI, implemento LLMs, creo pipelines de CI/CD con AWS, y orquesto infraestructuras
              con EKS y Docker.
              <br /><br />
              <FaPython /> <SiJavascript /> Mis lenguajes principales son
              <b className="purple"> Python y JavaScript</b>
              <br /><br />
              Mi stack incluye:
              <b className="purple"> FastAPI, Django, PostgreSQL, Cassandra, Redis, Docker,
              Kubernetes, AWS (Lambda, EKS, SQS, SNS), Terraform, Airflow</b>
              <br />
              <SiFastapi /> <SiPostgresql /> <SiDjango /> <SiGnubash /> <SiGit /> <FaDocker /> <FaLinux /> <FaAws /> <SiKubernetes />
              <br /><br />
              <FaLinux /> Mis áreas de interés son&nbsp;
              <b className="purple">Backend Engineering, Cloud Computing, Sistemas Distribuidos, IA/LLMs y Linux</b>
              <br /><br />
              También soy instructor en <span className="purple">Udemy</span> y creador de contenido
              en <span className="purple">YouTube</span> donde comparto conocimiento sobre desarrollo de software.
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
          Descargar Currículum
          </Button>
          <br></br>
          <br></br>
          <Button variant="primary" href="https://www.youtube.com/channel/UCjHvG_N3-zrpb8EedpIoFpA" target="_blank" size="lg">
          Visitar Mi Canal De YouTube
          </Button>
          <br></br>
          <br></br>
          <Button variant="primary" href="https://www.udemy.com/user/sebastian-henao-erazo/" target="_blank" size="lg">
          Visitar Mis Cursos En Udemy
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

              <li className="social-icons">
                <a
                  href="https://www.udemy.com/user/sebastian-henao-erazo/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiUdemy />
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
