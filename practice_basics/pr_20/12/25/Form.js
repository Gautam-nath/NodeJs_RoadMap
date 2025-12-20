// Import the built-in HTTP module
const http = require('http');

// Create an HTTP server
http.createServer((req, res) => {

   // Tell the browser that we are sending HTML content
   res.setHeader("Content-Type", "text/html");

   // Print the requested URL in the terminal (for debugging)
   console.log(req.url);

   // If the request URL is the home page
   if (req.url == '/') {

      // Send an HTML form to the browser
      res.write(`
        <form action="/submit" method="post">
           <input type="text" placeholder="enter name" name="name" />
           <input type="text" placeholder="enter email" name="email" />
           <button>Submit</button>
        </form>
      `);
   } 
   
   // If the form is submitted to /submit
   else if (req.url == '/submit') {

      // Send a confirmation message to the browser
      res.write('<h1>Data submitted</h1>');
   }

   // End the response

})

// Start the server on port 3200
.listen(3200, () => {

   // This message is shown in the terminal when the server starts
   console.log('server running on port 3200');
});

