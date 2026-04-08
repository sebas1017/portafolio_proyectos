import React from "react";
import { Col, Row } from "react-bootstrap";

import dockerLogo from "../../Assets/logos/docker.svg";
import kubernetesLogo from "../../Assets/logos/kubernetes.svg";
import eksLogo from "../../Assets/logos/eks.svg";
import lambdaLogo from "../../Assets/logos/lambda.svg";
import awsLogo from "../../Assets/logos/aws.svg";
import terraformLogo from "../../Assets/logos/terraform.svg";
import gitLogo from "../../Assets/logos/git.svg";
import gitlabLogo from "../../Assets/logos/gitlab.svg";
import bitbucketLogo from "../../Assets/logos/bitbucket.svg";
import linuxLogo from "../../Assets/logos/linux.svg";
import bashLogo from "../../Assets/logos/bash.svg";
import pytestLogo from "../../Assets/logos/pytest.svg";
import sonarqubeLogo from "../../Assets/logos/sonarqube.svg";
import airflowLogo from "../../Assets/logos/airflow.svg";
import ffmpegLogo from "../../Assets/logos/ffmpeg.svg";
import opencvLogo from "../../Assets/logos/opencv.svg";
import ngrokLogo from "../../Assets/logos/ngrok.svg";
import cloudflareLogo from "../../Assets/logos/cloudflare.svg";

function Toolstack() {
  const tools = [
    { logo: dockerLogo, name: "Docker" },
    { logo: kubernetesLogo, name: "Kubernetes" },
    { logo: eksLogo, name: "AWS EKS" },
    { logo: lambdaLogo, name: "AWS Lambda" },
    { logo: awsLogo, name: "AWS" },
    { logo: terraformLogo, name: "Terraform" },
    { logo: gitLogo, name: "Git" },
    { logo: gitlabLogo, name: "GitLab" },
    { logo: bitbucketLogo, name: "Bitbucket" },
    { logo: linuxLogo, name: "Linux" },
    { logo: bashLogo, name: "Bash" },
    { logo: pytestLogo, name: "Pytest" },
    { logo: sonarqubeLogo, name: "SonarQube" },
    { logo: airflowLogo, name: "Airflow" },
    { logo: ffmpegLogo, name: "FFmpeg" },
    { logo: opencvLogo, name: "OpenCV" },
    { logo: ngrokLogo, name: "Ngrok" },
    { logo: cloudflareLogo, name: "Cloudflare" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <img src={tool.logo} alt={tool.name} style={{ width: "50px", height: "50px" }} />
          <p style={{ fontSize: "0.35em", marginTop: "8px", marginBottom: 0 }}>{tool.name}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
