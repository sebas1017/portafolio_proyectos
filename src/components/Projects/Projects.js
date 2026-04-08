import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import viral_clip_extractor from "./../../Assets/viral_clip_extractor.png"
import ai_medical_voice_agent from "./../../Assets/ai_medical_voice_agent.png"

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
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={viral_clip_extractor}
              title="VIRAL CLIP EXTRACTOR"
              description="Sistema de microservicios con Docker Compose que extrae clips virales de videos largos automáticamente. Pipeline completo: transcripción con Whisper large-v3 (CUDA), análisis de momentos virales con Gemini 2.0 Flash (vía OpenRouter), corte con FFmpeg, y post-procesado que incluye eliminación de silencios, reencuadre 9:16 con detección facial (OpenCV DNN), y quemado de subtítulos ASS. Dashboard web con FastAPI, progreso en tiempo real vía SSE, autenticación, y descarga ZIP. 7 microservicios orquestados con Docker Compose y acceso público vía ngrok."
              landingUrl="https://saas-viral-clip-product.onrender.com/"
              link_doc="https://github.com/sebas1017/viral-clip-extractor"
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={ai_medical_voice_agent}
              title="AI MEDICAL VOICE AGENT"
              description="Agente de voz con IA para registro de pacientes en clínicas médicas. El paciente llama desde el navegador y conversa con 'Alex', un asistente que recolecta datos demográficos (nombre, DOB, teléfono, dirección, seguro médico) mediante conversación natural. Usa Vapi.ai como plataforma de voz, Deepgram Nova-2 para speech-to-text, GPT-4o-mini (vía OpenRouter) como LLM para decidir el flujo conversacional y ejecutar tool calls, 11Labs (voz Rachel) para text-to-speech, FastAPI con SQLAlchemy 2.0 async y SQLite para persistencia. Incluye verificación de duplicados, validación Pydantic, y deploy con Docker + ngrok."
              landingUrl={null}
              link_doc="https://github.com/sebas1017/ai_medical_voice_agent"
            />
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Projects;
