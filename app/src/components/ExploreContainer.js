import React from 'react';
import './ExploreContainer.css';
import Meter from './Meter';

const ExploreContainer = () => {
  return (
    <div className="">
      <Meter health="72" happiness="60" hunger="80" />
    </div>
  );
};

export default ExploreContainer;
