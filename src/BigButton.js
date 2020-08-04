import React from 'react';
import "./BigButton.css";

function BigButton(props) {
    return(
      <a href={props.target} className={"button big-button "+props.height}>{props.name}</a>
    )
}

export default BigButton