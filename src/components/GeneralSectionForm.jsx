import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function GeneralSectionForm(props) {
  //console.log(props.fields);



  const [generalInfo, setGeneralInfo] = useState(props.fields);
  function handleChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value.trim();  


    setGeneralInfo((prevValue) => {
      //console.log(prevValue);
      if (inputName == "fName") {
        const inputValueCap = inputValue ? inputValue[0].toUpperCase() + inputValue.slice(1) : "";
        const newInfo = { ...prevValue, firstName: inputValueCap };
        return newInfo;
      } else if (inputName == "lName") {
        const inputValueCap = inputValue ? inputValue[0].toUpperCase() + inputValue.slice(1) : "";
        const newInfo = { ...prevValue, lastName: inputValueCap };
        return newInfo;
      } else if (inputName == "email") {
        const newInfo = { ...prevValue, email: inputValue };
        return newInfo;
      } else if (inputName == "phone") {
        const newInfo = { ...prevValue, phone: inputValue };
        return newInfo;
      }
    });
  }

  return (
    <div className="general-info">
      <h2>General Info</h2>
      <hr />
      <div  className="form">
        <div className="full-name">
          <Input
            name="fName"
            placeholder="First Name"
            value={generalInfo.firstName}
            handleInputChange={handleChange}
          />
          <Input
            name="lName"
            placeholder="Last Name"
            value={generalInfo.lastName}
            handleInputChange={handleChange}
          />
        </div>
        <Input
          name="email"
          placeholder="Email"
          value={generalInfo.email}
          handleInputChange={handleChange}
        />
        <Input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          value={generalInfo.phone}
          handleInputChange={handleChange}
        />
      </div>
      <Button
        name="submit"
        text="Submit"
        handleButtonClick={() => props.handleSave(generalInfo)}
        isDisabled={generalInfo.firstName == "" || generalInfo.lastName == ""  ? true : false}
      />
    </div>
  );
}
export default GeneralSectionForm;
