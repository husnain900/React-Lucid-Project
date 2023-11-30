import React from "react";
import "./Ourprogress.css";

const workData = [
  {
    imgSrc: "assets/img/work1.png",
    title: "Control your payments",
    description:
      "Control and management of payment of all services with our proper pricing subscriptions"
  },
  {
    imgSrc: "assets/img/work2.png",
    title: "Fast communication",
    description:
      "Communication system for meeting appointments to get to know what needs to be clear"
  },
  {
    imgSrc: "assets/img/work3.png",
    title: "Skyrocket your website",
    description:
      "Easy management of all features of your property. Members, Tenants, Documents, Accounting, Contracts, Suppliers, Invoices, and all documents"
  },
  {
    imgSrc: "assets/img/work4.png",
    title: "Add-ons +",
    description:
      "Building Manager, Condominium Manager, Commercial Property Manager, Apartment Manager, HOA Manager"
  }
];

const WorkWithUs = () => {
  return (
    <section className="tech-about-work-with-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h5>Our Progress</h5>
            <h1>
              Why <span>work</span> with us ?
            </h1>
            <p>A quick preview of the work quality we are offering</p>
          </div>
        </div>
        <div className="row mt-work">
          {workData.map((work, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-12">
              <div className="card-progres" style={{ marginTop: "3rem" }}>
                <div className="about-work-card-img">
                  <img
                    className="position-absolute top-0 start-50 translate-middle"
                    src={work.imgSrc}
                    alt={`Work ${index + 1}`}
                    id="color-img"
                  />
                </div>
                <div className="card-body mt-5 mt-lg-0" style={{ marginTop: "1rem" }}>
                  <h5 className="card-title">{work.title}</h5>
                  <p className="card-text">{work.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
