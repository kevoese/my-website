import React from 'react';
import Lottie from 'react-lottie-player';
import lottieJson from './developerLottie.json';

const NewDeveloperImg = () => (
  <Lottie
    loop
    animationData={lottieJson}
    play
    className="developer-svg-icon"
    // style={{ width: 800, height: 800 }}
  />
);

export default NewDeveloperImg;
