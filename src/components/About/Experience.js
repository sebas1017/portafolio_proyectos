import React from "react";
import { Row, Col } from "react-bootstrap";

import simetrikLogo from "../../Assets/logos/simetrik.png";
import habiLogo from "../../Assets/logos/habi.png";
import tcsLogo from "../../Assets/logos/tcs.png";
import pcaLogo from "../../Assets/logos/pca.jpeg";
import grupobitLogo from "../../Assets/logos/grupobit.jpeg";
import unilibreLogo from "../../Assets/logos/unilibre.png";

const experiences = [
  {
    logo: simetrikLogo,
    role: "Senior Backend Developer",
    company: "Simetrik",
    period: "Nov 2023 - Actualmente",
    items: [
      "FastAPI: mantener, desarrollar y desplegar servicios de backend",
      "AWS Code Build: pipelines de CI/CD para la implementación continua",
      "AWS Elastic Container Service: Orquestar infraestructuras backend",
      "AWS Lambda: Desarrollo de Rest-APIs",
      "LLMs: Implementación de LLMs en backend",
      "Pytest: Implementación de pruebas unitarias",
      "Python: desarrollo de todas las funcionalidades requeridas",
      "Apache Cassandra, PostgreSQL, Docker, Bitbucket",
    ],
  },
  {
    logo: habiLogo,
    role: "Backend Developer",
    company: "Habi",
    period: "Jun 2022 - Nov 2023",
    items: [
      "Arquitecturas Serverless Framework (AWS)",
      "Modelos BPMN y DMN con Kogito y Drools",
      "AWS Step Functions y AWS Lambda",
      "Arquitecturas orientadas a eventos con SNS y SQS",
      "Unit tests con Python 3.8, unittest y Pytest",
      "APIs e integraciones con Hubspot, Pipefy",
      "Scripting y automatización de procesos en Python",
      "Consultas personalizadas y reportes SQL, POO, Gitlab",
    ],
  },
  {
    logo: tcsLogo,
    role: "Developer",
    company: "Tata Consultancy Services",
    period: "Oct 2021 - Jun 2022",
    items: [
      "Web scraping de fuentes de información y consumo de APIs",
      "Migración de aplicaciones monolíticas a microservicios en Python",
      "Scrapy framework (Python)",
      "Implementación de pruebas unitarias",
      "Metodología SCRUM",
      "Desarrollo backend con Python, ETL para extracción y transformación de datos",
    ],
  },
  {
    logo: pcaLogo,
    role: "Backend Developer",
    company: "PCA Ingeniería",
    period: "May 2021 - Oct 2021",
    items: [
      "APIs con Django REST Framework",
      "PL/PgSQL en PostgreSQL",
      "Componentes en Vue JS (frontend)",
      "Docker Compose, Gitlab",
      "WebSockets, consultas SQL personalizadas",
      "Adaptación de videollamadas (Open Source)",
      "Herramientas: Trello, Jira",
    ],
  },
  {
    logo: grupobitLogo,
    role: "Analista de Desarrollo",
    company: "GrupoBit",
    period: "Feb 2020 - May 2021",
    items: [
      "Análisis de datos con Python: pandas, Matplotlib",
      "Pentaho Data Integration: procesos ETL",
      "Automatización con Bash scripting en Linux",
      "DWH con SQL, procedimientos almacenados PL/pgSQL",
      "Bases de datos: MySQL, MariaDB, PostgreSQL",
      "Administración de servidores Linux",
      "Desarrollo con Python, Django y Flask",
    ],
  },
];

const education = [
  {
    logo: unilibreLogo,
    degree: "Ingeniería de Sistemas",
    institution: "Universidad Libre Seccional Cali",
    period: "Feb 2017 - Sep 2023",
  },
];

function Experience() {
  return (
    <div>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Experiencia <strong className="purple">Profesional</strong>
      </h1>

      {experiences.map((exp, index) => (
        <Row
          key={index}
          className="experience-card"
          style={{
            justifyContent: "center",
            padding: "20px 10px",
            marginBottom: "20px",
            border: "1.7px solid rgba(200, 137, 230, 0.4)",
            borderRadius: "10px",
            background: "rgba(82, 52, 121, 0.15)",
          }}
        >
          <Col md={2} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img
              src={exp.logo}
              alt={exp.company}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "contain",
                borderRadius: "10px",
                background: "white",
                padding: "5px",
              }}
            />
          </Col>
          <Col md={10}>
            <h4 style={{ color: "#c770f0", marginBottom: "2px" }}>{exp.role}</h4>
            <h5 style={{ color: "white", marginBottom: "2px" }}>{exp.company}</h5>
            <p style={{ color: "#a588c0", fontSize: "0.9em", marginBottom: "8px" }}>{exp.period}</p>
            <ul style={{ paddingLeft: "20px", margin: 0 }}>
              {exp.items.map((item, i) => (
                <li key={i} style={{ color: "#ddd", fontSize: "0.9em", paddingBottom: "3px" }}>
                  {item}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      ))}

      <h1 className="project-heading" style={{ paddingTop: "30px", paddingBottom: "20px" }}>
        <strong className="purple">Educación</strong>
      </h1>

      {education.map((edu, index) => (
        <Row
          key={index}
          style={{
            justifyContent: "center",
            padding: "20px 10px",
            marginBottom: "20px",
            border: "1.7px solid rgba(200, 137, 230, 0.4)",
            borderRadius: "10px",
            background: "rgba(82, 52, 121, 0.15)",
          }}
        >
          <Col md={2} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img
              src={edu.logo}
              alt={edu.institution}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "contain",
                borderRadius: "10px",
                background: "white",
                padding: "5px",
              }}
            />
          </Col>
          <Col md={10}>
            <h4 style={{ color: "#c770f0", marginBottom: "2px" }}>{edu.degree}</h4>
            <h5 style={{ color: "white", marginBottom: "2px" }}>{edu.institution}</h5>
            <p style={{ color: "#a588c0", fontSize: "0.9em", marginBottom: 0 }}>{edu.period}</p>
          </Col>
        </Row>
      ))}
    </div>
  );
}

export default Experience;
