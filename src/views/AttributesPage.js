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
    let newAttributes = [...this.state.attributes]
    values.forEach((value, index) => {
      let stat = attributesTable[value];
      newAttributes[index].value = stat;
      this.props.dispatch({ type: 'UPDATE', attribute: {name: value, value: stat}})
    })
  }

  render() {
    const attrs = this.state.attributes.map(value => <Attribute name={value.name} value={value.value} max={3} min={0} />);
    return (
      <div>
        <header className="App-page-header">
          <Navigation target="/" direction="left" text="Back" />
          <h1>Roll for Attributes</h1>
          <Navigation target="/race" direction="right" text="Next" />
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
    attributes: state.attributes
  }
}

export default connect(
  mapStateToProps
)(AttributesPage)