import React from 'react';
import './Stacks.scss';
import StackList from './StackList';

const Stacks = () => (
  <div className="stacks">
    <h3>Stacks</h3>
    <div className="stacks__wrap">
      <StackList
        stackName="React"
        score="75"
        imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572104565/react_wii1jw.svg"
      />
      <StackList
        stackName="Redux"
        score="70"
        imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572104565/redux_co340h.svg"
      />
      <StackList
        stackName="Angular"
        score="45"
        imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572104565/angular_zbkgrg.svg"
      />
      <StackList
        stackName="Node"
        score="65"
        imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572104565/nodejs_abllv9.svg"
      />
      <StackList
        stackName="Webpack"
        score="80"
        imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572104565/webpack_euqggc.svg"
      />
    </div>
  </div>
);

export default Stacks;
