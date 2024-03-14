import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ganesh from "../../Assets/ganesh.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
          <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={ganesh}
                alt="home pic"
                className="img1"
                style={{ maxHeight: "450px" }}
              />
              {/* <img src="ganesh.jpg" alt="ganesh pic" style={{ maxHeight: "450px" }} ></img> */}
            </Col>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> DARGA GANESH</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
