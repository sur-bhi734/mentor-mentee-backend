const express = require("express");
const app = express();

const mentorApplicationRoutes = require("./routes/mentorApplicationRoutes");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Mentor Mentee Backend is running");
});

app.use("/mentor-application", mentorApplicationRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});