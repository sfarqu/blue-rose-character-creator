const Classes = {
  adept: {
    primaryAbilities: ["accuracy","intelligence","perception","willpower"],
    secondaryAbilities: ["communication","constitution","dexterity","fighting","strength"],
    baseHealth: 20,
    weapons: {
      baseCount: 1,
      require: ["brawling","staves"]
    },
    levels: [
      [],
      [
        {
          name: "Arcane Training",
          type: "arcana",
          select: {
            count: 2,
            options: ["animism","arcaneTraining","healing","meditative","shaping","psychic","visionary","wildArcane"]
          }
        },
        {
          name: "Arcane Channeling",
          type: "stunt",
          require: [{name: "skillfulChanneling", cost:-1},{name: "powerfulChanneling",effect:1}]
        },
        {
          name: "Starting Talent",
          type: "talent",
          select: {
            count: 1,
            level: "novice",
            options: ["linguistics","lore","medicine","observation"]
          }
        }
      ]
    ]
  },
  expert: {
    primaryAbilities: ["accuracy","communication","dexterity","perception"],
    secondaryAbilities: ["constitution","fighting","intelligence","strength","willpower"],
    baseHealth: 25,
    weapons: {
      baseCount: 2,
      require: ["bows","brawling","lightBlades","staves"]
    },
    levels: [
      [],
      [
        {
          name: "Pinpoint Attack",
          type: "attack",
          description: "Once per round, you can add 1d6 damage to a successful attack if your Dexterity is greater than that of the target"
        },
        {
          name: "Expert's Armor",
          type: "armorTraining",
          level: "medium"
        },
        {
          name: "Starting Talent",
          type: "talent",
          select: {
            count: 1,
            level: "novice",
            options: ["animalTraining","arcanePotential","carousing","contacts","intrigue","linguistics","medicine","oratory","performance","scouting","thievery"]
          }
        }
      ]
    ]
  },
  warrior: {
    primaryAbilities: ["constitution","dexterity","fighting","strength"],
    secondaryAbilities: ["communication","accuracy","intelligence","perception","willpower"],
    baseHealth: 30,
    weapons: {
      baseCount: 3,
      require: ["brawling"],
      select: {
        count: 3,
        options: ["axes","bludgeons","bows","heavyBlades","lightBlades","polearms","staves"]
      }
    },
    levels: [
      [],
      [
        {
          name: "Starting Talent",
          type: "talent",
          select: {
            count: 2,
            level: "novice",
            options: ["arcanePotential","archeryStyle","carousing","dualWeaponStyle","quickReflexes","singleWeaponStyle","thrownWeaponStyle","twoHandedStyle","unarmedStyle","weaponShieldStyle"],
            limitedOptions: [{
              type: "race",
              name: "rhydan",
              options: ["toothClawStyle"]
            }]
          }
        }
      ]
    ]
  }
}

export default Classes