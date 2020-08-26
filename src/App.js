import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import character from './character'
import AttributesPage from './views/AttributesPage';
import { RaceDetailsPage, RacePage } from './views/RacePage';
import BackgroundPage from './views/BackgroundPage';
import { ClassDetailsPage, ConnectedClassPage } from './views/ClassPage';
import EquipmentPage from './views/EquipmentPage';
import PersonaPage from './views/PersonaPage';
import RelationshipsPage from './views/RelationshipsPage';

class PrimaryLayout extends Component {
  render() {
    return(
      <div className="App">
        <Route path="/" exact component={HomePage} />
        <Route path="/attributes" exact render={(routeProps) => (
          <AttributesPage {...routeProps} {...this.props} />
        )} />
        <Route path="/race" exact render={(routeProps) => (
          <RacePage {...routeProps} {...this.props} />
        )} />
        <Route path={`/race/:raceId`} render={(routeProps) => (
          <RaceDetailsPage {...routeProps} {...this.props} />
        )} />
        <Route path="/background" exact render={(routeProps) => (
          <BackgroundPage {...routeProps} {...this.props} />
        )} />
        <Route path="/class" exact render={(routeProps) => (
          <ConnectedClassPage {...routeProps} {...this.props} />
        )} />
        <Route path={`/class/:classId`} render={(routeProps) => (
          <ClassDetailsPage {...routeProps} {...this.props} />
        )} />
        <Route path="/equipment" exact render={(routeProps) => (
          <EquipmentPage {...routeProps} {...this.props} />
        )} />
        <Route path="/calling" exact render={(routeProps) => (
          <PersonaPage {...routeProps} {...this.props} />
        )} />
        <Route path="/relationships" exact render={(routeProps) => (
          <RelationshipsPage {...routeProps} {...this.props} />
        )} />
    </div>
    )
  }
}

const HomePage = () => {
  return(
    <div>
      <header className="App-header">
        <h1>Blue Rose Character Creator</h1>
      </header>
      <main className="App-body">
        <div></div>
          <div><a href="/attributes" className="button">Create Character</a></div>
        <div></div>
        
      </main>
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      character: character
    }
  }

  render() {
    return (
      <BrowserRouter>
        <PrimaryLayout character={this.state.character} />
      </BrowserRouter>
    );
  }
}

export default App;
