var express = require("express");
const createApplication = require("../controllers/hostelApplication.js");
const getApplications = require("../controllers/hostelApplication.js");
var router = express.Router();

router.get("/", getApplications);
router.post("/", createApplication);

module.exports = router;