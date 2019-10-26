import React from 'react';

const InfoList = ({ label, detail }) => (
  <div className="info-list">
    <strong>{label}</strong>
    <p>{detail}</p>
  </div>
);

export default InfoList;
