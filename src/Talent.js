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
        <strong>{props.talent.name}</strong> <span className="descriptor">{props.level}</span>
      </div>
      <div>
        {props.talent.description}
      </div>
    </div>
  )
}

class TalentSelector extends Component {

  handleOptionChange(e) {
    this.props.onChange(e)
  }

  render() {
    let selected = this.props.selected || ""
    const talents = this.props.talents.map(value => {
      return(
        <label className="radio">
          <input type="radio" value={value.name}
          checked={selected === value.name}
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