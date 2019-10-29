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
        <div className="btn-wrap">
          <button type="button">
            <span>Hire Me</span>
            <HireMeIcon />
          </button>
        </div>

        <div className="navbar__nav-links">
          <a href="#aboutme">About me</a>
          <a href="#skills">Skills</a>
          <a href="#myworks">My Works</a>
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
