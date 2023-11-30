import React from "react";
import { FaStar } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import "./Bannar.css";
import { Container, Row, Col } from "react-bootstrap";

const testimonialData = [
  {
    stars: 5,
    title: "Best Creative Agency",
    text: "I was impressed by the creativity and innovation that Virtual Focus brought to our advertising campaign. They came up with a Mind Blowing Concept",
    clientImage: "assets/img/client1.png",
    clientName: "Denny Jones",
  },
];

const TechBanner = () => {
  return (
    <section className="tech-banner">
      <Container>
        <Row>
          <Col lg={8} md={6}>
            <div className="tech-banner-content">
              <div>
                <div>
                  <h1>
                    Simple,
                    <span> Intuitive & Expertly</span>
                  </h1>
                </div>
                <div>
                  <p>
                    A successful business doesn’t just have customers. It has
                    loyal customers. But with so many options out there, keeping
                    a loyal customers base can be tough.
                  </p>
                  <div className="text-center text-lg-start text-md-start mt-lg-1">
                    <Button variant="primary">Give us a shot</Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6}>
            {testimonialData.map((testimonial, index) => (
              <div key={index} className="banner-testimonial-card">
                <div>
                  {Array.from({ length: testimonial.stars }, (_, starIndex) => (
                    <FaStar key={starIndex} />
                  ))}
                </div>
                <div>
                  <h3>{testimonial.title}</h3>
                  <p>{testimonial.text}</p>
                </div>
                <div className="d-flex align-items-center gap-3 mt-2">
                  <img src={testimonial.clientImage} alt="Client" />
                  <h4 className="pt-2">{testimonial.clientName}</h4>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TechBanner;
