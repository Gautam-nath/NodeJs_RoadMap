
const http = require('http');   // Import the built-in HTTP module
const requestHandler = require('./User');
// Create an HTTP server
const server = http.createServer(requestHandler);


// Start the server and listen on port 3001
server.listen(3001, () => {
  // Log message when the server starts successfully
  console.log('Server running on address http://localhost:3001');
});
