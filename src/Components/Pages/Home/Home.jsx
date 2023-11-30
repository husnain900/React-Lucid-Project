import React from "react";
import Banner from "./Bannar/Bannar";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";
import Contact from "./Contact/Contact";
import "../Responsive.css";
import RtoLRound from "../../UI-Style/RtoLRound";

const Home = () => {
  return (
    <div>
      <Banner />
      <RtoLRound />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
