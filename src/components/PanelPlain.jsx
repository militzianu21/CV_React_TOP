import React from "react";
import Button from "./Button";

/*const genInfo={
  firstName:"",
  lastName:"",
  email:"",
  phone:"",
};*/

function PanelPlain(props) {
  //console.log(props.fields);

  return (
    <div className="general-info">
      <div className="about">
        <div className="item">
          <p name={props.names.institution}>Institution</p>
          <h3>{props.fields.institution}</h3>
        </div>
        <div className="item">
          <p>Title</p>
          <h3 name={props.names.title}>{props.fields.title}</h3>
        </div>
        <div className="item">
          <p>Interval</p>
          <h3 name={props.names.bDate}>
            
            From {props.fields.bDate} To {props.fields.bDate}
          </h3>
        </div>
      </div>
    </div>
  );
}
export default PanelPlain;
