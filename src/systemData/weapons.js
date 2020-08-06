const Weapons = {
  axes: {
    name: "Axes",
    ability: "fighting",
    variants: [
      {
        name: "Standard",
        damage: {
          number: 2,
          sides: 6,
          bonus: 0
        },
        special: "",
        type: "melee"
      },
      {
        name: "Throwing",
        type: "thrown",
        damage: {
          number: 1,
          sides: 6,
          bonus: 2
        },
        special: "Ranged (Short 4yds, Long 8yds)"
      },
      {
        name: "Two-Handed",
        type: "twoHanded",
        damage: {
          number: 3,
          sides: 6,
          bonus: 0
        },
        special: "No shield. Can't be used mounted. "
      }
    ]
  },
  bludgeons: {
    name: "Bludgeons",
    ability: "fighting",
    variants: [
      {
        name: "Standard",
        type: "melee",
        damage: {
          number: 2,
          sides: 6,
          bonus: 0
        },
        special: "",
      },
      {
        name: "Flail",
        type: "melee",
        damage: {
          number: 1,
          sides: 6,
          bonus: 3
        },
        special: "Reduces shield bonus of defender by 2 (min 0)"
      },
      {
        name: "Two-Handed",
        type: "twoHanded",
        damage: {
          number: 2,
          sides: 6,
          bonus: 3
        },
        special: "No shield. Can't be used mounted. "
      }
    ]
  },
  bows: {
    name: "Bows",
    ability: "accuracy",
    variants: [
      {
        name: "Crossbow",
        damage: {
          number: 2,
          sides: 6,
          bonus: 0
        },
        special: "Ranged (Short 30yds, Long 60yds), Reload (major action)",
        type: "ranged"
      },
      {
        name: "Longbow",
        type: "ranged",
        damage: {
          number: 1,
          sides: 6,
          bonus: 3
        },
        special: "Can't be used mounted. Ranged (Short 30yds, Long 60yds), Reload (minor action)"
      },
      {
        name: "Standard/Sling",
        type: "ranged",
        damage: {
          number: 1,
          sides: 6,
          bonus: 1
        },
        special: "Ranged (Short 16yds, Long 32yds), Reload (minor action)"
      }
    ]
  },
  brawling: {
    name: "Brawling",
    ability: "accuracy",
    variants: [
      {
        name: "Standard",
        damage: {
          number: 1,
          sides: 3,
          bonus: 0
        },
        special: "",
        type: "melee"
      },
      {
        name: "Handy Object",
        type: "melee",
        damage: {
          number: 1,
          sides: 6,
          bonus: 0
        },
        special: "Breaks if stunt points generated on roll"
      }
    ]
  },
  heavyBlades: {
    name: "Heavy Blades",
    ability: "fighting",
    variants: [
      {
        name: "Standard",
        type: "melee",
        damage: {
          number: 2,
          sides: 6,
          bonus: 0
        },
        special: "",
      },
      {
        name: "Two-Handed",
        type: "twoHanded",
        damage: {
          number: 3,
          sides: 6,
          bonus: 0
        },
        special: "No shield. Can't be used mounted. "
      }
    ]
  },
  lances: {
    name: "Lances",
    ability: "fighting",
    variants: [
      {
        name: "Standard",
        type: "melee",
        damage: {
          number: 2,
          sides: 6,
          bonus: 1
        },
        special: "-2 penalty if used unmounted",
      },
      {
        name: "Light",
        type: "melee",
        damage: {
          number: 1,
          sides: 6,
          bonus: 3
        },
        special: ""
      }
    ]
  },
  lightBlades: {
    name: "Light Blades",
    ability: "accuracy",
    variants: [
      {
        name: "Standard",
        type: "melee",
        damage: {
          number: 1,
          sides: 6,
          bonus: 1
        },
        special: "",
      },
      {
        name: "Thrown",
        type: "thrown",
        damage: {
          number: 1,
          sides: 6,
          bonus: 0
        },
        special: "Ranged (Short 6yds, Long 12yds), Reload (minor action)"
      }
    ]
  },
  polearms: {
    name: "Polearms",
    ability: "fighting",
    variants: [
      {
        name: "Standard",
        type: "thrown",
        damage: {
          number: 1,
          sides: 6,
          bonus: 1
        },
        special: "Ranged (Short 8yds, Long 16yds), Reload (minor action)",
      },
      {
        name: "Two-Handed",
        type: "twoHanded",
        damage: {
          number: 2,
          sides: 6,
          bonus: 2
        },
        special: "-2 penalty when used mounted. No shield."
      }
    ]
  },
  staves: {
    name: "Staves",
    ability: "accuracy",
    variants: [
      {
        name: "Standard",
        type: "melee",
        damage: {
          number: 1,
          sides: 6,
          bonus: 1
        },
        special: "",
      },
      {
        name: "Two-Handed",
        type: "twoHanded",
        damage: {
          number: 1,
          sides: 6,
          bonus: 3
        },
        special: "No shield."
      }
    ]
  }
}

export default Weapons