import React from "react";
import "./Bannar.css";
const Bannar = () => {
  return (
    <>
      <div className="pricing-bannar">
        <div className="container">
          <div className="row align-items-center" id="Media-resp">
            <div className="col-12 col-lg-6 ">
              <div className="pricing-bannar-img">
                <img
                  src="Assets/img/pricing.svg"
                  alt=""
                  srcset=""
                  className="pricing-image"
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 left-sp" id="margin">
              <div className="pricing-bannar-content mt-4 mt-lg-0 mt-md-0 text-center text-lg-start text-md-start float-start float-md-end float-lg-end">
                <p style={{ fontWeight: "600" }}>
                  Choose success with our app and software management plans
                </p>
                <h1 className="heading">
                  Pricing <br /> that <span>Matter’s</span>
                </h1>
                <p style={{ color: "#000000" }}>
                  Experience the full suite of services with tech support,
                  year-round updates, social media management, digital marketing
                  strategy creation, PLUS access to our call center and
                  streamlined business administration support for scheduling
                  appointments and drafting contracts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bannar;
