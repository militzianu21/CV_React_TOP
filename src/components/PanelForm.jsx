import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import DeleteButton from "./DeleteButton";


function PanelForm(props) {
  return (
    <div  className="form panel-form">
      <div className="del">
        <DeleteButton
          handleButtonClick={() => {
            props.onDelete(props.fields.id);
          }}          
        />
      </div>
      <Input
        name={props.names.institution}
        placeholder={props.placeholders.institution}
        value={props.fields.institution}
        handleInputChange={(event) => {
          props.handleChange(props.id, event);
        }}
      />
      <Input
        name={props.names.title}
        placeholder={props.placeholders.title}
        value={props.fields.title}
        handleInputChange={(event) => {
          props.handleChange(props.id, event);
        }}
      />
      <div className="date">
        <Input
          type="date"
          name={props.names.bDate}
          placeholder={props.placeholders.bDate}
          value={props.fields.bDate}
          handleInputChange={(event) => {
            props.handleChange(props.id, event);
          }}
        />
        <Input
        type="date"
          name={props.names.eDate}
          placeholder={props.placeholders.eDate}
          value={props.fields.eDate}
          handleInputChange={(event) => {
            props.handleChange(props.id, event);
          }}
        />
      </div>
    </div>
  );
}
export default PanelForm;
