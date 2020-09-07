const Talents = {
  animism: {
    name: "Animism",
    class: ["adept"],
    requirement: [],
    description: "You can learn and use animism arcana",
    novice: {
      description: "You can use the Psychic Shield and Second Sight arcana, and you gain one of: Animal Messenger, Animal Summoning, or Psychic Contact. If you already know Psychic Shield and Second Sight, you gain one other animism arcanum in their place.",
      requiredArcana: ["psychicShield","secondSight"],
      selectArcana: ["animalMessenger","animalSummoning","psychicContact"],
      replaceArcana: ["animalMessenger","animalSummoning","bodyControl","calm","enhancement","heartReading","natureReading","plantShaping","psychicContact","ward"]
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
      requiredArcana: ["cure","psychicShield","secondSight"],
      replaceArcana: ["bodyControl","drawVitality","enhancement","fleshShaping","sleep","ward"]
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
      requiredArcana: ["bodyControl","psychicShield","secondSight"],
      replaceArcana: ["arcaneStrike","arcaneWeapon","bodyControl","enhancement","ward"]
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
      requiredArcana: ["psychicContact","psychicShield","secondSight"],
      replaceArcana: ["calm","heartReading","illusion","mindDelving","mindReading","mindShaping","psychicWeapon","senseMinds","sleep","ward"]
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
      requiredArcana: ["moveObject","psychicShield","secondSight"],
      replaceArcana: ["arcaneStrike","arcaneWeapon","coldShaping","earthShaping","fireShaping","lightShaping","manipulateObject","moveObject","plantShaping","summonSpirit","ward","waterShaping","windShaping"]
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
      requiredArcana: ["visions","psychicShield","secondSight"],
      replaceArcana: ["natureReading","objectReading","scrying","summonSpirit","visions","ward"]
    },
    journeyman: {},
    master: {}
  },
  arcaneTraining: {
    name: "Arcane Training",
    class: ["adept"],
    requirement: [],
    description: "You learn to master a diverse number of arcana",
    novice: {
      description: "You gain two additional arcana for a talent you already possess",
      requiredArcana: []
    },
    journeyman: {},
    master: {}
  },
  wildArcane: {
    name: "Wild Arcane",
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
  animalTraining: {
    name: "Animal Training",
    class: ["adept", "expert", "warrior"],
    requirement: [],
    description: "You know how to train animals",
    novice: {
      description: "You can use the Visions, Psychic Shield, and Second Sight arcana.",
      requiredArcana: ["visions","psychicShield","secondSight"]
    },
    journeyman: {},
    master: {}
  },
  arcanePotential: {
    name: "Arcane Potential",
    class: ["expert","warrior"],
    requirement: [],
    description: "You have the potential to develop some arcane abilities",
    novice: {
      description: "You gain one arcanum of your choice.",
      requiredArcana: []
    },
    journeyman: {},
    master: {}
  },
  carousing: {
    name: "Carousing",
    class: ["adept","expert","warrior"],
    requirement: [{communication: 1, constitution: 1}],
    description: "You take your fun seriously.",
    novice: {
      description: "You can drink other people under the table. When making Constitution (Drinking) tests as part of an advanced test, you gain a +1 bonus to the result of each Drama Die. This allows you to reach the success threshold faster.",
    },
    journeyman: {},
    master: {}
  },
  contacts: {
    name: "Contacts",
    class: ["adept","expert","warrior"],
    requirement: [{communication: 1}],
    description: "You know people, sometimes in the unlikeliest places.",
    novice: {
      description: "You can attempt to make a contact out of an NPC with a successful Communication (Persuasion) test.",
    },
    journeyman: {},
    master: {}
  },
  intrigue: {
    name: "Intrigue",
    class: ["adept","expert","warrior"],
    requirement: [{communication: 2}],
    description: "You are a master of secrets",
    novice: {
      description: "You know how to play the Game. Choose one of the following Communication focuses. If you fail a Communication test with your chosen fous, you can reroll it, but you must keep the result of the second roll.",
      focuses: ["deception","etiquette","romance"]
    },
    journeyman: {},
    master: {}
  },
  linguistics: {
    name: "Linguistics",
    class: ["adept","expert","warrior"],
    requirement: [{intelligence: 1}],
    description: "You can learn new languages easily. When you learn a new language, you learn to both speak and read it.",
    novice: {
      description: "You learn an additional language from the following list.",
      languages: ["aldin","faento","lartyan","rezean","oldAldin","oldVatazin"]
    },
    journeyman: {},
    master: {}
  },
  medicine: {
    name: "Medicine",
    class: ["adept","expert","warrior"],
    requirement: [{intelligence: 1}],
    description: "You can treat wounds and illnesses",
    novice: {
      description: "You have trained in the art of medicine, and your aid is swift and sure. Heal is a minor action for you.",
    },
    journeyman: {},
    master: {}
  },
  oratory: {
    name: "Oratory",
    class: ["adept","expert","warrior"],
    requirement: [{focus: "persuasion"}],
    description: "You are a skilled public speaker who can sway others with your words.",
    novice: {
      description: "You really know how to work a crowd. If you fail a Communication (Persuasion) test when trying to convince a group of something, you can reroll the test. However, you must keep the results of the second roll. You cannot make ths reroll in an intimate social setting or when trying to persuade an individual rather than a group.",
    },
    journeyman: {},
    master: {}
  },
  performance: {
    name: "Performance",
    class: ["adept","expert","warrior"],
    requirement: [{focus: "performance"},{focus:"musicalLore"}],
    description: "You have a natural talent for music",
    novice: {
      description: "You know how to play an instrument, sing, and write and read music. You are also an accomplished actor and performer. In addition, you may perform one of the following roleplahing stunts for 1SP less than its normal cost:",
      stunts: ["jest","stunnedSilence","swayTheCrowd"]
    },
    journeyman: {},
    master: {}
  },
  scouting: {
    name: "Scouting",
    class: ["expert"],
    requirement: [{dexterity: 2}],
    description: "You are skilled at the art of reconnaissance",
    novice: {
      description: "You can use the lay of the land to your advantage. If you fail a Dexterity (Stealth) test, you can reroll it, but you must keep the results of the second roll.",
      focus: ["stealth"]
    },
    journeyman: {},
    master: {}
  },
  thievery: {
    name: "Thievery",
    class: ["expert"],
    requirement: [{dexterity: 2}],
    description: "What's yours is yours and what's theirs is yours too",
    novice: {
      description: "You don't let locks stand in your way. If you fail a Dexterity (Lock Picking) test, you can reroll it, but you must keep the results of the second roll.",
      focus: ["lockPicking"]
    },
    journeyman: {},
    master: {}
  },
  archeryStyle: {
    name: "Archery Style",
    class: ["expert","warrior"],
    requirement: [{weapons: "bows"}],
    description: "You are experienced with bows and crossbows.",
    novice: {
      description: "You know how to punish enemies who get too close. When shooting a bow or crossbow at an enemy within 6 yards of you, you inflict +1 damage."
    },
    journeyman: {},
    master: {}
  },
  dualWeaponStyle: {
    name: "Dual Weapon Style",
    class: ["expert","warrior"],
    requirement: [{dexterity: 2}],
    description: "You can fight with a weapon in your main hand and another in your off hand. Neither can be a two-handed weapon.",
    novice: {
      description: "Wielding two weapons can aid you in attack or defense. If you take the Activate action, you gain either a +1 bonus on your melee attack rolls or a +1 Defense bonus vs. melee attacks until the end of the encounter. You can switch the bonus you are taking with another Activate action.",
      bonuses: ["melee","defense"]
    },
    journeyman: {},
    master: {}
  },
  quickReflexes: {
    name: "Quick Reflexes",
    class: ["adept","expert","warrior"],
    requirement: [{dexterity: 2}],
    description: "You react to threats speedily and instinctually",
    novice: {
      description: "You are prepared for action in an instant. Once per round you can use Ready as a free action on your turn.",
    },
    journeyman: {},
    master: {}
  },
  singleWeaponStyle: {
    name: "Single Weapon Style",
    class: ["expert","warrior"],
    requirement: [{perception: 2}],
    description: "You can fight effectively wielding only a single-handed melee weapon",
    novice: {
      description: "Fighting with a single weapon demands increased awareness. If you take the Activate action, you gain a +1 defense bonus until the end of the encounter while fighting in this style.",
      bonuses: ["defense"]
    },
    journeyman: {},
    master: {}
  },
  thrownWeaponStyle: {
    name: "Thrown Weapon Style",
    class: ["expert","warrior"],
    requirement: [{weapons: ["axes","lightBlades","polearms"]}],
    description: "You are adept with throwing weapons",
    novice: {
      description: "Your accuracy is uncanny. You gain a +1 bonus on attack rolls with throwing weapons",
      bonuses: ["attack"]
    },
    journeyman: {},
    master: {}
  },
  twoHandedStyle: {
    name: "Two-Handed Style",
    class: ["warrior"],
    requirement: [{strength: 3, weapons: ["axes","bludgeons","heavyBlades","polearms"]}],
    description: "You are deadly with two-handed melee weapons",
    novice: {
      description: "The length of your weapon and the power of your attacks forces foes to yield ground. When you hit with a melee attack with a two-handed weapon, you can move the target 2 yards in any direction"
    },
    journeyman: {},
    master: {}
  },
  unarmedStyle: {
    name: "Unarmed Style",
    class: ["adept","expert","warrior"],
    requirement: [{weapons: "brawling"}],
    description: "You know a thing or two about brawling",
    novice: {
      description: "Your hands are as tough as iron. When you attack with your fist, you inflict 1d6 damage instead of 1d3"
    },
    journeyman: {},
    master: {}
  },
  weaponShieldStyle: {
    name: "Weapon & Shield Style",
    class: ["warrior"],
    requirement: [{strength: 2}],
    description: "You've been trained to fight with a single-handed melee weapon and shield'",
    novice: {
      description: "You can use shields of all shapes and sizes. You get a +2 Defense bonus when using a shield, instead of the usual untrained maximum of +1.",
      bonuses: ["defense"]
    },
    journeyman: {},
    master: {}
  },
  lore: {
    name: "Lore",
    class: ["adept","expert","warrior"],
    requirement: [{intelligence: 2}],
    description: "You have an inquisitive mind and absorb facts easily",
    novice: {
      description: "You have studied hard. When you make a successful Intelligence test with a lore focus, the Narrator should give you an extra piece of information on the topic. The Narrator determines the additional information, and it may or may not be pertinent to the main question at hand.",
      requiredArcana: ["visions","psychicShield","secondSight"]
    },
    journeyman: {},
    master: {}
  },
  observation: {
    name: "Observation",
    class: ["adept","expert","warrior"],
    requirement: [{perception: 2}],
    description: "You have an eye for detail",
    novice: {
      description: "Your keen senses notice things others do not. Choose one fo the following Perception focuses. If you fail a Perception test with your chosen focus you can reroll it, but you must keep the result of the second roll.",
      focuses: ["empathy","seeing"]
    },
    journeyman: {},
    master: {}
  },
}

export default Talents