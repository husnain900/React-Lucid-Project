import React from 'react';
import './Seoservices.css';

const SEOServices = () => {
    const seoServiceData = [
        {
            imgSrc: 'assets/img/seo-sevice1.png',
            title: 'In-depth Site Audit',
            description: 'Full market audit to highlight areas of your website that can be improved, including competitor analysis. Our SEO experts then create a detailed game plan to boost your conversions.',
        },
        {
            imgSrc: 'assets/img/seo-sevice2.png',
            title: 'Traffic Mapping',
            description: 'We carry out in-depth market research to identify the type of traffic you need and boost conversions. By doing this, you\'ll get a high volume of qualified traffic, compared to using a scatter-gun approach.',
        },
        {
            imgSrc: 'assets/img/seo-sevice3.png',
            title: 'Technical Optimization',
            description: 'We make sure that every detail on your website is optimized to get the best SEO and conversion results. We do things like A/B split-testing call-to-action buttons and editing the meta-descriptions to ensure everything is primed and ready to convert.',
        },
        {
            imgSrc: 'assets/img/seo-sevice4.png',
            title: 'Technical Improvements',
            description: 'The next step is to sort out any technical issues that may create a high bounce rate - slow page loading, unreliable uptime service, poorly designed UX, etc. Our SEO techs are the best in the business and know how to optimize your site quickly and efficiently.',
        },
        {
            imgSrc: 'assets/img/seo-sevice5.png',
            title: 'Keyword Mapping',
            description: 'Our SEO experts know exactly how to find keywords that move the needle. We don\'t just go for the highest search volume keywords, although these are important to include. We also ensure that we include niche-specific keywords to attract the right people to your site.',
        },
        {
            imgSrc: 'assets/img/seo-sevice6.png',
            title: 'Penalty Prevention',
            description: 'There\'s nothing more devastating to your results than receiving a penalty. We\'ve helped hundreds of companies recover from other link builders penalties and set them back on the path of success.',
        },
    ];

    return (
        <>
            <section className="tech-about-seo-services">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h5>Services</h5>
                            <h1><span>SEO</span> Services</h1>
                            <p>A quick preview of our Incredible Search Engine Optimization Services World Wide</p>
                        </div>
                        {seoServiceData.map((service, index) => (
                            <div key={index} className="col-12 col-lg-4 col-md-6">
                                <div className="card">
                                    <div className="about-seo-service-card-img">
                                        <img src={service.imgSrc} alt={`SEO Service ${index + 1}`} />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{service.title}</h5>
                                        <p className="card-text">{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
};

export default SEOServices;
