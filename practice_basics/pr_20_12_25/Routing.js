// Import the built-in HTTP module
const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {

  // Log request details in the terminal (for debugging)
  console.log(req.url, req.method, req.headers);

  // Tell the browser that we are sending HTML content
  res.setHeader("Content-Type", "text/html");

  // Route: Home page
  if (req.url === "/") {

    // Send Home page HTML to the browser
    res.write(`
      <html>
        <head>
          <title>Home</title>
        </head>
        <body>
          <h1>Welcome To Home</h1>
        </body>
      </html>
    `);

    // End the response and return (important)
    return res.end();
  }

  // Route: Products page
  if (req.url === "/products") {

    // Send Products page HTML to the browser
    res.write(`
      <html>
        <head>
          <title>Products</title>
        </head>
        <body>
          <h1>Checkout our products</h1>
        </body>
      </html>
    `);

    // End the response and return
    return res.end();
  }

  // Default route (when no URL matches)
  // Set HTTP status code to 404 (Not Found)
  res.statusCode = 404;

  // Send 404 page HTML
  res.write(`
    <html>
      <head>
        <title>404</title>
      </head>
      <body>
        <h1>Page Not Found</h1>
      </body>
    </html>
  `);

  // End the response
  res.end();
});

// Define the port number
const PORT = 3000;

// Start the server and listen on the given port
server.listen(PORT, () => {

  // Message shown in terminal when server starts successfully
  console.log(`Server running at http://localhost:${PORT}`);
});
