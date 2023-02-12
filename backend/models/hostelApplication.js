const mongoose = require("mongoose");
const hostelSchema = mongoose.Schema({
  studentName: String,
  registrationNumber: String,
});
const hostelApplication = mongoose.model("applicants", hostelSchema);
module.exports = hostelApplication;
