import React from "react";

function Input(props) {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.handleInputChange}
      value={props.value}
      pattern={props.pattern}
    />
  );
}
export default Input;
