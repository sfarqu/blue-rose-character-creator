import React, { Component } from 'react';
import Navigation from '../Navigation';
import RollSet from '../RollSet';
import {Attribute} from '../Attribute'
import { PowerList } from '../Power';
import BigButton from '../BigButton';
import { connect } from 'react-redux'
import Classes from '../systemData/classes';

class ClassPage extends Component {
  constructor(props) {
    super(props)
    this.changeClass()
  }

  changeClass() {
    this.props.dispatch({
      type: 'CHANGE_CLASS',
      classBonuses: {}
    })
  }

  render() {
    const classes = Object.keys(Classes).map(value => {
      return (<BigButton name={value} 
          target={'/class/'+value} 
          height="tall" 
          id={value}
        />)
      });

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
}

class ClassDetails extends Component {
  constructor(props) {
    super(props)
    const con = props.attributes[2].value ? props.attributes[2].value : 0
    this.state = {
      baseHealth: Classes[this.props.match.params.classId].baseHealth + con,
      characterClass: {
        name: this.props.match.params.classId
      },
      bonuses: {
        talents: []
      }
    }
    // TODO: only update if coming from "select class" page
    this.updateClass()
  }

  updateClass() {
    this.props.dispatch({
      type: 'UPDATE',
      characterClass: this.state.characterClass,
      health: { base: this.state.baseHealth }
    })
  }

  updateHealth(sum) {
    this.props.dispatch({ type: 'UPDATE', health: {
      bonus: Number(sum)
    }})
  }


  // TODO: handle other types of powers than talents
  updateTalent(e) {
    this.state.bonuses.talents[0] = (e.target.value)
    this.props.dispatch({ type: 'UPDATE', classBonuses: this.state.bonuses })
  }

  render() {
    const powers = Classes[this.props.match.params.classId].levels[1]
    const selectedTalent = this.props.bonuses.talents[0] || ""
    return(
      <div>
      <header className="App-page-header">
        <Navigation target="/background" direction="left" text="Back" />
        <h1>{this.props.match.params.classId}</h1>
        <Navigation target="/equipment" direction="right" text="Next" />
      </header>
      <navigation>
      <Navigation target="/class" direction="up" text="Change Class" />
      </navigation>
      <main className="App-body">
        <div className="App-sublayout">
          <section>
            <h3>Roll for starting health</h3>
            <div className="module">
              <Attribute name="health" value={this.props.health.base + this.props.health.bonus } />
              <RollSet numberOfRolls={1} numberOfDice={1} callback={(roll) => this.updateHealth(roll)} />
            </div>
            <WeaponGroups weapons={Classes[this.props.match.params.classId].weapons} />
          </section>
          <div>
            <div className="Special">
              <h3>Starting Powers</h3>
              <ul>
                <PowerList
                    powers={powers}
                    onChange={this.updateTalent.bind(this)}
                    selected={selectedTalent}
                />
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

const mapStateToProps = (state) => {
  return {
    attributes: state.attributes,
    health: state.health,
    bonuses: state.classBonuses
  }
}

const ClassDetailsPage = connect(mapStateToProps)(ClassDetails)
const ConnectedClassPage = connect(mapStateToProps)(ClassPage)

export { ConnectedClassPage, ClassDetailsPage }