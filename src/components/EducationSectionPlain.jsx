import React from "react";
import Button from "./Button";
import PanelPlain from "./panelPlain";

 const names = {
  institution: "schoolName",
  title: "title",
  bDate: "bDate",
  eDate: "eDate",
};

function EducationSectionPlain(props) {
  const [educationInfo, setEducationInfo] = React.useState(props.fields);

  return (
    <div className="general-info">
      <h2>Education</h2>
      <hr />

      {educationInfo.map((schoolObj) => (
        <PanelPlain key={schoolObj.id} id={schoolObj.id} fields={schoolObj} names={names}/>
      ))}

      <Button name="edit" text="Edit" handleButtonClick={props.onEdit} />
      
    </div>
  );
}
export default EducationSectionPlain;
