// Import the write method from the fs module (NOT used in this code)
const { write } = require('fs');

// Import Node.js built-in HTTP module
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {

  // Log the requested URL and HTTP method in the terminal
  console.log(req.url, req.method);

  // Route for Home page
  if (req.url === '/home') {
    res.write('<h1>Welcome to Home</h1>');
    return res.end(); // End response after sending Home page
  }

  // Route for Men page
  else if (req.url === '/men') {
    res.write('<h1>Welcome to Men</h1>');
    return res.end(); // End response after sending Men page
  }

  // Route for Women page
  else if (req.url === '/women') {
    res.write('<h1>Welcome to Women</h1>');
    return res.end(); // End response after sending Women page
  }

  // Route for Kids page
  else if (req.url === '/kids') {
    res.write('<h1>Welcome to Kids</h1>');
    return res.end(); // End response after sending Kids page
  }

  // Route for Cart page
  else if (req.url === '/cart') {
    res.write('<h1>Welcome to Cart</h1>');
    return res.end(); // End response after sending Cart page
  }

  // Default route (shown when no specific URL matches)
  // Send main HTML layout with navigation links
  res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Myntra</title>
    </head>
    <body>
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/men">Men</a></li>
          <li><a href="/women">Women</a></li>
          <li><a href="/kids">Kids</a></li>
          <li><a href="/cart">Cart</a></li>
        </ul>
      </nav>
    </body>
    </html>
  `);

  // End the response
  res.end();
});

// Start the server on port 3001
server.listen(3001, () => {

  // Log message when the server starts successfully
  console.log('Server running on address http://localhost:3001');

});
