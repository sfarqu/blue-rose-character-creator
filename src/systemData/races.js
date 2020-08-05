const Races = {
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

export default Races