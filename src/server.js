const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Mentor Mentee Backend Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});