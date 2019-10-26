import React from 'react';
import './Hamburger.scss';

const Hamburger = ({ close, handleDropdown }) => (
  <div className="hamburger">
    <div
      onClick={() => handleDropdown(!close)}
      className={`hamburger-icon ${close ? 'cut-icon' : ''}`}
    >
      <div className="box box1">
        <div className="first" />
        <div className="last" />
      </div>
      <div className="box box2">
        <div className="first" />
        <div className="last" />
      </div>
      <div className="box box3">
        <div className="first" />
        <div className="last" />
      </div>
      <div className="box box4">
        <div className="first" />
        <div className="last" />
      </div>
    </div>
  </div>

  // <svg
  //   className="hamburger-icon"
  //   width="24"
  //   height="13"
  //   viewBox="0 0 33 16"
  //   fill="none"
  //   xmlns="http://www.w3.org/2000/svg"
  // >
  //   <rect width="4.40367" height="3.66973" fill="#3F3D56" />
  //   <rect x="6.8501" width="25.4434" height="3.66973" fill="#3F3D56" />
  //   <rect y="12.3303" width="4.40367" height="3.66973" fill="#3F3D56" />
  //   <rect
  //     x="6.8501"
  //     y="12.3303"
  //     width="25.4434"
  //     height="3.66973"
  //     fill="#3F3D56"
  //   />
  //   <rect y="6.16516" width="4.40367" height="3.66973" fill="#3F3D56" />
  //   <rect
  //     x="6.8501"
  //     y="6.16516"
  //     width="17.6147"
  //     height="3.66973"
  //     fill="#3F3D56"
  //   />
  // </svg>
);

export default Hamburger;
