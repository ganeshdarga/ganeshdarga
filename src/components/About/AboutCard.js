import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">DARGA GANESH </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            I am currently pursuing im B-Tech Final Year in Sphoorthy Engineering College with specialization of CSE-DATA SCIENCE.
            <br />
            <span className="purple"> SSC:</span><br></br>
            I have completed my SSC in the year 2018 in Lord's Talent High School
            <br />
            <span className="purple"> DIPLOMA:</span><br></br>
            I have completed my Diploma in the Year 2021 in Teegala Krishna Reddy Engineering College with Specilization of Civil.

            <br />
            <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Box Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ganesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
