import React, { Component } from 'react';
import Navigation from '../Navigation';
import {Attribute} from '../Attribute'
import { connect } from 'react-redux'
import Classes from '../systemData/classes';
import Weapons from '../systemData/weapons';

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

class EquipmentPage extends Component {
  constructor(props) {
    super(props)
    const dex = props.attributes[3].value ? props.attributes[3].value : 0
    //*** need to figure out how to set/reset weapons instead of here */
    // const weaponCount = this.props.character.class ? Classes[this.props.character.class].weapons.baseCount : 2
    // const weapons = Array(weaponCount).fill({index: "axes", variant: 0})
    //this.props.dispatch({type: 'RESET_WEAPONS', weapon: {}})
    //weapons.forEach(w => this.props.dispatch({type: 'ADD_WEAPON', weapon: w}))
    this.state = {
      shield: props.shield,
      dex: dex,
      defense: 10,
      armor: props.armor
    }
  }

  updateShield(event) {
    this.props.dispatch({ type: 'UPDATE', shield: {
      index: Number(event.target.value),
      bonus: allShields[event.target.value].bonus
    }})
    this.setState({
      defense: 10
    })
  }

  updateArmor(event) {
    this.props.dispatch({ type: 'UPDATE', armor: {
      index: Number(event.target.value),
      rating: allArmor[event.target.value].rating,
      penalty: allArmor[event.target.value].penalty
    }})
  }

  updateWeaponGroup(event) {
    const index = parseInt(event.target.name.charAt(event.target.name.length - 1))
    this.props.dispatch({
      type: 'UPDATE',
      index,
      weapon: {
        index: event.target.value,
        variant: 0
      }
    })
  }

  updateWeaponVariant(event) {
    const index = parseInt(event.target.name.charAt(event.target.name.length - 1))
    this.props.dispatch({
      type: 'UPDATE',
      index,
      weapon: {
        variant: event.target.selectedIndex
      }
    })
  }

  render() {
    let weaponCount = this.props.character.class ? Classes[this.props.character.class].weapons.baseCount : 2
    const weapons = Object.entries(Weapons).map((value) => (
      <option value={value[0]}>{value[1].name}</option>
      ))
    const weaponSelectors = Array(weaponCount).fill(0).map((v,i) => {
      return(
        <div>
          <label for={"weaponGroup" + i}>Weapon {i+1}</label>
          <select name={"weaponGroup" + i} onChange={(e) => this.updateWeaponGroup(e)} value={this.props.weapon[i].index}>
            {weapons}
          </select>
          <select name={"weaponVariant" + i} onChange={(e) => this.updateWeaponVariant(e)} value={this.props.weapon[i].variant}>
            {Weapons[this.props.weapon[i].index].variants.map((value, index) => (
            <option value={index}>{value.name}</option>
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
            checked={this.props.armor.index === index}
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
            checked={this.props.shield.index === index}
            onChange={(e) => this.updateShield(e)}
             />
            {value.name}
          </label>
        </div>
      )
    })
    const characterClass = this.props.characterClass.name ? this.props.characterClass.name : ""
    return(
      <div>
      <header className="App-page-header">
        <Navigation target={"/class/" + characterClass} direction="left" text="Back" />
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
            <Attribute name="Armor Rating" value={this.props.armor.rating } />
            <Attribute name="Armor Penalty" value={this.props.armor.penalty } />
          </section>
          <section>
            <div className="Special">
              <h3>Defense</h3>
              <Attribute name="defense" value={this.state.defense + this.state.dex + this.props.shield.bonus} />
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

const mapStateToProps = (state) => {
  return {
    attributes: state.attributes,
    armor: state.armor,
    shield: state.shield,
    weapon: state.weapons,
    characterClass: state.characterClass
  }
}

export default connect(mapStateToProps)(EquipmentPage)