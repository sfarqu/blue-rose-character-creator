import React from 'react';
import './App.css';
import RollSet from './RollSet';
import { BrowserRouter, Route } from 'react-router-dom';

const PrimaryLayout = () => (
  <div className="App">
    <header className="App-header">
      <h1>Character Creator</h1>
    </header>
    <main className="App-body">
      <Route path="/" exact component={HomePage} />
      <Route path="/attributes" component={AttributesPage} />
    </main>
  </div>
)

const HomePage = () => {
  return(
        <button>Create Character</button>
  )
}

const AttributesPage = () => {
  return(<RollSet numberOfRolls={9} numberOfDice={3} />)
}

function App() {
  return (
    <BrowserRouter>
      <PrimaryLayout />
    </BrowserRouter>
  );
}

export default App;
