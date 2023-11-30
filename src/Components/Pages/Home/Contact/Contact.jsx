import React from "react";
import "./Contact.css"; // Import your CSS file
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import RtoLVector from "../../../UI-Style/RtoLVector";

const contactInfo = [
  {
    title: "Location",
    content: "18, Sahab Tower, Salhiya, Kuwait City.",
    icon: <FaMapMarkerAlt />
  },
  {
    title: "Email",
    content: "Info@Lucid.com.kw",
    icon: <FaEnvelope />
  },
  {
    title: "Call",
    content: "+965 22273847",
    icon: <BsFillTelephoneFill />
  }
];

const Contact = () => {
  return (
    <>
      <RtoLVector />
      <section className="contact">
        <div className="container">
          <div className="conatct-sub-section">
            <div className="contact-form-heading">
              <h1>Contact info</h1>
            </div>
            <div className="row">
              <div className="col-12 col-md-4 col-lg-4">
                <div className="">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="d-flex align-items-center gap-3 mt-2 down"
                    >
                      <div className="tech-contact-about-icon">{info.icon}</div>
                      <div className="tech-contact-about-text">
                        <h5>{info.title}</h5>
                        <p>{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-12 col-lg-8 col-md-8">
                <div className="row">
                  <div className="col-12">
                    <input
                      type="text"
                      name=""
                      placeholder="Your Company / Business Name"
                    />
                  </div>
                  <div className="col-12 col-md-6 col-lg-6">
                    <input type="text" name="" placeholder="Your Name" />
                  </div>
                  <div className="col-12 col-md-6 col-lg-6">
                    <input type="text" name="" placeholder="Your Email" />
                  </div>
                  <div className="col-12">
                    <input type="text" name="" placeholder="Phone Number" />
                  </div>

                  <div className="col-12">
                    <input type="text" name="" placeholder="Subject" />
                  </div>
                  <div className="col-12">
                    <textarea
                      placeholder="Write your message..."
                      s="5"
                    ></textarea>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      width: "60%",
                      marginTop: "1rem"
                    }}
                  >
                    <div
                      style={{
                        width: "30%"
                      }}
                    >
                      <input
                        type="submit"
                        className="btn btn-success contact-submint"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
