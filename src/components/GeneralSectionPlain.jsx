import React from "react";
import Button from "./Button";

function GeneralSectionPlain(props) {
  //console.log(props.fields);

  return (
    <div className="general-info">
      <h2>General Info</h2>
      <hr />
      <div className="about">
        <div className="item">
          <p name="name">Name</p>
          <h3>
            {props.fields.firstName} {props.fields.lastName}
          </h3>
        </div>
        <div className="item">
          <p>Email Address</p>
          <h3 name="email">{props.fields.email}</h3>
        </div>
        <div className="item">
          <p>Phone Number</p>
          <h3 name="phone">{props.fields.phone}</h3>
        </div>
      </div>
      <Button name="edit" text="Edit" handleButtonClick={props.onEdit} />
    </div>
  );
}
export default GeneralSectionPlain;
