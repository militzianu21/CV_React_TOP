import React from "react";
import Button from "./Button";
import PanelPlain from "./panelPlain";
const names = {
  institution: "companyName",
  title: "title",
  bDate: "bDate",
  eDate: "eDate",
};

function WorkSectionPlain(props) {
  const [workInfo, setWorkInfo] = React.useState(props.fields);

  return (
    <>

      {workInfo.map((workObj) => (
        <PanelPlain key={workObj.id} id={workObj.id} fields={workObj} names={names} />
      ))}

      <Button name="edit" text="Edit" handleButtonClick={props.onEdit} />
      
    </>
  );
}
export default WorkSectionPlain;
