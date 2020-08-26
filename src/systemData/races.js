const Races = {
  human: {
    name: "human",
    base: {
      ability: ["accuracy","communication","constitution","dexterity","fighting","intelligence","perception","strength","willpower"],
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
      ability: ["accuracy","communication","constitution","dexterity","fighting","intelligence","perception","strength","willpower"],
      focus: [],
      speed: 10,
      talents: ["animism","healing","meditative","psychic","shaping","visionary"],
      special: ["Your Constitution is considered 2 points higher when recovering health"]
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
      focus: ["naturalLore","empathy","hearing","psychic","searching","seeing","smelling","tasting","touching","tracking","visionary"],
      special: [
        "You are limited to performing the kinds of physical manipulations an animal of your type can achieve.",
        "Your size and animal shape limit your movement and actions in logical ways",
        "You can only vocalize sounds an animal of your type can make. You still understand spoken language and can hear normally."
      ]
    },
    benefits: [
      {},
      {},
      {
        type: "ability",
        name: "dexterity"
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
        name: "perception"
      },
      {
        type: "ability",
        name: "perception"
      },
      {
        type: "focus",
        name: "psychic"
      },
      {
        type: "focus",
        name: "naturalWeapons"
      },
      {
        type: "focus",
        name: "naturalWeapons"
      },
      {
        type: "ability",
        name: "willpower"
      },
    ]
  },
  nightpeople: {
    name: "night people",
    base: {
      ability: ["strength"],
      focus: ["stamina","might"],
      speed: 10,
      talents: [],
      special: ["Dark Sight: you can see up to 30yds in darkness without a light source",
      "Bright light (equal to full daylight) blinds you for one round when you are first exposed to it"]
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
      ability: ["constitution"],
      focus: ["swimming"],
      speed: 10,
      talents: [],
      special: ["Dark Sight: See up to 20yds in darkness without a light source",
      "Easily dehydrated: Gain a level of fatigue each day unless properly hydrated",
      "Swim at your speed as a minor action (2*Speed as major action) with no ability test",
      "You can hold your breath for 60 + (6 * Constitution) rounds"]
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