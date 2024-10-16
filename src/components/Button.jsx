import React from "react";

function Button(props) {
    const buttonStyle = {
      color: props.color,
      fontSize: props.fontSize + 'px'
    };
  
    return (
      <button style={buttonStyle} onClick={props.handleButtonClick} className={props.className} disabled={props.isDisabled}>{props.text}</button>
    );
  }
  export default Button;