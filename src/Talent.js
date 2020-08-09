import React, { Component } from 'react';
import "./Talent.css";

const TalentBrief = (props) => (
  <div className="talent brief">
    <span>{props.name}</span> <span className="descriptor">{props.level}</span>
  </div>
)

const TalentLong = (props) => {
  const arcana = props.talent[props.level].requiredArcana ? props.talent[props.level].requiredArcana : []
  const selectArcana = props.talent[props.level].selectArcana ? props.talent[props.level].selectArcana : []
  return(
    <div className="talent long">
      <div>
        <span>{props.talent.name}</span> <span className="descriptor">{props.level}</span>
      </div>
      <div>
        {props.talent[props.level].description}
      </div>
    </div>
  )
}

class TalentSelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: null
    }
  }

  handleOptionChange(e) {
    this.setState({
      selected: e.target.value
    })
  }

  render() {
    const talents = this.props.talents.map(value => {
      return(
        <label className="radio">
          <input type="radio" value={value.name}
          checked={this.state.selected === value.name}
          onChange={(e) => this.handleOptionChange(e)}
            />
          <TalentLong talent={value} level={this.props.level} />
        </label>
      )
      
    });
    return(
      (talents.length) ?
      <form className="talentSelector">
      <h3>Select a Talent</h3>
        {talents}
      </form>
      : ""
    )
  }
}

export { TalentBrief, TalentLong, TalentSelector }