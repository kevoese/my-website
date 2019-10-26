import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import ProgressBar from 'react-animated-progress-bar';

const LanguageList = ({ score, name }) => (
  <div className="language-list">
    <p>{name}</p>
    <ProgressBar
      width="100%"
      height="0.5em"
      rect
      fontColor="#3F3D56"
      percentage={score}
      rectPadding="0px"
      rectBorderRadius="20px"
      trackPathColor="#D9D9D9"
      bgColor="#333333"
      trackBorderColor="#D9D9D9"
    />
  </div>
);

export default LanguageList;
