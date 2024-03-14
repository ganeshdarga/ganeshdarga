import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import phish from "../../Assets/Projects/phish.jpg";
import leave from "../../Assets/Projects/leave.jpg";
import crud from "../../Assets/Projects/crud.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leave}
              isBlog={false}
              title="leave Management"
              description="Online Leave management system project is an intranet based 
              application which can be accessed all over the organization. The aim of the project is to design and implement a web-based leave 
              management system for Students in an Educational Institutions using PHP 
              (Hypertext Pre-Processor), HTML (Hypertext Markup Language), JavaScript 
              and CSS (Cascading Style Sheet)."
              ghLink="https://github.com/ganeshdarga"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crud}
              isBlog={false}
              title="Crud operations using react"
              description="CRUD operations in React typically involve creating, reading, updating, and deleting data within a component or application. For example, to implement a CRUD system for managing a list of items, you would create components to display the items, allow users to add new items, edit existing items, and delete items. You would use state management techniques such as React's useState or useContext hooks to manage the data, and handle user interactions and updates through event handling and state manipulation.."
              ghLink="https://github.com/ganeshdarga"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={phish}
              isBlog={false}
              title="URL Phishing detection using ML"
              description="Phishing is a form of cyber attack where malicious actors attempt to deceive individuals into revealing sensitive information such as usernames, passwords, or financial details by masquerading as a trustworthy entity in electronic communication.Machine learning (ML) can be employed to combat URL phishing by analyzing various features of URLs and web pages to identify potential phishing attempts. ML algorithms can be trained on large datasets containing both legitimate and phishing URLs, allowing them to learn patterns and characteristics indicative of phishing attacks."
              ghLink="https://github.com/ganeshdarga"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
