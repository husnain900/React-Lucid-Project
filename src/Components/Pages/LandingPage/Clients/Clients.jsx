import React from 'react';
import { FaUser } from 'react-icons/fa'; // Import the user icon
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css'; // Import Owl Carousel CSS
import 'owl.carousel/dist/assets/owl.theme.default.css'; // Import Owl Carousel default theme CSS
import './Clients.css'; // Import your custom CSS for styling

function Testimonial() {
  const options = {
    loop: true,
    margin: 10,
    responsiveClass: true,
    navText: [
      <FaUser key="left" />,
      <FaUser key="right" />,
    ], // Use React icons here
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: true,
        loop: false,
      },
    },
  };

  return (
    <section className="tech-about-testimonial">
      <div className="container">
        <div className="container2">
          <OwlCarousel className="owl-carousel" {...options}>
            <div className="row testimonial-gap">
              <div className="col-lg-5">
                <img src="assets/img/T-person.png" alt="Client 1" />
              </div>
              <div className="col-lg-7">
                <h1>
                  What our <span>clients</span> are saying
                </h1>
                <p>
                  This is due to their excellent service, competitive pricing
                  and customer support. It’s thoroughly refreshing to get such
                  a personal touch. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <h5>Delila Rayam</h5>
              </div>
            </div>
            <div className="row testimonial-gap">
              <div className="col-lg-5">
                <img src="assets/img/T-person.png" alt="Client 2" />
              </div>
              <div className="col-lg-7">
                <h1>
                  What our <span>clients</span> are saying
                </h1>
                <p>
                  This is due to their excellent service, competitive pricing
                  and customer support. It’s thoroughly refreshing to get such
                  a personal touch. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <h5>Delila Rayam</h5>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
