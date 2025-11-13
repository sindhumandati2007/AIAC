import React from "react";
import PatientProfile from "./components/PatientProfile";
import MedicalRecords from "./components/MedicalRecords";

function App() {
  return (
    <div className="app">
      <h1>🩺 Digital Health Record Platform</h1>
      <PatientProfile />
      <MedicalRecords />
    </div>
  );
}

export default App;
