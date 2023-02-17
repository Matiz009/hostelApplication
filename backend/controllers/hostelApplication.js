const hostelApplicationModel = require("../models/hostelApplication.js");
const getApplications = async (req, res) => {
  try {
    const data = await hostelApplicationModel.find();
    return res.send(data);
  } catch (err) {
    console.log(err);
  }
};
const createApplication = (req, res) => {
  const newApplicant = new hostelApplicationModel({
    studentName: req.body.studentName.toString(),
    registrationNumber: req.body.registrationNumber.toString(),
  });
  try {
    newApplicant.save();
    res.json(newApplicant);
  } catch (err) {
    console.log(err);
  }
};
module.exports = getApplications;
module.exports = createApplication;