import React, { Component } from 'react';
import './App.css';
import RollSet from './RollSet';
import Attribute from './Attribute'
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './Navigation';
import BigButton from './BigButton';
import { FocusBrief, FocusSelector } from './Focus';

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

const allRaces = {
  human: {
    name: "human",
    base: {
      ability: "any",
      focus: ["riding","swimming"],
      speed: 10,
      talents: [],
      special: []
    },
    benefits: [
      {},
      {},
      {
        type: "ability",
        name: "intelligence"
      },
      {
        type: "focus",
        name: "stamina"
      },
      {
        type: "focus",
        name: "stamina"
      },
      {
        type: "focus",
        name: "searching"
      },
      {
        type: "focus",
        name: "persuasion"
      },
      {
        type: "ability",
        name: "constitution"
      },
      {
        type: "ability",
        name: "constitution"
      },
      {
        type: "focus",
        name: "deception"
      },
      {
        type: "focus",
        name: "brawling"
      },
      {
        type: "focus",
        name: "brawling"
      },
      {
        type: "ability",
        name: "strength"
      },
    ]
  },
  vata: {
    name: "vata",
    base: {
      ability: "any",
      focus: [],
      speed: 10,
      talents: [],
      special: []
    },
    benefits: [
      {},
      {},
      {
        type: "ability",
        name: "communication"
      },
      {
        type: "focus",
        name: "culturalLore"
      },
      {
        type: "focus",
        name: "culturalLore"
      },
      {
        type: "focus",
        name: "seeing"
      },
      {
        type: "weapons",
        name: "lightBlades"
      },
      {
        type: "ability",
        name: "accuracy"
      },
      {
        type: "ability",
        name: "accuracy"
      },
      {
        type: "focus",
        name: "historicalLore"
      },
      {
        type: "focus",
        name: "persuasion"
      },
      {
        type: "focus",
        name: "persuasion"
      },
      {
        type: "ability",
        name: "perception"
      },
    ]
  },
  rhydan: {
    name: "rhydan",
    base: {
      focus: []
    }
  },
  nightpeople: {
    name: "night people",
    base: {
      ability: "strength",
      focus: ["stamina","might"],
      speed: 10,
      talents: ["Dark Sight"],
      special: ["Bright light (equal to full daylight) blinds you for one round when you are first exposed to it"]
    },
    benefits: [
      {},
      {},
      {
        type: "ability",
        name: "constitution"
      },
      {
        type: "focus",
        name: "smelling"
      },
      {
        type: "focus",
        name: "smelling"
      },
      {
        type: "focus",
        name: "stealth"
      },
      {
        type: "focus",
        name: "intimidation"
      },
      {
        type: "ability",
        name: "fighting"
      },
      {
        type: "ability",
        name: "fighting"
      },
      {
        type: "weapons",
        name: "bludgeon"
      },
      {
        type: "focus",
        name: "brawling"
      },
      {
        type: "focus",
        name: "brawling"
      },
      {
        type: "ability",
        name: "willpower"
      },
    ]
  },
  seafolk: {
    name: "sea folk",
    base: {
      ability: "constitution",
      focus: ["swimming"],
      speed: 10,
      talents: ["Dark Sight"],
      special: ["Gain a level of fatigue each day unless properly hydrated","Swim at your speed as a minor action with no roll"]
    },
    benefits: [
      {},
      {},
      {
        type: "ability",
        name: "accuracy"
      },
      {
        type: "focus",
        name: "naturalLore"
      },
      {
        type: "focus",
        name: "naturalLore"
      },
      {
        type: "focus",
        name: "hearing"
      },
      {
        type: "weapons",
        name: "polearms"
      },
      {
        type: "ability",
        name: "dexterity"
      },
      {
        type: "ability",
        name: "dexterity"
      },
      {
        type: "focus",
        name: "historicalLore"
      },
      {
        type: "focus",
        name: "acrobatics"
      },
      {
        type: "focus",
        name: "acrobatics"
      },
      {
        type: "ability",
        name: "perception"
      },
    ]
  }
}

const allBackgrounds = {
  aldin: {
    focus: ["persuasion","artisan","culturalLore","historicalLore"],
    language: ["aldin","any"]
  },
  forestFolk: {
    focus: ["running","crafting","naturalLore","tracking"],
    language: ["aldin","any"]
  },
  jarzoni: {
    focus: ["etiquette","historicalLore","religiousLore","faith"],
    language: ["aldin","any"]
  },
  kernish: {
    focus: ["deception","stamina","searching","intimidation"],
    language: ["aldin","any"]
  },
  lartyan: {
    focus: ["etiquette","crafting","heraldry","selfDiscipline"],
    language: ["aldin","lartyan"]
  },
  mariner: {
    focus: ["bargaining","swimming","sailing","nauticalLore"],
    language: ["aldin","any"]
  },
  outcast: {
    focus: ["gambling","stealth","navigation","courage"],
    language: ["aldin","any"]
  },
  rezean: {
    focus: ["stamina","riding","navigation","courage"],
    language: ["aldin","any"]
  },
  roamer: {
    focus: ["bargaining","performance","crafting","empathy"],
    language: ["aldin","faento"]
  },
}

const allFocuses = {
  arcane: {
    name: "arcane",
    description: "",
    group: "accuracy"
  },
  bows: {
    name: "bows",
    description: "",
    group: "accuracy"
  },
  brawling: {
    name: "brawling",
    description: "",
    group: "accuracy"
  },
  lightBlades: {
    name: "light blades",
    description: "",
    group: "accuracy"
  },
  staves: {
    name: "staves",
    description: "",
    group: "accuracy"
  },
  animalHandling: {
    name: "animal handling",
    description: "",
    group: "communication"
  },
  animism: {
    name: "animism",
    description: "",
    group: "communication"
  },
  bargaining: {
    name: "bargaining",
    description: "",
    group: "communication"
  },
  deception: {
    name: "deception",
    description: "",
    group: "communication"
  },
  disguise: {
    name: "disguise",
    description: "",
    group: "communication"
  },
  etiquette: {
    name: "etiquette",
    description: "",
    group: "communication"
  },
  gambling: {
    name: "gambling",
    description: "",
    group: "communication"
  },
  investigation: {
    name: "investigation",
    description: "",
    group: "communication"
  },
  leadership: {
    name: "leadership",
    description: "",
    group: "communication"
  },
  performance: {
    name: "performance",
    description: "",
    group: "communication"
  },
  persuasion: {
    name: "persuasion",
    description: "",
    group: "communication"
  },
  psychic: {
    name: "psychic",
    description: "",
    group: "communication"
  },
  romance: {
    name: "romance",
    description: "",
    group: "communication"
  },
  drinking: {
    name: "drinking",
    description: "",
    group: "constitution"
  },
  rowing: {
    name: "rowing",
    description: "",
    group: "constitution"
  },
  running: {
    name: "running",
    description: "",
    group: "constitution"
  },
  stamina: {
    name: "stamina",
    description: "",
    group: "constitution"
  },
  swimming: {
    name: "swimming",
    description: "",
    group: "constitution"
  },
  acrobatics: {
    name: "acrobatics",
    description: "",
    group: "dexterity"
  },
  artisan: {
    name: "artisan",
    description: "",
    group: "dexterity"
  },
  calligraphy: {
    name: "calligraphy",
    description: "",
    group: "dexterity"
  },
  crafting: {
    name: "crafting",
    description: "",
    group: "dexterity"
  },
  initiative: {
    name: "initiative",
    description: "",
    group: "dexterity"
  },
  legerdemain: {
    name: "legerdemain",
    description: "",
    group: "dexterity"
  },
  lockPicking: {
    name: "lock picking",
    description: "",
    group: "dexterity"
  },
  riding: {
    name: "riding",
    description: "",
    group: "dexterity"
  },
  sailing: {
    name: "",
    description: "",
    group: "dexterity"
  },
  stealth: {
    name: "sailing",
    description: "",
    group: "dexterity"
  },
  traps: {
    name: "traps",
    description: "",
    group: "dexterity"
  },
  axes: {
    name: "axes",
    description: "",
    group: "fighting"
  },
  bludgeons: {
    name: "bludgeons",
    description: "",
    group: "fighting"
  },
  heavyBlades: {
    name: "heavy blades",
    description: "",
    group: "fighting"
  },
  lances: {
    name: "lances",
    description: "",
    group: "fighting"
  },
  polearms: {
    name: "polearms",
    description: "",
    group: "fighting"
  },
  arcaneLore: {
    name: "arcane lore",
    description: "",
    group: "intelligence"
  },
  brewing: {
    name: "brewing",
    description: "",
    group: "intelligence"
  },
  cartography: {
    name: "cartography",
    description: "",
    group: "intelligence"
  },
  cryptography: {
    name: "cryptography",
    description: "",
    group: "intelligence"
  },
  culturalLore: {
    name: "cultural lore",
    description: "",
    group: "intelligence"
  },
  engineering: {
    name: "engineering",
    description: "",
    group: "intelligence"
  },
  healing: {
    name: "healing",
    description: "",
    group: "intelligence"
  },
  heraldry: {
    name: "heraldry",
    description: "",
    group: "intelligence"
  },
  historicalLore: {
    name: "historical lore",
    description: "",
    group: "intelligence"
  },
  militaryLore: {
    name: "military lore",
    description: "",
    group: "intelligence"
  },
  musicalLore: {
    name: "musical lore",
    description: "",
    group: "intelligence"
  },
  naturalLore: {
    name: "natural lore",
    description: "",
    group: "intelligence"
  },
  nauticalLore: {
    name: "nautical lore",
    description: "",
    group: "intelligence"
  },
  navigation: {
    name: "navigation",
    description: "",
    group: "intelligence"
  },
  religiousLore: {
    name: "religious lore",
    description: "",
    group: "intelligence"
  },
  remoteWeapons: {
    name: "remote weapons",
    description: "",
    group: "intelligence"
  },
  research: {
    name: "research",
    description: "",
    group: "intelligence"
  },
  shaping: {
    name: "shaping",
    description: "",
    group: "intelligence"
  },
  sorceryLore: {
    name: "sorcery lore",
    description: "",
    group: "intelligence"
  },
  writing: {
    name: "writing",
    description: "",
    group: "intelligence"
  },
  empathy: {
    name: "empathy",
    description: "",
    group: "perception"
  },
  hearing: {
    name: "hearing",
    description: "",
    group: "perception"
  },
  psychic: {
    name: "psychic",
    description: "",
    group: "perception"
  },
  searching: {
    name: "searching",
    description: "",
    group: "perception"
  },
  seeing: {
    name: "seeing",
    description: "",
    group: "perception"
  },
  smelling: {
    name: "smelling",
    description: "",
    group: "perception"
  },
  tasting: {
    name: "tasting",
    description: "",
    group: "perception"
  },
  touching: {
    name: "touching",
    description: "",
    group: "perception"
  },
  tracking: {
    name: "tracking",
    description: "",
    group: "perception"
  },
  visionary: {
    name: "visionary",
    description: "",
    group: "perception"
  },
  climbing: {
    name: "climbing",
    description: "",
    group: "strength"
  },
  driving: {
    name: "driving",
    description: "",
    group: "strength"
  },
  intimidation: {
    name: "intimidation",
    description: "",
    group: "strength"
  },
  jumping: {
    name: "jumping",
    description: "",
    group: "strength"
  },
  might: {
    name: "might",
    description: "",
    group: "strength"
  },
  smithing: {
    name: "smithing",
    description: "",
    group: "strength"
  },
  courage: {
    name: "courage",
    description: "",
    group: "willpower"
  },
  faith: {
    name: "faith",
    description: "",
    group: "willpower"
  },
  meditative: {
    name: "meditative",
    description: "",
    group: "willpower"
  },
  morale: {
    name: "morale",
    description: "",
    group: "willpower"
  },
  purity: {
    name: "purity",
    description: "",
    group: "willpower"
  },
  selfDisipline: {
    name: "self-discipline",
    description: "",
    group: "willpower"
  }
}

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
        <BenefitsSelector race={props.match.params.raceId} />
        </div>
      </div>
      <div className="Description"></div>
    </main>
    </div>
)};

class BenefitsSelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      benefits: []
    }
  }

  selectBenefits(rolls) {
    const table = allRaces[this.props.race].benefits;
    this.setState({
      benefits: rolls.map(value => table[value])
    })
  }

  render() {
    const benefits = this.state.benefits.map(b => {
      let descriptor = b.type === "ability" ? "+1" : b.type
      return(<div><span className="descriptor">{descriptor}:</span> <span>{b.name}</span></div>)
    })
    return(
      <div>
        <RollSet numberOfRolls={2} numberOfDice={2} callback={(rolls) => this.selectBenefits(rolls)} />
        {benefits}
      </div>
    )
  }
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
