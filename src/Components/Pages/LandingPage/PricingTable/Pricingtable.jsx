import React, { useState } from "react";
import "./Pricingtable.css";
import { BsCheck2 } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { FiCheck } from "react-icons/fi";
const pricingData = [
  {
    title: "Beginner",
    description: "Suitable for Individual",
    price: 30,
    features: [
      "Site Audit",
      "Keyword Research",
   // Duplicate to match your HTML structure
      "Competition Research", // Duplicate to match your HTML structure
      "Blog Post", // Duplicate to match your HTML structure
      "1 Da 30+ Guest Posts", // Duplicate to match your HTML structure
      "1 Da 30+ Link Insert"
    ]
  },
  {
    title: "SMB & Local",
    description: "Suitable For 3 members",
    price: 45,
    features: [
      "Site Audit",
      "Keyword Research",
      
      "Competition Research",
      "Blog Post",
      "1 Da 30+ Guest Posts",
      "1 Da 30+ Link Insert"
    ]
  },
  {
    title: "High Growth",
    description: "Suitable for Team",
    price: 70,
    features: [
      "Site Audit",
      "Keyword Research",

      "Competition Research",
      "Blog Post",
      "1 Da 30+ Guest Posts",
      "1 Da 30+ Link Insert"
    ]
  }
];

const PricingTable = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="tech-about-seo-packages">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div>
              <h5>Pricing Table</h5>
              <h1>
                <span>Best SEO </span>Packages
              </h1>
              <p>
                Select the plan according to which meets your requirements to
                pop on the Google first page
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
          <img src="Assets/img/arrow.png" alt="arrow" className="arrow" />
          <h4>Save 25%</h4>
        </div>
        <div className="row">
          {pricingData.map((plan, index) => (
            <div
              className={`col-lg-4 col-12 ${
                index === 2 ? "col-md-12" : "col-md-6"
              }`}
              key={index}
            >
              <div
                className="pricing-table-card mx-auto"
                style={{ marginTop: "2rem" }}
              >
                <h3>{plan.title}</h3>
                <p>{plan.description}</p>
                <h1>
                  {isYearly ? plan.price * 12 : plan.price} K.D{" "}
                  <span>/ {isYearly ? "Year" : "Month"}</span>
                </h1>
                <button>Buy Now</button>
                {plan.features.map((feature, featureIndex) => (
                  <div className="pricing-list-row" key={featureIndex}>
                    <div
                      className={`pricing-list-icon ${
                        (plan.title === "Beginner" && featureIndex < 2
                          ? "bg-green"
                          : "") ||
                        (plan.title === "SMB & Local" && featureIndex < 4
                          ? "bg-green"
                          : "") ||
                        (plan.title === "High Growth" && featureIndex < 6
                          ? "bg-green"
                          : "") ||
                        "bg-light-greeen"
                      }`}
                    >
                      {plan.title === "High Growth" && featureIndex < 6 ? (
                        <FiCheck color="#364163" />
                      ) : plan.title === "SMB & Local" && featureIndex < 4 ? (
                        <FiCheck color="#364163" />
                      ) : plan.title === "Beginner" && featureIndex < 2 ? (
                        <FiCheck color="#364163" />
                      ) : (
                        <RxCross1 color="#191D23" />
                      )}
                    </div>
                    <div className="pricing-list-text">
                      <p
                        className={
                          (plan.title === "Beginner" && featureIndex > 1
                            ? "red"
                            : "") ||
                          (plan.title === "SMB & Local" && featureIndex > 3
                            ? "red"
                            : "") ||
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
  );
};

export default PricingTable;
