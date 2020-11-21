import React from 'react';
import './AboutMe.scss';
import PersonalInfo from '../PersonalInfo';
import Services from '../Services';
import Languages from '../Languages';
import Stacks from '../Stacks';

const AboutMe = () => (
  <div className="about-me" id="aboutme">
    <h1 className="about-me__title">About Me</h1>
    <div className="about-me__sect-1">
      <PersonalInfo />
      <Services />
    </div>
    <div className="about-me__sect-2" id="skills">
      <h2>My Skills</h2>
      <Languages />
      <Stacks />
    </div>
  </div>
);

export default AboutMe;
