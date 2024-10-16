import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GeneralSectionPlain from "./components/GeneralSectionPlain";
import GeneralSectionForm from "./components/GeneralSectionForm";
import EducationSectionForm from "./components/EducationSectionForm";
import EducationSectionPlain from "./components/EducationSectionPlain";
import WorkSectionForm from "./components/WorkSectionForm";
import WorkSectionPlain from "./components/WorkSectionPlain";

var educationInfo = [
  { id: crypto.randomUUID(), institution: "", title: "", bDate: "", eDate: ""},
];
var workInfo = [
  { id: crypto.randomUUID(), institution: "", title: "", bDate: "", eDate: ""},
];
var generalInfo = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

var testVar = "";

function App() {
  const [showGeneralForm, setShowGeneralForm] = useState(true);
  function saveGenInfo(genInfo) {
    generalInfo = genInfo;
    setShowGeneralForm(false);
  }
  function showGenForm() {
    setShowGeneralForm(true);
  }

  //const [educationInfo, setEducationInfo] = useState(edInfo);
  const [showEducationForm, setShowEducationForm] = useState(true);
  function showEdForm() {
    setShowEducationForm(true);
  }
  function saveEdInfo(edInfo) {
    educationInfo = edInfo;
    setShowEducationForm(false);
  }


  const [showWorkForm, setShowWorkForm] = useState(true);
  function showWoForm() {
    setShowWorkForm(true);
  }
  function saveWoInfo(woInfo) {
    workInfo = woInfo;
    setShowWorkForm(false);
  }


  return (
    <>
      {showGeneralForm && (
        <GeneralSectionForm
          fields={generalInfo}
          handleSave={saveGenInfo}
          
        />
      )}
      {!showGeneralForm && (
        <GeneralSectionPlain fields={generalInfo} onEdit={showGenForm} />
      )}
      {showEducationForm &&(
        <EducationSectionForm
          fields={educationInfo}
          handleSave={saveEdInfo}          
        />
      )}
      {!showEducationForm && (
        <EducationSectionPlain fields={educationInfo} onEdit={showEdForm} />
      )}
      {showWorkForm &&(
        <WorkSectionForm
          fields={workInfo}
          handleSave={saveWoInfo}
        />
      )}
      {!showWorkForm && (
        <WorkSectionPlain fields={workInfo} onEdit={showWoForm} />
      )}
    </>
  );
}

export default App;
