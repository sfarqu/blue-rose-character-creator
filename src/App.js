import React from 'react';
import './App.css';
import RollSet from './RollSet';
import { BrowserRouter, Route } from 'react-router-dom';

let character = {
  name: null,
  attributes: [
    {
      name: "accuracy",
      value: null
    },
    {
      name: "communication",
      value: null
    },
    {
      name: "constitution",
      value: null
    },
    {
      name: "dexterity",
      value: null
    },
    {
      name: "fighting",
      value: null
    },
    {
      name: "intelligence",
      value: null
    },
    {
      name: "perception",
      value: null
    },
    {
      name: "strength",
      value: null
    },
    {
      name: "willpower",
      value: null
    },
  ],
  race: null,
  background: null,
  class: null,
  focuses: {},
  arcana: {},
  talents: {},
  weapons: {},
  relationships: [{
    name: null,
    intensity: null,
    bond: null
  }],
  powers: {},
  specializations: {},
  speed: {},
  defense: null,
  armor: {},
  health: null,
  fatigue: null,
  level: null,
  persona: {
    calling: null,
    destiny: null,
    fate: null,
    corruption: null,
    goals: {}
  },
  gear: {},
  items: {},
  titles: {}
};

const PrimaryLayout = () => (
  <div className="App">
    <header className="App-header">
      <h1>Character Creator</h1>
    </header>
    <main className="App-body">
      <Route path="/" exact component={HomePage} />
      <Route path="/attributes" component={AttributesPage} />
    </main>
  </div>
)

const HomePage = () => {
  return(
        <button>Create Character</button>
  )
}

const AttributesPage = () => {
  return(<RollSet numberOfRolls={9} numberOfDice={3} />)
}

function App() {
  return (
    <BrowserRouter>
      <PrimaryLayout />
    </BrowserRouter>
  );
}

export default App;
