const express = require("express");
const router = express.Router();

const mentorController = require("../controllers/mentorApplicationController");

router.post("/apply", mentorController.createApplication);

router.get("/", mentorController.getApplications);

router.put("/approve/:id", mentorController.approveApplication);

module.exports = router;