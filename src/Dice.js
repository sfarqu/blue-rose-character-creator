import React, { Component } from 'react';

class Dice extends Component {
    constructor(props) {
        super(props)
        this.numberOfDice = this.props.numberOfDice ? this.props.numberOfDice : 1;
        this.state = {
            rolls: [],
            rollSum: null
        }
    }

    diceRoll = () => {
        let rolls = [];
        let rollSum = 0;
        for (let i = 0; i < this.numberOfDice; i++) {
          rolls[i] = Math.floor(Math.random() * 6) + 1;
          rollSum += rolls[i];
        }
        this.setState({
          rolls,
          rollSum
        });
      };

    render() {
        return(
            <button className="dice" onClick={ () => this.diceRoll() } value={this.state.rollSum}>
                {this.state.rollSum}
            </button>
        )
    }
}

export default Dice;