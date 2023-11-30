import React from "react";
import "./Landingbannar.css";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import "../../../Pages/Responsive.css";

const TechAboutBanner = () => {
  return (
    <section className="landing-bg-img">
      <div className="tech-about-banner">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-12">
            <div className="land-content">
              <h1>
                Grow Your Business with <br /> Organic <span>Free Traffic</span>
              </h1>
              <p>
                People are searching for the services and products you sell. Is
                your website on the front page of Google to be found?
              </p>
              <p>
                Choose our hands-free SEO packages and skyrocket your online
                business with free traffic from Google.
              </p>
              <button>Get Started</button>
              <div className="d-flex align-items-center gap-15">
                <div className="icons-banner">
                  <a href="/">
                    <FaInstagram />
                  </a>
                </div>
                <div className="icons-banner">
                  <a href="/">
                    <img src="Assets/img/Vector.png" alt="" />
                  </a>
                </div>
                <div className="icons-banner">
                  <a href="/">
                    <BiLogoPlayStore />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-12">
            <img
              src="assets/img/about-banner.png"
              alt="About Banner"
              className="banner-image mt-5 mt-lg-0 mt-md-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechAboutBanner;
