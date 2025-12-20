// Import Node.js built-in HTTP module
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {

    // Log the entire request object to the terminal
    // This contains URL, method, headers, etc.
    console.log(req);

    // Immediately stop the Node.js process
    // This exits the event loop and shuts down the server
    process.exit();  // stop event loop
});

// Define the port number
const PORT = 3001;

// Start the server and listen on the given port
server.listen(PORT, () => {

    // Log message shown in terminal when server starts
    // NOTE: URL has a typo (htttp & localhostr)
    console.log(`Server running on address htttp://localhostr:${PORT}`);
});
