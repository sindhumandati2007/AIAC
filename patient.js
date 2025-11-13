import React, { useState } from "react";

export default function PatientProfile() {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    gender: "",
  });

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await fetch("http://localhost:5000/api/patients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(patient),
    });
    alert("Patient profile saved successfully!");
  };

  return (
    <div className="card">
      <h3>Patient Profile</h3>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="age" placeholder="Age" onChange={handleChange} />
      <input name="gender" placeholder="Gender" onChange={handleChange} />
      <button onClick={handleSubmit}>Save Profile</button>
    </div>
  );
}
