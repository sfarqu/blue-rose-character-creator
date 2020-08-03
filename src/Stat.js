import React, { Component } from 'react';
import "./Stat.css"

class Stat extends Component {
  constructor(props) {
    super(props)
    this.adjust = this.props.adjust ? this.props.adjust : a => a;
  }

  renderButtons() {
    if (this.props.showButtons) {
      return(
        <span>
          <button className="Stat-adjust" aria-label="Increment" onClick={() => this.adjust(1)}>+</button>
          <button className="Stat-adjust" aria-label="Decrement" onClick={() => this.adjust(-1)}>-</button>
        </span>
      )
    }
  }

  render() {
    return(
      <span className="Stat">
        <span className="Stat-value">
          {this.props.value}
        </span>
        {this.renderButtons()}
      </span>
    )
  }
}

export default Stat;