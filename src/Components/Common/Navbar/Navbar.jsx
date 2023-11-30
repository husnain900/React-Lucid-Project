import React, { useState } from "react";
import "./Navbar.css";
import { FaInstagram, FaArrowRight } from "react-icons/fa";
import { PiGooglePlayLogoLight } from "react-icons/pi";
import { AiFillHome } from "react-icons/ai";
import { Navbar, Nav, Button } from "react-bootstrap";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
// import SelectFlag from "../../UI-Style/SelectFlag";
const EnglishImg = "Assets/img/usa.svg"; 
const ArabicImg = "Assets/img/kawait.png"; 
const DollarImage = "Assets/img/doller.svg"; 

const Header = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const [isNavOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const getLanguageImage = () => {
    return selectedLanguage === "English" ? EnglishImg : ArabicImg;
  };

  const getPageIcon = () => {
    if (activeLink === "Pricing") {
      return <img src={DollarImage} alt="Dollar" />;
    } else {
      return <AiFillHome />;
    }
  };

  const navItems = [
    { text: "Home", path: "/", id: "Home" },
    { text: "Services", path: "/LandingPage", id: "Services" },
    { text: "Portfolio", path: "/Pricing", id: "Pricing" },
    { text: "Testimonial", path: "/", id: "Testimonial" },
    { text: "About", path: "/", id: "About" },
    { text: "Contact", path: "/", id: "Contact" }
  ];

  return (
    <header className="tech-header">
      <div className="tech-nav-top-bar">
        <div className="container">
          <a href="/">
            <PiGooglePlayLogoLight />
          </a>
          <a href="/">
            <img src="Assets/img/AppStore_.svg" alt="" srcSet="" />
          </a>
          <a href="/">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="container">
        <Navbar className="bg-body-tertiary" expand="lg" variant="dark">
          <Navbar.Brand href="/">{getPageIcon()}</Navbar.Brand>
          <FiMenu
            aria-controls="navbarScroll"
            onClick={toggleNav}
            className="custom-toggler d-block d-lg-none"
            style={{ marginRight: "2rem", fontSize: "2rem" }}
          />
          <Navbar.Collapse
            id="navbarScroll"
            className={isNavOpen ? "show" : "justify-content-between"}
          >
            <Nav
              className="mr-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ "--bs-scroll-height": "200px" }}
            >
              {navItems.map((navItem) => (
                <Nav.Item key={navItem.id}>
                  <Link
                    to={navItem.path}
                    className={`nav-link ${
                      activeLink === navItem.id ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick(navItem.id)}
                  >
                    {navItem.text}
                  </Link>
                </Nav.Item>
              ))}
            </Nav>
            <form className="d-flex" role="search">
              <div className="custom-select">
                <img
                  className={`position-absolute top-50 translate-middle-y ms-3 mt-1 d-none d-md-block d-lg-block ${
                    selectedLanguage === "Arabic" ? "small-flag" : ""
                  }`}
                  src={getLanguageImage()}
                  alt=""
                />
                <select
                  name="selectedLanguage"
                  value={selectedLanguage}
                  onChange={handleLanguageChange}
                  className="Option-list ps-2 ps-lg-5"
                >
                  <option value="English" data-image="Assets/img/usa.svg">English</option>
                  <option value="Arabic"><AiFillHome/> Arabic</option>
                </select>
              </div>
              <Button
                variant="outline-success"
                type="submit"
                className="d-flex align-items-center justify-content-between ps-4"
              >
                <h6 className="pt-2"> Get A Quote </h6>
                <div className="circle-box">
                  <FaArrowRight />
                </div>
              </Button>
            </form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
