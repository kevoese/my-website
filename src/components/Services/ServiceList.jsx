import React from 'react';

const serviceList = ({ imgLink, serviceType }) => (
  <div className="service-list flex-center">
    <img src={imgLink} alt="" />
    <h3>{serviceType}</h3>
  </div>
);

export default serviceList;
