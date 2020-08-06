import React, { Component } from 'react';
import BigButton from './BigButton';
import { MajorArcana, MinorArcana } from './systemData/cards';


class RoyalRoad extends Component {
  constructor(props) {
    super(props)
    this.state = {
      card: null,
      trait: null
    }
  }

  drawCard(major) {
    let set = major ? MajorArcana : MinorArcana;
    let draw = Math.floor(Math.random() * set.length);
    this.setState({
      card: set[draw].name,
      trait: set[draw][this.props.trait]
    })
  }

  render() {
    const isMajor = this.props.trait === "calling"
    return(
      <div>
        <h3>{this.props.trait}</h3>
        <BigButton target="#" height="tall" name="Draw Card" callback={() => this.drawCard(isMajor)} />
    <h3>{this.state.trait}</h3>
      </div>
    )
  }
}

export default RoyalRoad