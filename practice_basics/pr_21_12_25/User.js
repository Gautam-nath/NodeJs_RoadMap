const fs = require('fs');       // Import the file system module to work with files

// Request handler function for user routes
const userRequestHandler = (req, res) => {
  // Log basic request information to the console
  console.log(req.url, req.method, req.headers);

  // If user opens the root URL ("/"), send the HTML form
  if (req.url === '/') {
    // Set the response header to tell browser we are sending HTML
    res.setHeader('Content-Type', 'text/html');

    // Start building the HTML response
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Enter Your Details</h1>');

    // Simple HTML form with name input and gender radio buttons
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male"/>');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female"/>');
    res.write('<br><input type="submit" value="Submit">');
    res.write('</form>');

    // End of HTML page
    res.write('</body>');
    res.write('</html>');

    // End response and return (do not continue below)
    return res.end();
  } 
  // Handle form submission on /submit-details with POST method
  else if (req.url.toLowerCase() === '/submit-details' && req.method === 'POST') {
    const body = [];  // Array to store incoming request chunks

    // 'data' event fires every time a new chunk of data is received
    req.on('data', chunk => {
      console.log(chunk);      // Log raw Buffer chunk
      body.push(chunk);        // Store chunk in the array
    });

    // 'end' event fires when all chunks have been received
    req.on('end', () => {
      // Combine all chunks into a single Buffer and convert to string
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);   // Example: username=Gautam&gender=male

      // Parse URL-encoded form data into key-value pairs
      const params = new URLSearchParams(fullBody);

      // Convert URLSearchParams into a plain JavaScript object
      const bodyObject = Object.fromEntries(params); // { username: 'Gautam', gender: 'male' }
      console.log(bodyObject);

      // Write the parsed object into user.txt as JSON
      // This is synchronous and will block the event loop for large writes
      fs.writeFileSync('user.txt', JSON.stringify(bodyObject));

      // Set HTTP status code to 302 (redirect)
      res.statusCode = 302;

      // Set the Location header to redirect back to the home page
      res.setHeader('Location', '/');

      // End the response after setting redirect
      return res.end();
    });

    // Important: return here so the default response below does not run
    return;
  }

  // Default response for all other routes
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Complete Coding</h1></body>');
  res.write('</html>');
  return res.end();
};

// Export the user request handler
module.exports = userRequestHandler;

