//import Node js built-in http module
const http = require('http');

// Define the hostname (server address)
const hostname = 'localhost';
// Define the port number
const port = 3000;

//  Create the actual HTTP server
// Every time browser visits the URL, this callback function runs automatically
const server = http.createServer((req,res)=>{
  res.statusCode = 200; // Set the response status code to 200 (request successful)
//Content-Type is an HTTP header that tells the browser exactly what type of data you're sending in the response body.
// it as a label on a package - it says "This package contains TEXT,
  res.setHeader('Content-Type',' text/plain'); // Set the response content type to plain text
  res.end('Hello from Node,js HTTP server!'); // Send the response body and end the response

});

// Make the server listen on the specified port and hostname
// Callback that runs ONCE when server successfully starts
server.listen(port,hostname,()=>{
  console.log(`Server running at http://${hostname}:${port}/`); // Log a message when the server starts
});
