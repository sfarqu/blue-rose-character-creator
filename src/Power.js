import React, { Component } from 'react';
import { TalentSelector } from './Talent';
import Talents from './systemData/talents';

class PowerList extends Component {
  renderItem(power) {
    let el = <div>{power.name}</div>
    switch(power.type) {
      case "talent":
        const talents = power.select.options.map(value => Talents[value])
        el = <TalentSelector
            talents={talents}
            onChange={this.props.onChange}
            level={power.select.level}
            selected={this.props.selected}
        />
        break
      default:
        //TODO: display other types of powers
    }
    return(el)
  }
  render() {
    const powers = this.props.powers.map(p => this.renderItem(p))
    return(
      <div className="Powers">
        {powers}
      </div>
    )
  }
}

export { PowerList }