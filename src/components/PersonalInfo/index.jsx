import React from 'react';
import './PersonalInfo.scss';
import InfoList from './InfoList';

const PersonalInfo = () => (
  <div className="personal-info">
    <img
      src="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572092734/IMG_20190730_071419_6_jeeoos.jpg"
      alt=""
    />
    <div className="personal-info__bio flex-center">
      <div className="personal-info__bio__wrap">
        <InfoList label="Name:" detail="Kelvin Esegbona" />
        <InfoList label="Github:" detail="kevoese" />
        <InfoList label="Address:" detail="Lagos, Nigeria" />
        <InfoList label="Hobbies:" detail="Pencil drawing, playing video games, football" />
      </div>
    </div>
  </div>
);

export default PersonalInfo;
