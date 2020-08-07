import React from 'react';
import Navigation from '../Navigation';
import Attribute from '../Attribute'
import { connect } from 'react-redux'

const RelationshipsPage = (props) => {
  const relationships = props.relationships ? props.relationships : [{name: "", intensity: 2, bond: ""},{name: "", intensity: 1, bond: ""}]
  const relationshipObjects = relationships.map(value => (
    <div className="module">
      <input type="text" value={value.name} /><Attribute value={value.intensity} min={0} max={2} adjustable={true} /><input type="text" value={value.bond} />
    </div>
  ))
  return (
    <div>
      <header className="App-page-header">
        <Navigation target="/calling" direction="left" text="Back" />
        <h1>Goals & Relationships</h1>
        <Navigation target="/character" direction="right" text="Next" />
      </header>
      <main className="App-body">
        <div className="Special">
          {relationshipObjects}
        </div>
        <div className="Description"></div>
      </main>
    </div>
  );
}

export default RelationshipsPage