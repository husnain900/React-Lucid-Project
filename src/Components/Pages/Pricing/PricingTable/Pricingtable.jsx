import React from "react";
import "./Pricingtable.css";
// import PricingTable from "../../LandingPage/PricingTable/Pricingtable";
import { FiCheck } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import LtoR from "../../../UI-Style/LtoRVector";
import RtoLVector from "../../../UI-Style/RtoLVector";
const Buycards = () => {
  const [isYearly, setIsYearly] = useState(false);

  const pricingData = [
    {
      title: "Individual",
      description: "Suitable for Small Businesses",
      price: 350,
      features: [
        "Tech Support",
        "Year Round Updates",
        "Marketing Strategy Creation",
        "Social Media Management ",
        "Call Center",
        "Business Administration",
      ],
    },
    {
      title: "Professional",
      description: "Suitable For Medium Businesses",
      price: 650,
      features: [
        "Tech Support",
        "Year Round Updates",
        "Marketing Strategy Creation",
        "Social Media Management ",
        "Call Center",
        "Business Administration",
      ],
    },
    {
      title: "Business",
      description: "Suitable for Enterprise level software",
      price: 925,
      features: [
        "Tech Support",
        "Year Round Updates",
        "Marketing Strategy Creation",
        "Social Media Management ",
        "Call Center",
        "Business Administration",
      ],
    },
  ];

  return (
    <>
      <RtoLVector />
      <div className="buycards">
        <section className="tech-about-seo-packages bg-img-pricing">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div>
                  <h5>Pricing Table</h5>
                  <h1>
                    <span>Best SEO </span>Packages
                  </h1>
                  <p>
                    Select the plan according to which meets your requirements
                    to pop on the Google first page
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-package-toggle">
              <div className="col-12 col-lg-5">
                <div className="row">
                  <div className="col-4 col-lg-5">Pay Monthly</div>
                  <div className="col-4 col-lg-2">
                    <label className="switch" htmlFor="checkbox">
                      <input
                        type="checkbox"
                        id="checkbox"
                        checked={isYearly}
                        onChange={() => setIsYearly(!isYearly)}
                      />
                      <div className="slider round"></div>
                    </label>
                  </div>
                  <div className="col-4 col-lg-5">Pay Yearly</div>
                </div>
              </div>
            </div>
            <div className="arrow-image">
              <img
                src="Assets/img/greenarrow.png"
                alt="arrow"
                className="arrow"
              />
              <h4 style={{ color: "#508A95" }}>Save 25%</h4>
            </div>
            {/* new  */}
            <div className="row">
              {pricingData.map((plan, index) => (
                <div
                  className={`col-lg-4 col-12 ${
                    index === 2 ? "col-md-12" : "col-md-6"
                  }`}
                  key={index}
                >
                  <div
                    className="pricing-table-card mx-auto hover"
                    style={{ marginTop: "2rem", marginBlock: "3rem" }}
                  >
                    <h3 className="color-gr">{plan.title}</h3>
                    <p>{plan.description}</p>
                    <h1 className="color-gr">
                      {isYearly ? plan.price * 12 : plan.price} K.D{" "}
                      <span className="color-gr">
                        / {isYearly ? "Year" : "Month"}
                      </span>
                    </h1>
                    <button className="pri-btn">Buy Now</button>
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        className={`pricing-list-row ${
                          (plan.title === "Individual" && featureIndex > 1 ? "red" : "") ||
                          (plan.title === "Professional" && featureIndex > 3 ? "red" : "") ||
                          ""
                        }`}
                        key={featureIndex}
                        onMouseEnter={(e) => e.currentTarget.classList.add("hovered-item")}
                        onMouseLeave={(e) => e.currentTarget.classList.remove("hovered-item")}
                      >
                        <div
                          className={`pricing-list-icon ${
                            (plan.title === "Individual" && featureIndex < 2 ? "bg-greeen" : "") ||
                            (plan.title === "Professional" && featureIndex < 4 ? "bg-greeen" : "") ||
                            (plan.title === "Business" && featureIndex < 6 ? "bg-greeen" : "") ||
                            "bg-light-green"
                          }`}
                        >
                          {plan.title === "Business" && featureIndex < 6 ? (
                            <FiCheck color="#508A95" />
                          ) : plan.title === "Individual" && featureIndex < 2 ? (
                            <FiCheck color="#508A95" />
                          ) : plan.title === "Professional" && featureIndex < 4 ? (
                            <FiCheck color="#508A95" />
                          ) : (
                            <RxCross1 color="#191D23" />
                          )}
                        </div>
                        <div className="pricing-list-text">
                          <p
                            className={
                              (plan.title === "Individual" && featureIndex > 1 ? "red" : "") ||
                              (plan.title === "Professional" && featureIndex > 3 ? "red" : "") ||
                              "black"
                            }
                          >
                            {feature}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="up-toSpace">
        <LtoR />
      </div>
    </>
  );
};

export default Buycards;
