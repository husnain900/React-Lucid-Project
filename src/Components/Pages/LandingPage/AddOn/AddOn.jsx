import React from 'react';
import { FaCheck } from 'react-icons/fa';
import "./AddOn.css";

function AddOn({ imgSrc, title, description, price }) {
    const items = [
      { text: 'Site Audit' },
      { text: 'Keyword Research' },
      { text: 'Competition Research' },
      { text: 'Blog Post' },
      { text: '1 Da 30+ Guest Posts' },
      { text: '1 Da 30+ Link Insert' },
    ];
  
    return (
      <div className="col-lg-6 col-12 col-md-6">
        <div className='buy-card'>
        <img src={imgSrc} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <h1>${price} <span>/ One time</span></h1>
        <button>Buy Now</button>
        {items.map((item, index) => (
          <div className="pricing-list-row" key={index}>
            <div className="pricing-list-icon">
              <FaCheck />
            </div>
            <div className="pricing-list-text">
              <p>{item.text}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    );
  }
function TechAboutAddsOn() {
  const addsOnData = [
    {
      imgSrc: 'assets/img/image-85.png',
      title: 'Email Marketing',
      description: 'Suitable for Team corporation',
      price: 99,
    },
    {
      imgSrc: 'assets/img/image-86.png',
      title: 'Wordpress Optimization',
      description: 'Suitable for Team corporation',
      price: 199,
    },
   
  ];

  return (
    <section className="tech-about-adds-on">
      <div className="container">
        <h1>Adds <span>On</span></h1>
        <div className="col-lg-8">
          <div className="row adds-on-gap">
            {addsOnData.map((addOn, index) => (
              <AddOn key={index} {...addOn} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechAboutAddsOn;
