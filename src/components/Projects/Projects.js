import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import phish from "../../Assets/Projects/phish.jpg";
import leave from "../../Assets/Projects/leave.jpg";
import crud from "../../Assets/Projects/crud.jpg";
import crm from "../../Assets/Projects/crm.jpg";
import gemini from "../../Assets/Projects/gemini.jpg";

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
              imgPath={crm}
              isBlog={false}
              title="Customer Relationship Management System"
              description="I am a dedicated software developer with a strong focus on full stack development. Recently, I interned at Coapps, where I contributed to the creation of a Customer Relationship Management (CRM) system using React, HTML, CSS, JavaScript, MySQL, and Django."
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
              imgPath={gemini}
              isBlog={false}
              title="Gemini Clone"
              description="I am a passionate software developer with expertise in front-end technologies. Recently, I created a Gemini chat clone application using ReactJS, HTML, CSS, and JavaScript. This project showcases my ability to build responsive, interactive, and user-friendly web applications."
              ghLink="https://github.com/ganeshdarga"
              demoLink=" https://ganeshdarga.github.io/Geminiclone/"          
            />
          </Col>
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

         



        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
