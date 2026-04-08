import React from "react";
import { Col, Row } from "react-bootstrap";

import pythonLogo from "../../Assets/logos/python.svg";
import javascriptLogo from "../../Assets/logos/javascript.svg";
import fastApiLogo from "../../Assets/logos/fastapi.svg";
import djangoLogo from "../../Assets/logos/django.svg";
import postgresqlLogo from "../../Assets/logos/postgresql.svg";
import redisLogo from "../../Assets/logos/redis.svg";
import cassandraLogo from "../../Assets/logos/cassandra.svg";
import kafkaLogo from "../../Assets/logos/kafka.svg";
import pulsarLogo from "../../Assets/logos/pulsar.svg";
import snowflakeLogo from "../../Assets/logos/snowflake.svg";
import sqliteLogo from "../../Assets/logos/sqlite.svg";
import vueLogo from "../../Assets/logos/vue.svg";

function Techstack() {
  const techs = [
    { logo: pythonLogo, name: "Python" },
    { logo: javascriptLogo, name: "JavaScript" },
    { logo: fastApiLogo, name: "FastAPI" },
    { logo: djangoLogo, name: "Django" },
    { logo: postgresqlLogo, name: "PostgreSQL" },
    { logo: redisLogo, name: "Redis" },
    { logo: cassandraLogo, name: "Cassandra" },
    { logo: kafkaLogo, name: "Kafka" },
    { logo: pulsarLogo, name: "Pulsar" },
    { logo: snowflakeLogo, name: "Snowflake" },
    { logo: sqliteLogo, name: "SQLite" },
    { logo: vueLogo, name: "Vue.js" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <img src={tech.logo} alt={tech.name} style={{ width: "50px", height: "50px" }} />
          <p style={{ fontSize: "0.35em", marginTop: "8px", marginBottom: 0 }}>{tech.name}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
