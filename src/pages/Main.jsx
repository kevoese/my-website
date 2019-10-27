import React from 'react';
import Navbar from '../components/Navbar';
import Welcome from '../components/Welcome';
import AboutMe from '../components/AboutMe';
import MyWorks from '../components/MyWorks';
import WhyHireMe from '../components/WhyHireMe';

const Main = () => (
  <div>
    <Navbar />
    <Welcome />
    <AboutMe />
    <MyWorks />
    <WhyHireMe />
  </div>
);

export default Main;
