import React, { Component } from 'react';
import { connect } from 'react-redux'
import Navigation from '../Navigation';
import RollSet from '../RollSet';
import {Attribute} from '../Attribute'

const attributesTable = [-2,-2,-2,-2,-1,-1,0,0,0,1,1,1,2,2,2,3,3,3,4]

class AttributesPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      attributes: props.attributes
    }
  }

  updateAttributes(values) {
    values.forEach((value, index) => {
      let stat = attributesTable[value];
      this.props.dispatch({ type: 'UPDATE', index, attribute: {value: stat}})
    })
  }

  render() {
    const attrs = this.props.attributes.map(value => <Attribute name={value.name} value={value.value} max={3} min={0} />);
    const race = this.props.race.name ? this.props.race.name : ""
    return (
      <div>
        <header className="App-page-header">
          <Navigation target="/" direction="left" text="Back" />
          <h1>Roll for Attributes</h1>
          <Navigation target={"/race/" + race} direction="right" text="Next" />
        </header>
        <main className="App-body">
            <RollSet numberOfRolls={9} numberOfDice={3} callback={(vals) => this.updateAttributes(vals)} />
          <div className="App-sublayout">
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

const mapStateToProps = (state) => {
  return {
    race: state.raceBonuses,
    attributes: state.attributes
  }
}

export default connect(
  mapStateToProps
)(AttributesPage)