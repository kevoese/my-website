import React from 'react';
import Navbar from '../components/Navbar';
import Welcome from '../components/Welcome';
import AboutMe from '../components/AboutMe';
import MyWorks from '../components/MyWorks';

const Main = () => (
  <div>
    <Navbar />
    <Welcome />
    <AboutMe />
    <MyWorks />
  </div>
);

export default Main;
