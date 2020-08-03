import React, { Component } from 'react';
import Dice from './Dice';
import "./RollSet.css"

class RollSet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rolls: Array(props.numberOfRolls).fill(1)
        }
    }

    diceRoll = () => {
        let rolls = [];
        let rollSum = 0;
        for (let i = 0; i < this.props.numberOfDice; i++) {
          rolls[i] = Math.floor(Math.random() * 6) + 1;
          rollSum += rolls[i];
        }
        let drama = this.props.drama ? rolls.slice(-1)[0] : null
        return {
            rolls,
            rollSum,
            drama
          }
      };
    
    rollSingle(rollIndex) {
        let rolls = this.state.rolls.slice();
        rolls[rollIndex] = this.diceRoll()
        this.setState({rolls: rolls});
    }

    rollAll() {
        let rolls = this.state.rolls.slice();
        for (let i = 0; i < this.props.numberOfRolls; i++) {
            rolls[i] = this.diceRoll(i);
        }
        this.setState({rolls: rolls});
        this.props.callback(rolls.map((value) => value.rollSum))
    }

    renderDice(index) {
        return(<Dice 
            key={index} 
            numberOfDice={this.props.numberOfDice} 
            sum={this.state.rolls[index].rollSum} 
            onClick={() => this.rollSingle(index)} 
            />)
    }

    render() {
        const rolls = this.state.rolls.map((value, index) => this.renderDice(index));
        return(
            <div className="RollSet">
                <button 
                className="roller" 
                onClick={() => this.rollAll() }
                >
                    Roll
                </button>
                {rolls}
            </div>
        )
    }
}

export default RollSet;