import React, { useEffect, useState } from "react";

export default function MedicalRecords() {
  const [records, setRecords] = useState([]);
  const [newRecord, setNewRecord] = useState({
    date: "",
    labResult: "",
    prescription: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/patients")
      .then((res) => res.json())
      .then((data) => setRecords(data));
  }, []);

  const handleChange = (e) => {
    setNewRecord({ ...newRecord, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    await fetch("http://localhost:5000/api/patients/record", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRecord),
    });
    alert("Record added!");
  };

  return (
    <div className="card">
      <h3>Medical Records</h3>
      <input name="date" placeholder="Date" onChange={handleChange} />
      <input name="labResult" placeholder="Lab Result" onChange={handleChange} />
      <input name="prescription" placeholder="Prescription" onChange={handleChange} />
      <button onClick={handleAdd}>Add Record</button>

      <h4>Existing Records:</h4>
      <ul>
        {records.map((r) => (
          <li key={r._id}>
            {r.name} — {r.labResult} ({r.prescription})
          </li>
        ))}
      </ul>
    </div>
  );
}
