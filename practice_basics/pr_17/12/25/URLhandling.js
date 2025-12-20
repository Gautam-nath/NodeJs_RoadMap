// This module is used to create a server
const http = require("http");

// http.createServer() creates an HTTP server
const server = http.createServer((req, res) => {

  // req.url checks which URL the user is requesting
  // If the user visits http://localhost:3000/
  if (req.url === "/") {

    // Send Home page response
    res.write("Home Page");

    // End the response
    res.end();

  } 
  else if (req.url === "/about") {

    res.write("About Page");

    res.end();

  } 
  else if (req.url === "/contact") {

    res.write("Contact Page");

    res.end();

  } 
  // If the user visits any invalid URL
  else {

    // Set the HTTP status code to 404 (Page Not Found)
    res.statusCode = 404;

    // Send error message to the user
    res.write("404 Page Not Found");

    // End the response
    res.end();
  }
});

// Start the server on port 3000
server.listen(3000, () => {

  // When the server starts successfully,
  // this message will be printed 
  console.log("Server running on port 3000");
});
