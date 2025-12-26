const express = require("express");
const app = express();

// Home Route
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

// GET submit-details
app.get("/submit-details", (req, res) => {
  console.log("GET submit-details");
  res.send("<p>GET: Welcome to Complete Coding NodeJS Series</p>");
});

// POST submit-details
app.post("/submit-details", (req, res) => {
  console.log("POST submit-details");
  res.send("<p>POST: Form Submitted Successfully</p>");
});

// 404 handler (last)
app.use((req, res) => {
  res.status(404).send("<h2>404 Page Not Found</h2>");
});

app.listen(3002, () => {
  console.log("Server running on http://localhost:3002");
});

