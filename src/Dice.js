import React, { Component } from 'react';
import './Dice.css';

class Dice extends Component {
    render() {
        return(
            <button 
            className="dice"
            onClick={this.props.onClick} 
            value={this.props.sum} 
            title="Dice Roll Result"
            >
                {this.props.sum}
            </button>
        )
    }
}

export default Dice;