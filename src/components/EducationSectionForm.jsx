import React from "react";
import Button from "./Button";
import PanelForm from "./PanelForm";
const names = {
  institution: "schoolName",
  title: "title",
  bDate: "bDate",
  eDate: "eDate",
};
const placeholders = {
  institution: "School Name",
  title: "Title",
  bDate: "From",
  eDate: "To",
};
function EducationSectionForm(props) {
  const [educationInfo, setEducationInfo] = React.useState(props.fields);

  function handleChange(panelId, event) {
    const inputName = event.target.name;
    const inputValue = event.target.value.trimStart();

    setEducationInfo((prevValue) => {
      const currentIndex = prevValue.findIndex(
        (object) => object.id == panelId
      );

      const newStateObject = prevValue.map((item) => {
        //console.log(item.id);

        if (item.id === panelId) {
          let newInfo = {};
          if (inputName == "schoolName") {
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

  function addEducation() {
    const newSchool = {
      id: crypto.randomUUID(),
      school: "",
      title: "",
      bDate: "",
      eDate: "",
    };
    return setEducationInfo((prevValue) => [...prevValue, newSchool]);
  }

  function deleteEducation(id) {
    const newSchool = {
      id: crypto.randomUUID(),
      school: "",
      title: "",
      bDate: "",
      eDate: "",
    };
    return setEducationInfo((prevValue) => {
      return prevValue.filter((item, index) => {
        return item.id !== id;
      });
    });
  }

  return (
    <div className="general-info">
      <h2>Education</h2>
      <hr />
      <div className="form">
        {educationInfo.map((schoolObj, index) => (
          <PanelForm
            key={schoolObj.id}
            id={schoolObj.id}
            index={index}
            fields={schoolObj}
            names={names}
            placeholders={placeholders}
            onDelete={deleteEducation}
            handleChange={handleChange}
          />
        ))}
      </div>
      <div>
      <Button
        name="addEdu"
        text="Add Education"
        handleButtonClick={addEducation}
      />
      </div>
      <div>
      <Button
        name="save"
        text="Save"
        handleButtonClick={() => props.handleSave(educationInfo)}
      />
      </div>
    </div>
  );
}
export default EducationSectionForm;
