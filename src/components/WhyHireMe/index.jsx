import React, { useRef } from 'react';
import './WhyHireMe.scss';
import useContentInView from '../../CustomHook/useContentInView';

const WhyHireMe = () => {
  const teamPlayerSectRef = useRef();
  const creativeSectRef = useRef();
  const creativeSect = useContentInView(creativeSectRef);
  const teamPlayerSect = useContentInView(teamPlayerSectRef);

  return (
    <div className="why-hire-me">
      <h2 className="why-hire-me__title">Why Hire Me?</h2>
      <div className="why-hire-me__illustration-wrap">
        <div ref={creativeSectRef} className={`why-hire-me__illustration-wrap__section creative-thinker ${creativeSect && 'creative-sect-animate'}`}>
          <div className="why-hire-me__illustration-wrap__section__info">
            <h2>Creativity</h2>
            <p>Build web apps with innovative and creative approach</p>
          </div>
          <img
            src="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572117896/Creative_thinking_ahsq9k.svg"
            alt=""
          />
        </div>
        <div ref={teamPlayerSectRef} className={`why-hire-me__illustration-wrap__section team-player ${teamPlayerSect && 'team-player-animate'}`}>
          <img
            src="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572117898/Team_player_ibudxe.svg"
            alt=""
          />
          <div className="why-hire-me__illustration-wrap__section__info">
            <h2>Team Player</h2>
            <p>Display good collaboration skill when working in a team</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyHireMe;
