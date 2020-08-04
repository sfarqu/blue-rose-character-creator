import React from 'react';
import "./Navigation.css";

function Navigation(props) {
    return(
      <a href={props.target} className={"button "+props.direction}>{props.text}</a>
    )
}

export default Navigation