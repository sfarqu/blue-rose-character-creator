import React, { Component } from 'react';
import "./Attribute.css"

class Attribute extends Component {
  render() {
    return(
        <div className="Attribute">
            <span className="Attribute-name">{this.props.name}</span>
            <span className="Attribute-value">{this.props.value}</span>
        </div>
      )
  }
}

export default Attribute;