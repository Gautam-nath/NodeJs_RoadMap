// Import the built‑in HTTP and FS modules
const http = require("http");
const fs = require("fs");

// Create an HTTP server; when a request is received,
// read the HTML file and send its content as the response
http
  .createServer((req, res) => {
    fs.readFile("html/web.html", (err, data) => {  // read the file html/web.html
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });   // Set HTTP status 500 = Internal Server Error
        res.write("internal server error");
        res.end();
      }
      res.writeHead(200, { "Content-Type": "text/html" });   // Tell browser that response body is HTML
      res.write(data);  // Write the HTML file content to the response body
      res.end();
    });
  })
  .listen(3000, () => {  // Start server and listen on port 3000 for incoming requests
    console.log("Server running on port 3000"); // Log a message when server has started

  });
