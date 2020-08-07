import React from 'react';
import Navigation from '../Navigation';
import { connect } from 'react-redux'

import RoyalRoad from '../RoyalRoad';

const PersonaPage = (props) => {
  return (
    <div>
      <header className="App-page-header">
        <Navigation target="/equipment" direction="left" text="Back" />
        <h1>Calling, Destiny, & Fate</h1>
        <Navigation target="/relationships" direction="right" text="Next" />
      </header>
      <main className="App-body">
        <div className="App-sublayout">
          <RoyalRoad trait="calling" />
          <RoyalRoad trait="destiny" />
          <RoyalRoad trait="fate" />
        </div>
        <div className="Description"></div>
      </main>
    </div>
  );
}

export default PersonaPage