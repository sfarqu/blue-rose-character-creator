import React, { Component } from 'react';
import "./Focus.css";

const FocusBrief = (props) => (
  <div className="focus brief">
    <span>{props.group}</span> <span>({props.name})</span>
  </div>
)

const FocusLong = (props) => (
  <div className="focus long">
    <span>{props.name}</span><span>{props.description}</span>
  </div>
)

class FocusSelector extends Component {
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
    const focuses = this.props.focuses.map(value => {
      return(
        <div className="radio">
          <label>
            <input type="radio" value={value.name}
            checked={this.state.selected === value.name}
            onChange={(e) => this.handleOptionChange(e)}
             />
            <FocusBrief name={value.name} group={value.group} />
          </label>
        </div>
      )
      
    });
    return(
      (focuses.length) ?
      <form className="focusSelector">
      <h3>Select a focus</h3>
        {focuses}
      </form>
      : ""
    )
  }
}

export { FocusBrief, FocusLong, FocusSelector }