
import React, { Component } from 'react';
import Navigation from '../Navigation';
import { FocusSelector } from '../Focus';
import BigButton from '../BigButton';
import { connect } from 'react-redux'
import Backgrounds from '../systemData/backgrounds';
import Focuses from '../systemData/focuses';

class BackgroundPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      background: null
    }
  }

  selectBackground(bg) {
    this.setState({
      background: bg
    })
  }

  render() {
    const backgrounds = Object.entries(Backgrounds).map((value) => <BigButton name={value[1].name} id={value[0]} height="short" callback={(bg) => this.selectBackground(bg)} />);
    const description = this.state.background ? Backgrounds[this.state.background].description : ""
    const focuses = this.state.background ? Backgrounds[this.state.background].focus.map((value) => Focuses[value]) : []
    const languages = this.state.background ? Backgrounds[this.state.background].language : []
    return (
      <div>
        <header className="App-page-header">
          <Navigation target="/race" direction="left" text="Back" />
          <h1>Background</h1>
          <Navigation target="/class" direction="right" text="Next" />
        </header>
        <main className="App-body">
          <div className="Background">
            {backgrounds}
            </div>
            <div className="App-sublayout">
            <p className="Description">{description}</p>
            <div>
            <FocusSelector focuses={focuses} />
          </div>
            <div>
            <LanguageSelector lang={languages} />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

const LanguageSelector = (props) => {
  const langs = props.lang.map(value => {
    return (
    <label>
      <input type="checkbox" value={value.name}
      checked={true}
      //onChange={(e) => this.handleOptionChange(e)}
       />
      {value}
    </label>
    )
  })
  return(langs.length ?
    <div className="languageSelector">
      <h3>Languages Spoken</h3>
      {langs}
    </div>
    : ""
  )
}

export default BackgroundPage