import React from "react";
import { Col, Row } from "react-bootstrap";
import "C:/Users/darga/Desktop/portfolio1/Portfolio-master/src/style.css";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiMysql,
} from "react-icons/si";
import { FaCss3, FaHtml5 } from "react-icons/fa";
import { DiDjango } from "react-icons/di";



function Techstack() {

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="progress-container" >
          <div className="progress-bar" style={{ '--progress-width':"80%"  }}><b className="percent">80%</b></div>
        </div>
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div className="progress-container" >
          <div className="progress-bar" style={{ '--progress-width':"80%"  }}><b className="percent" >80%</b></div>
        </div>
        <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div className="progress-container" >
          <div className="progress-bar" style={{ '--progress-width':"80%"  }}><b className="percent">80%</b></div>
        </div>
        <FaCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div className="progress-container" >
          <div className="progress-bar" style={{ '--progress-width':"70%"  }}><b className="percent">70%</b></div>
        </div>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div className="progress-container" >
          <div className="progress-bar" style={{ '--progress-width':"80%"  }}><b className="percent">80%</b></div>
        </div>
        <SiMysql />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <div className="progress-container" >
          <div className="progress-bar" style={{ '--progress-width':"50%"  }}><b className="percent">50%</b></div>
        </div>
        <DiDjango  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div className="progress-container" >
          <div className="progress-bar" style={{ '--progress-width':"70%"  }}><b className="percent">70%</b></div>
        </div>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <div className="progress-container" >
          <div className="progress-bar" style={{ '--progress-width':"40%"  }}><b className="percent">50%</b></div>
        </div>
        <DiGit />
      </Col>

    </Row>
  );
}

export default Techstack;
