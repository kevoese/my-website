/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

const ProjectDiv = ({ imgLink, appLink }) => (
  <a
    href={appLink}
    className="project-div"
    style={{
      background: `url(${imgLink}) no-repeat center`,
      backgroundSize: 'cover',
    }}
  />
);

export default ProjectDiv;
