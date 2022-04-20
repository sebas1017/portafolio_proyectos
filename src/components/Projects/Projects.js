import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import rest_countries_api from "./../../Assets/rest_countries_api.jpg"
import fast_api_crud from "./../../Assets/fast_api_crud.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis Proyectos<strong className="purple">Recientes </strong>
        </h1>
        <p style={{ color: "white" }}>
        Aquí hay algunos proyectos en los que he trabajado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rest_countries_api}
              isBlog={false}
              title="REST COUNTRIES API"
              description="Prueba tecnica de desarrollador backend python , donde construi una API sin hacer uso de ningun framework ,se solicito consumir una API externa de paises y posteriormente  procesar la informacion , luego guardar dicha informacion en una base de datos  SQLITE y retornar el JSON de respuesta al cliente en el endpoint raiz del URL , para mas detalles de los requerimientos mediante los cuales desarrolle esta API ver la siguiente imagen"
              link="https://vast-brook-33817.herokuapp.com/"
              link_doc="https://github.com/sebas1017/API-REST-COUNTRIES"
            />
          </Col>
        </Row>


        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fast_api_crud}
              isBlog={false}
              title="USERS API-REST"
              description="API basada en el marco REST , realiza operaciones CRUD para el registro de usuarios , realizada con FastAPI y Python conectandose a una base de datos PostgreSQL almacenada en heroku"
              link="https://fastapi-users-rest.herokuapp.com/docs"
              link_doc="https://github.com/sebas1017/FAST-API-CRUD"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
