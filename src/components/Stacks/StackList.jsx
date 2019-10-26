import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import ProgressBar from 'react-animated-progress-bar';

const StackList = ({ imgLink, stackName, score }) => (
  <div className="stack-list">
    <ProgressBar width="230" trackWidth="13" percentage={score} />
    <div className="stack-list__name-wrap">
      <img src={imgLink} alt="" />
      <p>{stackName}</p>
    </div>
  </div>
);

export default StackList;
