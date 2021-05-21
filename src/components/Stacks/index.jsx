import React from 'react';
import './Stacks.scss';
import StackList from './StackList';

const Stacks = () => (
  <div className="stacks">
    <h3>Stacks</h3>
    <div className="stacks__wrap">
      <StackList
        stackName="React and React-native"
        score="80"
        imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572104565/react_wii1jw.svg"
      />
      <StackList
        stackName="Redux"
        score="70"
        imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572104565/redux_co340h.svg"
      />
      <StackList
        stackName="AWS Services"
        score="60"
        imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1621627571/1200px-Amazon_Web_Services_Logo.svg_xpf9v1.png"
      />
      <StackList
        stackName="NodeJS"
        score="80"
        imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1572104565/nodejs_abllv9.svg"
      />
      <StackList
        stackName="GraphQL"
        score="65"
        imgLink="https://res.cloudinary.com/dflmq4zxb/image/upload/v1621627190/apollo-graphql-compact_denqlk.svg"
      />
    </div>
  </div>
);

export default Stacks;
