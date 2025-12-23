// Import the built-in HTTP module to create a server
const http = require("http");

// Import the File System module to read and write files
const fs = require("fs");

// Create an HTTP server
const server = http.createServer((req, res) => {

  // Handle Home Page request
  // URL: /  |  Method: GET
  if (req.url === "/" && req.method === "GET") {

    // Read Home.html file from the system
    fs.readFile("./Home.html", (err, data) => {

      // Send HTTP status 200 (OK) and content type as HTML
      res.writeHead(200, { "Content-Type": "text/html" });

      // Send HTML content to the browser and end the response
      res.end(data);
    });

  }
  
  // Handle Register Page request
  // URL: /register  |  Method: GET
  else if (req.url === "/register" && req.method === "GET") {

    // Read Register.html file
    fs.readFile("./Register.html", (err, data) => {

      // Send HTTP status 200 and HTML content
      res.writeHead(200, { "Content-Type": "text/html" });

      // Send Register page to the browser
      res.end(data);
    });

  }
  
  // Handle Register Form Submission
  // URL: /register  |  Method: POST
  else if (req.url === "/register" && req.method === "POST") {

    // Variable to store incoming form data
    let body = "";

    // Collect data chunks from the request
    req.on("data", chunk => {
      body += chunk;
    });

    // This event fires when all data is received
    req.on("end", () => {

      // Convert form data string into readable format
      const formData = new URLSearchParams(body);

      // Create a user object from form values
      const user = {
        username: formData.get("username"),
        email: formData.get("email")
      };

      // Read existing users data from Users.json file
      const users = JSON.parse(fs.readFileSync("./Users.json"));

      // Add new user to users array
      users.push(user);

      // Save updated users data back to Users.json
      fs.writeFileSync("./Users.json", JSON.stringify(users));

      // Redirect user back to Home page after successful registration
      res.writeHead(302, { Location: "/" });
      res.end();
    });

  }
  
  // Handle unknown routes (404 error)
  else {
    res.writeHead(404);
    res.end("Page Not Found");
  }
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
