const { v4: uuidv4 } = require("uuid");
let mentorApplications = require("../data/mentorApplications");


// Apply to become mentor
exports.createApplication = (req, res) => {

  const { employeeId } = req.body;

  const newApplication = {
    applicationId: uuidv4(),
    employeeId,
    status: "PENDING",
    submittedAt: new Date(),
    approvedBy: null,
    approvedAt: null
  };

  mentorApplications.push(newApplication);

  res.status(201).json({
    message: "Mentor application submitted",
    data: newApplication
  });
};



// Get all mentor applications
exports.getApplications = (req, res) => {
  res.json(mentorApplications);
};



// Approve mentor application
exports.approveApplication = (req, res) => {

  const { id } = req.params;
  const { approvedBy } = req.body;

  const application = mentorApplications.find(
    app => app.applicationId === id
  );

  if (!application) {
    return res.status(404).json({ message: "Application not found" });
  }

  application.status = "APPROVED";
  application.approvedBy = approvedBy;
  application.approvedAt = new Date();

  res.json({
    message: "Application approved",
    data: application
  });
};