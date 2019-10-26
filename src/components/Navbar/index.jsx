import React, { useState } from 'react';
import HireMeIcon from '../../assets/HireMeIcon';
import './Navbar.scss';
import Hamburger from '../Hamburger';
import Dropdown from '../Dropdown';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const handleDropdown = (state) => {
    setDropdown(state);
  };
  return (
    <div className="navbar-wrap">
      <div className="navbar">
        <button type="button">
          <span>Hire Me</span>
          <HireMeIcon />
        </button>
        <div className="navbar__nav-links">
          <span>About me</span>
          <span>Skills</span>
          <span>My Works</span>
          <span>Contact</span>
        </div>
        <Hamburger close={dropdown} handleDropdown={handleDropdown} />
      </div>
      <div className="dropdown-wrap">
        <Dropdown close={dropdown} />
      </div>
    </div>
  );
};

export default Navbar;
