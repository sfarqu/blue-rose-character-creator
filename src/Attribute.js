import React, { Component } from 'react';
import "./Attribute.css";
import Stat from "./Stat";

class Attribute extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: props.value ? props.value : 0
    };
  }

  adjustValue(increment) {
      let value = this.state.value;
      value = value + increment;
      if (value > this.props.max || value < this.props.min) {
          return
      }
      this.setState({
          value: value
      })
  }

  renderStat() {
      if (this.props.adjustable) {
          return(
            <Stat value={this.state.value} adjust={(inc) => this.adjustValue(inc)} showButtons={true} />
          )
      }
      else {
        return(
            <Stat value={this.props.value} />
          )
      }
  }

  render() {
    return(
        <div className="Attribute">
            <span className="Attribute-name">{this.props.name}</span>
            {this.renderStat()}
        </div>
      )
  }
}

export default Attribute;