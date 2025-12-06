console.log("Starting server...");

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Bug Tracker API running!" });
});

app.listen(4000, () => console.log("Server running on port 4000"));
