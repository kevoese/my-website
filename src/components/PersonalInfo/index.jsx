import React from 'react';
import './PersonalInfo.scss';
import InfoList from './InfoList';

const PersonalInfo = () => (
  <div className="personal-info">
    <img
      src="https://res.cloudinary.com/dflmq4zxb/image/upload/v1621626984/20210411_154951_kbekz1.jpg"
      alt=""
    />
    <div className="personal-info__bio flex-center">
      <div className="personal-info__bio__wrap">
        <InfoList label="Name:" detail="Kelvin Esegbona" />
        <InfoList label="Github:" detail="kevoese" />
        <InfoList label="Address:" detail="Lagos, Nigeria" />
        <InfoList label="Hobbies:" detail="⚽️  Sports,   Code  👨🏾‍💻" />
      </div>
    </div>
  </div>
);

export default PersonalInfo;
