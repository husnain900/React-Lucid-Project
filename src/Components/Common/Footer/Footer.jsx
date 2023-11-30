import React from "react";
import { FaInstagram } from "react-icons/fa";
import { PiGooglePlayLogoLight } from "react-icons/pi";
import "./Footer.css";

const Footer = () => {
  const menuItems = [
    {
      title: "Product",
      links: ["Features", "Case studies", "Reviews", "Updates"],
    },
    {
      title: "Company",
      links: ["About", "Contact", "Careers", "Culture"],
    },
    {
      title: "Support",
      links: [
        "Getting Started",
        "Help Center",
        "Server Status",
        "Report A Bug",
        "Chat Support",
      ],
    },
  ];

  return (
    <footer className="tech-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="text-1">
              We believe that the best ideas come from collaboration, which is
              why we work closely with our clients to understand their goals and
              aspirations.
            </p>
          </div>
        </div>
        <div
          className="row footer-middle-br"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="col-lg-6">
            <div className="row">
              {menuItems.map((menu, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <h2>{menu.title}</h2>
                  <ul>
                    {menu.links.map((link, subIndex) => (
                      <li key={subIndex}>
                        <a href="/">{link}</a>
                      </li>
                    ))}
                  </ul>
                  <hr className="border-white d-block d-lg-none d-md-none" />
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mt-md-4 mt-0 mt-lg-0 ">
            <h2>Subscribe to our newsletter</h2>
            <div className="footer-newsletter-field-block">
              <form action="" method="">
                <input placeholder="Enter your email..." type="text" name="" />
                <button>Subscribe</button>
              </form>
            </div>
            <div>
              <span className="logo-text">Certified by</span>
              <div className="img-under-foot">
                <img
                  className="d-none d-lg-block d-md-block md-size"
                  src="Assets/img/size%20optimization/Untitled-2%202.svg"
                  alt=""
                />
                <img
                  className="d-none d-lg-block d-md-block md-size"
                  src="Assets/img/size%20optimization/111 2.svg"
                  alt=""
                />
                <img
                  className="d-block d-lg-none d-md-none md-size"
                  src="Assets/img/size%20optimization/111%203.svg"
                  alt=""
                />
                <img
                  className="d-block d-lg-none d-md-none md-size"
                  src="Assets/img/size%20optimization/Untitled-2%203.svg"
                  alt=""
                />
                <img
                  className="w-100 d-none d-lg-block d-md-none"
                  src="Assets/img/size%20optimization/370x74%20px%20PNG%20&%20SVG%20Both%20in%20this%20Folder/370x%2074%20SVG.svg"
                  alt=""
                />
                <img
                  className="d-block d-lg-none d-md-block "
                  src="Assets/img/size%20optimization/370x74%20px%20PNG%20&%20SVG%20Both%20in%20this%20Folder/370x%2074%20SVG.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-0 mt-lg-4 mt-0 mt-md-4 align-items-center">
          <div className="col-12 col-lg-9 col-md-8 p-2 ">
            <p className="mb-4 mb-md-0 mb-lg-0">
              Copyright @ 2023 Lucid | All Rights Reserved
            </p>
          </div>
          <div className="col-12 col-md-4 col-lg-3 px-5 px-md-0 px-lg-0 col-lg-3 footer-bottom-section-col-2">
            <div className="footer-icon">
              <a href="/">
                <FaInstagram />
              </a>
              <a href="/">
                <img src="Assets/img/AppStore_.svg" alt="" srcset="" />
              </a>
              <a href="/">
                <PiGooglePlayLogoLight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
