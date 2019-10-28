import React from 'react';
import Navbar from '../components/Navbar';
import Welcome from '../components/Welcome';
import AboutMe from '../components/AboutMe';
import MyWorks from '../components/MyWorks';
import WhyHireMe from '../components/WhyHireMe';
import Footer from '../components/Footer';
import ContactMe from '../components/ContactMe';
import { withStore } from '../Context/WithStore';
import ToastMessage from '../components/ToastMessage';

const Main = () => (
  <div>
    <ToastMessage />
    <Navbar />
    <Welcome />
    <AboutMe />
    <MyWorks />
    <WhyHireMe />
    <ContactMe />
    <Footer />
  </div>
);

export default withStore(Main);
