import React from "react";
import LandingBannar from "./LandingBannar/Landingbannar";
import Seo from "./Seo/Seo";
import SeoServices from "./SeoServices/Seoservices";
import SeoImportant from "./SeoImportant/Seoimportant";
import OurProgress from "./OurProgress/Ourprogress";
import PricingTable from "./PricingTable/Pricingtable";
import Contact from "../Home/Contact/Contact";

const Landing = () => {
  return (
    <div className="overflow-hidden">
      <LandingBannar />
      <Seo />
      <SeoServices />
      <SeoImportant />
      <OurProgress />
      <PricingTable />
      <Contact />
    </div>
  );
};

export default Landing;
