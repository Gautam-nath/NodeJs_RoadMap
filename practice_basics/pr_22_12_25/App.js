// Core Module
const express = require('express');
const requestHandler = require("./22_12_25/URLhandling");
// External Module
const express = require('express');
// Local Modulle
const requestHandler = require('./User');

const app =express();

// midleware
app.use("/", (req, res, next)=>{
  console.log("Come in first middleware", req.url, req.method);
  next();
  
});

app.use("submit-details",(req, res, next)=>{
  console.log("Come in second middleware", req.url, req.method);
  res.send("<p>Welcome to Complete Coding Nodejs Series</p>");
  
});

const PORT = 3002;
app.listen(PORT, () =>{
    console.log('Server running on address http://localhost:{PORT}');
    
})
