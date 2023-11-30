import React from "react";
import "./Services.css";

const serviceData = [
  {
    imgSrc: "Assets/img/Group 1000003227.svg",
    title: "Graphic Design",
    description:
      "Graphic design is a fascinating field that combines art, technology to create visual content"
  },
  {
    imgSrc: "Assets/img/Group 1000003226.svg",
    title: "Web Development",
    description:
      "Web development is a process of creating websites or web applications that can be accessed"
  },
  {
    imgSrc: "Assets/img/Group 1000003224.svg",
    title: "Business Administration",
    description:
      "Business administration is the process of managing various activities and resources to achieve its success"
  },
  {
    imgSrc: "Assets/img/Group 1000003223.svg",
    title: "Social Media Marketing",
    description:
      "It is a type of digital marketing that involves using social media platforms to promote a brand, product, or service."
  },
  {
    imgSrc: "Assets/img/Group 1000003165.svg",
    title: "Cyber Security",
    description:
      "Cybersecurity preserves digital assets, maintaining data integrity, privacy, and trust by thwarting cyber threats."
  }
];

const TechServices = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="cards-content">
              <button>Our Services</button>
              <h2>Services we Provide</h2>
              <p>
                We believe that the best ideas come from collaboration, which is
                why we work closely with our clients to understand their goals
                and aspirations.
              </p>
            </div>
          </div>
          {serviceData.map((service, index) => (
            <div
              key={index}
              className={`col-12 col-md-6 col-lg-4 ${
                index === 4 ? "position-relative" : ""
              }`}
            >
              <div className="services-cards">
                <div>
                  <img src={service.imgSrc} alt={service.title} />
                </div>
                {index === 4 && (
                  <img
                    className="position-absolute cent-img translate-middle"
                    src="Assets/img/cyber-security 1.png"
                    alt=""
                    srcSet=""
                  />
                )}
                <div>
                  <h3 className="h-white">{service.title}</h3>
                  <p className="h-white">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechServices;
