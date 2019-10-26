import React from 'react';
import './Dropdown.scss';
import ListMenu from './ListMenu';
import ContactIcon from '../../assets/ContactIcon';
import UserIcon from '../../assets/UserIcon';
import ProjectsIcon from '../../assets/ProjectsIcon';
import SkillsIcon from '../../assets/SkillsIcon';

const Dropdown = ({ close }) => (
  <div className={`dropdown ${close ? 'dropdown__open' : ''}`}>
    <div className="dropdown__nav-arrow-wrap">
      <ListMenu text="About Me" icon={UserIcon()} />
      <ListMenu text="Skills" icon={SkillsIcon()} />
      <ListMenu text="My Works" icon={ProjectsIcon()} />
      <ListMenu text="Contact" icon={ContactIcon()} />
    </div>
  </div>
);

export default Dropdown;
