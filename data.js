const mongoose = require("mongoose");

const RecordSchema = new mongoose.Schema({
  date: String,
  labResult: String,
  prescription: String,
});

const PatientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: String,
  gender: String,
  records: [RecordSchema],
});

module.exports = mongoose.model("Patient", PatientSchema);
