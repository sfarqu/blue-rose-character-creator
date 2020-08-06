import React, { Component } from 'react';
import "./Benefits.css";
import RollSet from './RollSet';
import { FocusBrief } from './Focus';
import Focuses from './systemData/focuses'

class BenefitsSelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      benefits: props.benefits,
      selectedBenefits: []
    }
  }

  selectBenefits(rolls) {
    this.setState({
      selectedBenefits: rolls.map(value => this.state.benefits[value])
    })
  }

  render() {
    const benefits = this.state.selectedBenefits.map(b => {
      const descriptor = b.type === "ability" ? "+1" : b.type + ":"
      let label = <span>{b.name}</span>
      if (b.type === "focus") {
        const focus = Focuses[b.name]
        label = <FocusBrief name={focus.name} group={focus.group} />
      }
    return(<div><span className="descriptor">{descriptor}</span> {label}</div>)
    })
    return(
      <div>
        <RollSet numberOfRolls={2} numberOfDice={2} callback={(rolls) => this.selectBenefits(rolls)} />
        <div className="Benefits">{benefits}</div>
      </div>
    )
  }
}

export { BenefitsSelector }