//Import the built‑in http module from Node.js.
const http = require('http');

//Create an HTTP server and store it in the server variable.
const server = http.createServer((req, res) => {
    const { method, url } = req; //Use object destructuring to take method and url from the req object.

// Set a response header named Content-Type to text/plain.
    res.setHeader('Content-Type', 'text/plain');

// Check if the requested path is exactly /user.
    if (url === '/user') {
        if (method === 'GET') {  //f the HTTP method is GET and URL is /user:
           res.end('You requested user info (GET)');
        } else if (method === 'POST') { //If the method is POST and URL is /user:
            res.end('You created a new user (POST)');
        } else if (method === 'PUT') { //This simulates a full update of user details.
            res.end('You updated user inf o (PUT)');
        } else if (method === 'DELETE') { //This simulates deleting a user.
            res.end('You deleted the user (DELETE)');
        } else {
            res.statusCode = 405;
            res.end('Method Not Allowed');
        }
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

// Tell the server to start listening on port 8000.
server.listen(8000, () => {
    console.log('Server running at http://localhost:8000');
});

