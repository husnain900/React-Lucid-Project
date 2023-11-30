import React from "react";
import "./Testimonials.css";
import LtoR from "../../../UI-Style/LtoRVector";

const testimonialData = [
  {
    imgSrc: "assets/img/testimonial6.png",
    text: "I was impressed by the creativity and innovation that Virtual Focus brought to our advertising campaign. They came up with a Mind Blowing Concept.",
    clientImgSrc: "assets/img/Avatar/Rectangle 9522.svg",
    clientName: "Adam Smith",
    clientTitle: "Product Manager at Canva",
  },
  {
    imgSrc: "Assets/img/card-logo/Group 1000003348.svg",
    text: "I had the pleasure of working with Virtual Focus on a branding project for my startup and I couldn't be happier with the results.",
    clientImgSrc: "assets/img/Avatar/Rectangle 95222.svg",
    clientName: "Andrew Jones",
    clientTitle: "Product Developer at Servicem8",
  },
  {
    imgSrc: "Assets/img/card-logo/Shutterstock_1047902260 1.png",
    text: "We hired Virtual Focus to design a new website for our business and they knocked it out of the park. They were able to balance our desire for a modern look.",
    clientImgSrc: "assets/img/Avatar/Rectangle 9524.svg",
    clientName: "Beth Wilson",
    clientTitle: "Product Manager at MS Office",
  },
  {
    imgSrc: "Assets/img/card-logo/Group 1000003341.svg",
    text: "We've been working with Virtual Focus for over a year now and they've been instrumental in helping us elevate our brand identity and digital presence.",
    clientImgSrc: "assets/img/Avatar/Rectangle 9525.svg",
    clientName: "Lauren White",
    clientTitle: "Product Manager at Google",
  },
  {
    imgSrc: "Assets/img/card-logo/Meta_Platforms_Inc._logo 1.svg",
    text: "Working with Virtual Focus was a dream! They took our vague ideas and turned them into a cohesive brand identity that truly reflects who we are as a company.",
    clientImgSrc: "assets/img/Avatar/Group 1000003349.svg",
    clientName: "Mike Warren",
    clientTitle: "Product Manager at Clickup",
  },
  {
    imgSrc: "Assets/img/card-logo/Shutterstock_2315312313 1.png",
    text: "I was blown away by the creativity and attention to detail that Virtual Focus brought to our website redesign project. They not only made it look beautiful but also optimized it.",
    clientImgSrc: "assets/img/Avatar/Group 1000003349.svg",
    clientName: "Mike Warren",
    clientTitle: "Product Manager at Xero",
  },
];

const Testimonials = () => {
  return (
    <>
      <LtoR />
      <div className="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="testimonial-title">
                <button>Testimonials</button>
                <h2 className="mx-auto  mx-lg-0 mx-md-auto ">
                  Hear what our clients say
                </h2>
              </div>
            </div>
            {testimonialData.map((testimonial, index) => (
              <div
                className={`col-12 col-md-6 col-lg-6 ${
                  index === testimonialData.length - 1 ? "" : ""
                } ${
                  index === 1 || index === 3 || index === 5 || index === 7
                    ? "down-space"
                    : ""
                }`}
                key={index}
              >
                <div className="testimonial-cards">
                  <div
                    className={`testimonial-logo ${
                      index === 3 ? "nth-4" : ""
                    } ${index === 4 ? "nth-5" : ""}`}
                  >
                    <img
                      src={testimonial.imgSrc}
                      alt={`Testimonial ${index + 1}`}
                      className={index === 1 ? "" : ""}
                    />
                  </div>
                  <div>
                    <p>{testimonial.text}</p>
                  </div>
                  <div>
                    <div className="testimonial-client-info d-flex align-items-center gap-3">
                      {testimonial.clientImgSrc && (
                        <img
                          src={testimonial.clientImgSrc}
                          alt={`Client ${index + 1}`}
                        />
                      )}
                      <div>
                        <h4>{testimonial.clientName}</h4>
                        <p>{testimonial.clientTitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
