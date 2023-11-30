import React from "react";
import "./Seoimportant.css";

const seoContent = [
  {
    title: "In-depth Site Audit",
    description:
      "Full market audit to highlight areas of your website that can be improved, including competitor analysis. Our SEO experts then create a detailed game plan to boost your conversions.",
  },
  {
    title: "Traffic Mapping",
    description:
      "We carry out in-depth market research to identify the type of traffic you need and boost conversions. By doing this, you'll get a high volume of qualified traffic, compared to using a scatter-gun approach.",
  },
  {
    title: "Technical Optimization",
    description:
      "We make sure that every detail on your website is optimized to get the best SEO and conversion results. We do things like A/B split-testing call-to-action buttons and editing the meta-descriptions to ensure everything is primed and ready to convert.",
  },
];

const Seoimportant = () => {
  return (
    <div>
      <section className="tech-about-seo-importance">
        <div className="row">
          <div className="col-lg-6 col-12 p-0">
            <div className="left-content">
              <h1 className="text-center text-lg-start text-md-start">
                Why is <span>SEO important?</span>
              </h1>
              {seoContent.map((content, index) => (
                <div key={index}>
                  <h5>{content.title}</h5>
                  <p>{content.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className="col-lg-6 col-12"
            style={{ backgroundColor: "rgba(149, 167, 251, 0.1)" }}
          >
            <div className="right">
              <div className="right-content">
                <p>
                  Choose our hands-free SEO packages and sky-rocket your online
                  business with free traffic from Google.
                </p>
                <form>
                  {["Name", "Address", "Phone Number", "Website"].map(
                    (placeholder, index) => (
                      <div className="mb-3" key={index}>
                        <input
                          type="text"
                          className="form-control"
                          placeholder={placeholder}
                          id="input"
                        />
                      </div>
                    )
                  )}
                  <button type="submit" className="btn btn-primary submit-btn">
                    Get Quote Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Seoimportant;
