const Talents = {
  animism: {
    name: "Animism",
    class: ["adept"],
    requirement: [],
    description: "You can learn and use animism arcana",
    novice: {
      description: "You can use the Psychic Shield and Second Sight arcana, and gain one more.",
      requiredArcana: ["psychicShield","secondSight"],
      selectArcana: ["animalMessenger","animalSummoning","psychicContact"]
    },
    journeyman: {},
    master: {}
  },
  healing: {
    name: "healing",
    class: ["adept"],
    requirement: [],
    description: "You can learn and use healing arcana",
    novice: {
      description: "You can use the Cure, Psychic Shield, and Second Sight arcana.",
      requiredArcana: ["cure","psychicShield","secondSight"]
    },
    journeyman: {},
    master: {}
  },
  meditative: {
    name: "Meditative",
    class: ["adept"],
    requirement: [],
    description: "You can learn and use meditative arcana",
    novice: {
      description: "You can use the Body Control, Psychic Shield, and Second Sight arcana.",
      requiredArcana: ["bodyControl","psychicShield","secondSight"]
    },
    journeyman: {},
    master: {}
  },
  psychic: {
    name: "Psychic",
    class: ["adept"],
    requirement: [],
    description: "You can learn and use psychic arcana",
    novice: {
      description: "You can use the Psychic Contact, Psychic Shield, and Second Sight arcana.",
      requiredArcana: ["psychicContact","psychicShield","secondSight"]
    },
    journeyman: {},
    master: {}
  },
  shaping: {
    name: "Shaping",
    class: ["adept"],
    requirement: [],
    description: "You can learn and use shaping arcana",
    novice: {
      description: "You can use the Move Object, Psychic Shield, and Second Sight arcana.",
      requiredArcana: ["moveObject","psychicShield","secondSight"]
    },
    journeyman: {},
    master: {}
  },
  visionary: {
    name: "Visionary",
    class: ["adept"],
    requirement: [],
    description: "You can learn and use visionary arcana",
    novice: {
      description: "You can use the Visions, Psychic Shield, and Second Sight arcana.",
      requiredArcana: ["visions","psychicShield","secondSight"]
    },
    journeyman: {},
    master: {}
  },
}

export default Talents