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
         Proyectos<strong className="purple"> Recientes </strong>
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
              description="Prueba técnica de desarrollador backend Python
              se requería construir una API sin hacer uso de ningún framework y 
              desde esta misma consumir una API externa que proporciona información de 
              países y posteriormente  procesar dicha información 
              luego guardar los resultados  en una base de datos  SQLITE y retornar 
              el JSON de respuesta al cliente en el recurso/endpoint raíz del URL
              si deseas conocer más detalles de los requerimientos mediante los cuales 
              desarrolle esta API desplázate y da click en Ver Documentación"
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
              description="API-REST que realiza operaciones CRUD para el registro de usuarios está construida con FastAPI y Python, a su vez también se conecta a una base de datos PostgreSQL desplegada en un servidor Heroku si deseas ver la documentación desplázate y da click en Ver Documentación :)"
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
