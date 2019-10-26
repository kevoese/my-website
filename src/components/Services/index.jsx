import React from 'react';
import './Services.scss';
import ServiceList from './ServiceList';

const Services = () => (
  <div className="services">
    <h2>Services I can offer</h2>
    <div className="service-list-wrap">
      <ServiceList
        imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572096810/webDevelopment_csu2tw.svg"
        serviceType="Web Development"
      />
      <ServiceList
        imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572096810/webDesign_xygno1.svg"
        serviceType="Web Design"
      />
      <ServiceList
        imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572096810/webServer_gebmxh.svg"
        serviceType="Web Servers"
      />
    </div>
  </div>
);

export default Services;
