import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function DeleteButton(props) {
    const buttonStyle = {
      color: props.color,
      fontSize: props.fontSize + 'px'
    };
  
    return (
      <button style={buttonStyle} onClick={props.handleButtonClick} className={"del-button"}><DeleteIcon /></button>
    );
  }
  export default DeleteButton;