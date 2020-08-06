import React, { Component } from 'react';
import './App.css';
import RollSet from './RollSet';
import Attribute from './Attribute'
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './Navigation';
import BigButton from './BigButton';
import { FocusSelector } from './Focus';
import Focuses from './systemData/focuses';
import Backgrounds from './systemData/backgrounds';
import Races from './systemData/races';
import Talents from './systemData/talents';
import Classes from './systemData/classes';
import { BenefitsSelector } from './Benefits'
import { TalentSelector } from './Talent';
import { PowerList } from './Power';
import RoyalRoad from './RoyalRoad';
import Weapons from './systemData/weapons';

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
const allTalents = Talents
const allClasses = Classes

const attributesTable = [-2,-2,-2,-2,-1,-1,0,0,0,1,1,1,2,2,2,3,3,3,4]

const allArmor = [
  {
    name: "None",
    rating: 0,
    penalty: 0
  },
  {
    name: "Light",
    rating: 3,
    penalty: 0
  },
  {
    name: "Medium",
    rating: 5,
    penalty: -2
  },
  {
    name: "Heavy",
    rating: 8,
    penalty: -4
  },
]

const allShields = [
  {
    name: "None",
    bonus: 0,
    trainedBonus: 0
  },
  {
    name: "Light",
    bonus: 1,
    trainedBonus: 1
  },
  {
    name: "Medium",
    bonus: 1,
    trainedBonus: 2
  },
  {
    name: "Heavy",
    bonus: 1,
    trainedBonus: 3
  },
]

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
        <Route path="/background" exact render={(routeProps) => (
          <BackgroundPage {...routeProps} {...this.props} />
        )} />
        <Route path="/class" exact render={(routeProps) => (
          <ClassPage {...routeProps} {...this.props} />
        )} />
        <Route path={`/class/:classId`} render={(routeProps) => (
          <ClassDetailsPage {...routeProps} {...this.props} />
        )} />
        <Route path="/equipment" exact render={(routeProps) => (
          <EquipmentPage {...routeProps} {...this.props} />
        )} />
        <Route path="/calling" exact render={(routeProps) => (
          <CallingPage {...routeProps} {...this.props} />
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
          <div className="App-sublayout">
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
        <div className="App-sublayout">
          {races}
        </div>
        <div className="Description"></div>
      </main>
    </div>
  );
}

const RaceDetails = (props) => {
  const focuses = allRaces[props.match.params.raceId].base.focus.map((value) => allFocuses[value]);
  const attrs = props.character.attributes.map(value => <Attribute name={value.name} value={value.value} />);
  const dex = props.character.attributes[3].value ? props.character.attributes[3].value : 0
  const special = allRaces[props.match.params.raceId].base.special.map(value => <li>{value}</li>)
  const talents = allRaces[props.match.params.raceId].base.talents.map(value => allTalents[value])
  return(
    <div>
    <header className="App-page-header">
      <Navigation target="/race" direction="left" text="Back" />
      <h1>{props.match.params.raceId}</h1>
      <Navigation target="/background" direction="right" text="Next" />
    </header>
    <main className="App-body">
      <div className="App-sublayout">
        <div>
          {attrs}
          <Attribute name="speed" value={allRaces[props.match.params.raceId].base.speed + dex } />
        </div>
        <div>
          <FocusSelector focuses={focuses} />
          <BenefitsSelector benefits={allRaces[props.match.params.raceId].benefits} />
          <div className="Special">
            <h3>Special Powers</h3>
            <ul>
              {special}
            </ul>
          </div>
          <TalentSelector talents={talents} level="novice" />
        </div>
      </div>
      <div className="Description"></div>
    </main>
    </div>
)};


class BackgroundPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      background: null
    }
  }

  selectBackground(bg) {
    this.setState({
      background: bg
    })
  }

  render() {
    const backgrounds = Object.entries(allBackgrounds).map((value) => <BigButton name={value[1].name} id={value[0]} height="short" callback={(bg) => this.selectBackground(bg)} />);
    const description = this.state.background ? allBackgrounds[this.state.background].description : ""
    const focuses = this.state.background ? allBackgrounds[this.state.background].focus.map((value) => allFocuses[value]) : []
    const languages = this.state.background ? allBackgrounds[this.state.background].language : []
    return (
      <div>
        <header className="App-page-header">
          <Navigation target="/race" direction="left" text="Back" />
          <h1>Background</h1>
          <Navigation target="/class" direction="right" text="Next" />
        </header>
        <main className="App-body">
          <div className="Background">
            {backgrounds}
          </div>
          <div className="App-sublayout">
    <p className="Description">{description}</p>
            <div>
          <FocusSelector focuses={focuses} />
            </div>
            <div>

            <LanguageSelector lang={languages} />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

const LanguageSelector = (props) => {
  const langs = props.lang.map(value => {
    return (
    <label>
      <input type="checkbox" value={value.name}
      checked={true}
      //onChange={(e) => this.handleOptionChange(e)}
       />
      {value}
    </label>
    )
  })
  return(langs.length ?
    <div className="languageSelector">
      <h3>Languages Spoken</h3>
      {langs}
    </div>
    : ""
  )
}

const ClassPage = (props) => {
  const classes = Object.keys(allClasses).map(value => <BigButton name={value} target={'/class/'+value} height="tall" />);

  return (
    <div>
      <header className="App-page-header">
        <Navigation target="/background" direction="left" text="Back" />
        <h1>Class</h1>
        <Navigation target="/equipment" direction="right" text="Next" />
      </header>
      <main className="App-body">
        <div className="App-sublayout">
          {classes}
        </div>
        <div className="Description"></div>
      </main>
    </div>
  );
}

class ClassDetailsPage extends Component {
  constructor(props) {
    super(props)
    const con = this.props.character.attributes[2].value ? this.props.character.attributes[2].value : 0
    this.state = {
      baseHealth: allClasses[this.props.match.params.classId].baseHealth + con,
      health: allClasses[this.props.match.params.classId].baseHealth + con
    }
  }

  updateHealth(sum) {
    this.setState({
      health: Number(this.state.baseHealth) + Number(sum)
    })
  }

  render() {
    const powers = allClasses[this.props.match.params.classId].levels[1]
    return(
      <div>
      <header className="App-page-header">
        <Navigation target="/class" direction="left" text="Back" />
        <h1>{this.props.match.params.classId}</h1>
        <Navigation target="/equipment" direction="right" text="Next" />
      </header>
      <main className="App-body">
        <div className="App-sublayout">
          <section>
            <h3>Roll for starting health</h3>
            <div className="module">
              <Attribute name="health" value={this.state.health } />
              <RollSet numberOfRolls={1} numberOfDice={1} callback={(roll) => this.updateHealth(roll)} />
            </div>
            <WeaponGroups weapons={allClasses[this.props.match.params.classId].weapons} />
          </section>
          <div>
            <div className="Special">
              <h3>Starting Powers</h3>
              <ul>
                <PowerList powers={powers} />
              </ul>
            </div>
          </div>
        </div>
        <div className="Description"></div>
      </main>
      </div>
  )
  }
}

const WeaponGroups = (props) => {
  const groups = props.weapons.require.map(val => <li>{val}</li>)
  return(<div>
    <h3>Weapons</h3>
    Trained in: <ul>{groups}
      </ul>
  </div>)
}


class EquipmentPage extends Component {
  constructor(props) {
    super(props)
    const dex = this.props.character.attributes[3].value ? this.props.character.attributes[3].value : 0
    const weaponCount = this.props.character.class ? allClasses[this.props.character.class].weapons.baseCount : 2
    const weapons = Array(weaponCount).fill({index: "axes", variant: 0})
    this.state = {
      weapon: weapons,
      shield: {
        index: 0,
        bonus: 0
      },
      dex: dex,
      defense: 10,
      armor: {
        index: 0,
        rating: 0,
        penalty: 0
      }
    }
  }

  updateShield(event) {
    this.setState({
      shield: {
        index: Number(event.target.value),
        bonus: allShields[event.target.value].bonus
      },
      defense: 10
    })
  }

  updateArmor(event) {
    this.setState({
      armor: {
        index: Number(event.target.value),
        rating: allArmor[event.target.value].rating,
        penalty: allArmor[event.target.value].penalty
      }

    })
  }

  updateWeaponGroup(event) {
    const index = event.target.name.charAt(event.target.name.length - 1)
    let newState = this.state.weapon
    newState[index] = {
      index: event.target.value,
      variant: 0
    }
    this.setState({
      weapon: newState
    })
  }

  render() {
    let weaponCount = this.props.character.class ? allClasses[this.props.character.class].weapons.baseCount : 2
    const weapons = Object.entries(Weapons).map((value) => (
      <option value={value[0]}
      checked={this.state.weapon.index === value[0]}
      >{value[1].name}</option>
      ))
    const weaponSelectors = Array(weaponCount).fill(0).map((v,i) => {
      return(
        <div>
          <label for={"weaponGroup" + i}>Weapon {i+1}</label>
          <select name={"weaponGroup" + i} onChange={(e) => this.updateWeaponGroup(e)}>
            {weapons}
          </select>
          <select name={"weaponVariant" + i}>
            {Weapons[this.state.weapon[i].index].variants.map((value, index) => (
            <option value={index}
            checked={this.state.weapon.variant === index}
            >{value.name}</option>
            ))}
          </select>
        </div>
      )
    })
    const armor = allArmor.map((value, index) => {
      return(
        <div className="radio">
          <label>
            <input type="radio" value={index}
            checked={this.state.armor.index === index}
            onChange={(e) => this.updateArmor(e)}
             />
            {value.name}
          </label>
        </div>
      )
    })

    const shields = allShields.map((value, index) => {
      return(
        <div className="radio">
          <label>
            <input type="radio" value={index}
            checked={this.state.shield.index === index}
            onChange={(e) => this.updateShield(e)}
             />
            {value.name}
          </label>
        </div>
      )
    })
    return(
      <div>
      <header className="App-page-header">
        <Navigation target="/class" direction="left" text="Back" />
        <h1>Equipment</h1>
        <Navigation target="/calling" direction="right" text="Next" />
      </header>
      <main className="App-body">
        <div className="App-sublayout">
          <section>
            <h3>Choose your weapons</h3>
            {weaponSelectors}
            <h3>Armor</h3>
            <form>
              {armor}
            </form>
            <Attribute name="Armor Rating" value={this.state.armor.rating } />
            <Attribute name="Armor Penalty" value={this.state.armor.penalty } />
          </section>
          <section>
            <div className="Special">
              <h3>Defense</h3>
              <Attribute name="defense" value={this.state.defense + this.state.dex + this.state.shield.bonus} />
            <h3>Shield</h3>
            <form>
              {shields}
            </form>
            </div>
          </section>
        </div>
        <div className="Description"></div>
      </main>
      </div>
  )
  }
}

const CallingPage = (props) => {
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
