import React from 'react';
import "./BigButton.css";

const notifyCallback = (props) => {
  if (typeof props.callback === "function") {
    props.callback(props.id)
  }
}

function BigButton(props) {
    return(
      <a href={props.target} className={"button big-button "+props.height} onClick={() => notifyCallback(props)}>{props.name}</a>
    )
}

export default BigButton