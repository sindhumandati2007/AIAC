const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Patient = require("./models/Patient");

const app = express();
app.use(express.json());
app.use(cors());

// 🔹 Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/medicalRecords", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 🔹 Create patient
app.post("/api/patients", async (req, res) => {
  const newPatient = new Patient(req.body);
  await newPatient.save();
  res.send({ message: "Patient saved successfully!" });
});

// 🔹 Get all patients
app.get("/api/patients", async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
});

// 🔹 Add a new medical record
app.post("/api/patients/record", async (req, res) => {
  const { name, date, labResult, prescription } = req.body;
  const patient = await Patient.findOne({ name });
  if (!patient) return res.status(404).send("Patient not found");

  patient.records.push({ date, labResult, prescription });
  await patient.save();
  res.send({ message: "Record added successfully!" });
});

app.listen(5000, () => console.log("✅ Server running on port 5000"));
