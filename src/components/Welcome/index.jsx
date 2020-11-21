import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import DeveloperSvg from '../../assets/DeveloperSvg';
import './Welcome.scss';

const Welcome = () => (
  <div className="welcome">
    <DeveloperSvg />
    <div className="welcome__info">
      <TypeWriterEffect
        textStyle={{ fontFamily: 'Salsa', color: '#3F3D56' }}
        cursorColor="#3F3D56"
        text="Hi, I am Kelvin Esegbona."
        hideCursorAfterText
        startDelay={1000}
        typeSpeed={40}
      />
      <TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: '#3F3D56',
          fontWeight: 400,
          fontSize: '1.5em',
        }}
        startDelay={5000}
        cursorColor="#3F3D56"
        multiText={[
          'Hey there, Welcome to hire me.',
          'I\'m a Software Engineer...',
          'A Freelancer available for hiring...',
          'I\'m good at problem solving...',
          'A creative designer...',
          'A Team Player',
          'To get my service, reach out to me now.',
        ]}
        multiTextDelay={3000}
        typeSpeed={80}
      />
    </div>
  </div>
);

export default Welcome;
