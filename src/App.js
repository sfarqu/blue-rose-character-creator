import React from 'react';
import logo from './logo.svg';
import './App.css';
import RollSet from './RollSet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Character Creator</h1>
      </header>
      <main className="App-body">
        <RollSet numberOfRolls={9} numberOfDice={3} />
      </main>
    </div>
  );
}

export default App;
