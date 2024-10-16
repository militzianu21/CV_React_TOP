import React from "react";
import Button from "./Button";
import PanelForm from "./PanelForm";
const names = {
  institution: "companyName",
  title: "title",
  bDate: "bDate",
  eDate: "eDate",
};
const placeholders={institution:"Company", title: "Position", bDate: "From", eDate: "To"} ;
function WorkSectionForm(props) {
  const [workInfo, setWorkInfo] = React.useState(props.fields);

  function handleChange(panelId, event) {
    const inputName = event.target.name;
    const inputValue = event.target.value.trimStart();

    setWorkInfo((prevValue) => {
      const currentIndex = prevValue.findIndex(
        (object) => object.id == panelId
      );

      const newStateObject = prevValue.map((item) => {
        //console.log(item.id);

        if (item.id === panelId) {
          let newInfo = {};
          if (inputName == "companyName") {
            const inputValueCap = inputValue ? inputValue[0].toUpperCase() + inputValue.slice(1) : "";
            newInfo = { ...item, institution: inputValueCap };
          } else if (inputName == "title") {
            const inputValueCap = inputValue ? inputValue[0].toUpperCase() + inputValue.slice(1) : "";
            newInfo = { ...item, title: inputValueCap };
          } else if (inputName == "bDate") {
            newInfo = { ...item, bDate: inputValue };
          } else if (inputName == "eDate") {
            newInfo = { ...item, eDate: inputValue };
          }
          //console.log(newInfo);
          return newInfo;
        } else {
          return item;
        }
      });
      //console.log(newStateObject);
      return newStateObject;
    });
  }

  function addWork() {
    const newCompany = {
      id: crypto.randomUUID(),
      company: "",
      title: "",
      bDate: "",
      eDate: "",
    };
    return setWorkInfo((prevValue) => [...prevValue, newCompany]);
  }

  function deleteWork(id) {
    const newCompany = {
      id: crypto.randomUUID(),
      company: "",
      title: "",
      bDate: "",
      eDate: "",
    };
    return setWorkInfo((prevValue) => {
      return prevValue.filter((item, index) => {
        return item.id !== id;
      });
    });
  }

  return (
    <div className="general-info">
    <h2>Work</h2>
    <hr />
    <div className="form">
      {workInfo.map((workObj, index) => (
        <PanelForm
          key={workObj.id}
          id={workObj.id}
          index={index}
          fields={workObj}
          names={names}
          placeholders={placeholders}
          onDelete={deleteWork}
          handleChange={handleChange}
        />
      ))}
</div>
<div>
      <Button name="save" text="Save" handleButtonClick={() => props.handleSave(workInfo)} />
      </div>
      <div>
      <Button name="addWork" text="Add Work" handleButtonClick={addWork} />
      </div>
      </div>
  );
}
export default WorkSectionForm;
