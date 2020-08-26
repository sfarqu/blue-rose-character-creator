
import React, { Component } from 'react';
import Navigation from '../Navigation';
import {Attribute} from '../Attribute'
import { BenefitsSelector } from '../Benefits'
import { TalentSelector } from '../Talent';
import { FocusSelector } from '../Focus';
import BigButton from '../BigButton';
import { connect } from 'react-redux'
import Races from '../systemData/races';
import Focuses from '../systemData/focuses';
import Talents from '../systemData/talents';

const Race = (props) => {
  const races = Object.entries(Races).map(value => <BigButton name={value[1].name} target={'/race/'+value[0]} height="tall" />);

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

class RaceDetails extends Component {
  constructor(props) {
    super(props)
    const focuses = Races[props.match.params.raceId].base.focus
    const attrs = Races[props.match.params.raceId].base.ability
    const specials = Races[props.match.params.raceId].base.special
    this.state = {
      bonuses: {
        abilities: attrs.length === 1 ? attrs : [],
        focuses: focuses.length === 1 ? focuses : [],
        talents: [],
        special: specials,
        benefits: []
      }
    }
  }

  render() {
    const focuses = Races[this.props.match.params.raceId].base.focus.map((value) => Focuses[value]);
    const attrs = this.props.attributes.map(value => <Attribute name={value.name} value={value.value} />);
    const dex = this.props.attributes[3].value ? this.props.character.attributes[3].value : 0
    const special = Races[this.props.match.params.raceId].base.special.map(value => <li>{value}</li>)
    const talents = Races[this.props.match.params.raceId].base.talents.map(value => Talents[value])
    return(
      <div>
      <header className="App-page-header">
        <Navigation target="/attributes" direction="left" text="Back" />
        <h1>{this.props.match.params.raceId}</h1>
        <Navigation target="/background" direction="right" text="Next" />
      </header>
      <navigation>
      <Navigation target="/race" direction="left" text="Change Race" />
      </navigation>
      <main className="App-body">
        <div className="App-sublayout">
          <div>
            {attrs}
            <Attribute name="speed" value={Races[this.props.match.params.raceId].base.speed + dex } />
          </div>
          <div>
            <FocusSelector focuses={focuses} />
            <BenefitsSelector benefits={Races[this.props.match.params.raceId].benefits} />
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
    );
  }

}

const mapStateToProps = (state) => {
  return {
    attributes: state.attributes,
    raceBonuses: state.bonuses
  }
}

export const RaceDetailsPage = connect(
  mapStateToProps
)(RaceDetails)

export const RacePage = Race