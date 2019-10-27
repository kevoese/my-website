import React from 'react';
import './WhyHireMe.scss';

const WhyHireMe = () => (
  <div className="why-hire-me">
    <h2 className="why-hire-me__title">Why Hire Me?</h2>
    <div className="why-hire-me__section creative-thinker">
      <div className="why-hire-me__section__info">
        <h2>Creativity</h2>
        <p>Build web apps with inovative and creative approach</p>
      </div>
      <img
        src="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572117896/Creative_thinking_ahsq9k.svg"
        alt=""
      />
    </div>
    <div className="why-hire-me__section team-player">
      <img
        src="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572117898/Team_player_ibudxe.svg"
        alt=""
      />
      <div className="why-hire-me__section__info">
        <h2>Team Player</h2>
        <p>Display good collaboration skill when working in a team</p>
      </div>
    </div>
  </div>
);

export default WhyHireMe;
