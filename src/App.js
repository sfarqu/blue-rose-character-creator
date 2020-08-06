import React, { Component } from 'react';
import './App.css';
import RollSet from './RollSet';
import Attribute from './Attribute'
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './Navigation';
import BigButton from './BigButton';
import { FocusBrief, FocusSelector } from './Focus';
import Focuses from './systemData/focuses';
import Backgrounds from './systemData/backgrounds';
import Races from './systemData/races';
import { BenefitsSelector } from './Benefits'

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

const allRaces = Races
const allBackgrounds = Backgrounds
const allFocuses = Focuses

const attributesTable = [-2,-2,-2,-2,-1,-1,0,0,0,1,1,1,2,2,2,3,3,3,4]

class PrimaryLayout extends Component {
  render() {
    return(
      <div className="App">
        <Route path="/" exact component={HomePage} />
        <Route path="/attributes" render={(routeProps) => (
          <AttributesPage {...routeProps} {...this.props} />
        )} />
        <Route path="/race" exact render={(routeProps) => (
          <RacePage {...routeProps} {...this.props} />
        )} />
        <Route path={`/race/:raceId`} render={(routeProps) => (
          <RaceDetails {...routeProps} {...this.props} />
        )} />
    </div>
    )
  }
}

const HomePage = () => {
  return(
    <div>
      <header className="App-header">
        <h1>Blue Rose Character Creator</h1>
      </header>
      <main className="App-body">
        <div></div>
          <div><a href="/attributes" className="button">Create Character</a></div>
        <div></div>
        
      </main>
    </div>
  )
}

class AttributesPage extends Component {

  updateAttributes(values) {
    let newChar = JSON.parse(JSON.stringify(this.props.character))
    values.forEach((value, index) => {
      let stat = attributesTable[value];
      newChar.attributes[index].value = stat;
    })
    this.props.update(newChar)
  }

  render() {
    const attrs = this.props.character.attributes.map(value => <Attribute name={value.name} value={value.value} max={3} min={0} />);
    return (
      <div>
        <header className="App-page-header">
          <Navigation target="/" direction="left" text="Back" />
          <h1>Attributes</h1>
          <Navigation target="/race" direction="right" text="Next" />
        </header>
        <main className="App-body">
            <RollSet numberOfRolls={9} numberOfDice={3} callback={(vals) => this.updateAttributes(vals)} />
          <div className="Attributes">
            <div> </div>
            <div>
              {attrs}
            </div>
            <div> </div>
          </div>
        </main>
      </div>
    );
  }
}

const RacePage = (props) => {
  const races = Object.entries(allRaces).map(value => <BigButton name={value[1].name} target={'/race/'+value[0]} height="tall" />);

  return (
    <div>
      <header className="App-page-header">
        <Navigation target="/attributes" direction="left" text="Back" />
        <h1>Race</h1>
        <Navigation target="/background" direction="right" text="Next" />
      </header>
      <main className="App-body">
        <div className="Race">
          {races}
        </div>
        <div className="Description"></div>
      </main>
    </div>
  );
}

const RaceDetails = (props) => {
  const focuses = allRaces[props.match.params.raceId].base.focus.map((value) => allFocuses[value]);
  const attrs = character.attributes.map(value => <Attribute name={value.name} value={value.value} />);
  return(
    <div>
    <header className="App-page-header">
      <Navigation target="/race" direction="left" text="Back" />
      <h1>{props.match.params.raceId}</h1>
      <Navigation target="/background" direction="right" text="Next" />
    </header>
    <main className="App-body">
      <div className="Race">
          <div>
            {attrs}
          </div>
        <div>
        <FocusSelector focuses={focuses} />
        <BenefitsSelector benefits={allRaces[props.match.params.raceId].benefits} />
        </div>
      </div>
      <div className="Description"></div>
    </main>
    </div>
)};

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      character: character
    }
  }

  updateCharacter(newChar) {
    this.setState({
      character: newChar
    })
  }

  render() {
    return (
      <BrowserRouter>
        <PrimaryLayout character={this.state.character} update={(char) => this.updateCharacter(char)} />
      </BrowserRouter>
    );
  }
}

export default App;
