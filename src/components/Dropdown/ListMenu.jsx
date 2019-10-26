import React from 'react';

const ListMenu = ({ icon, text }) => (
  <li className="list-menu">
    <span>{text}</span>
    {icon}
  </li>
);

export default ListMenu;
