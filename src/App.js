import React from 'react';
import logo from './logo.svg';
import Dice from './Dice';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editing <code>src/App.js</code>.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body className="App-body">
        <Dice numberOfDice="3" />
        <Dice numberOfDice="3" />
        <Dice numberOfDice="3" />
        <Dice numberOfDice="3" />
        <Dice numberOfDice="3" />
        <Dice numberOfDice="3" />
        <Dice numberOfDice="3" />
        <Dice numberOfDice="3" />
        <Dice numberOfDice="3" />
      </body>
    </div>
  );
}

export default App;
