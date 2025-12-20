// Import the built-in http module
// This module is used to create an HTTP server
const http = require("http");

// Temporary in-memory data (todos list)
// This data will reset when the server restarts
let todos = [
    { id: 1, task: "Learn Node.js" },
    { id: 2, task: "Practice HTTP Methods" }
];

// Create an HTTP server
const server = http.createServer((req, res) => {

    // Extract HTTP method (GET, POST) and URL from the request
    const { method, url } = req;

    // Set response header to tell client that data is JSON
    res.setHeader("Content-Type", "application/json");

    // ======================
    // GET /todos route
    // ======================
    // If the request is GET and the URL is /todos
    if (url === "/todos" && method === "GET") {

        // Send the todos list as a JSON response
        res.end(JSON.stringify(todos));

        // Stop further execution to avoid multiple responses
        return;
    }

    // ======================
    // POST /todos route
    // ======================
    // If the request is POST and the URL is /todos
    if (url === "/todos" && method === "POST") {

        // Variable to collect incoming request body data
        let body = "";

        // Listen for data chunks sent by the client
        req.on("data", chunk => {
            // Convert each chunk to string and append it
            body += chunk.toString();
        });

        // This event fires when all data has been received
        req.on("end", () => {

            // Convert JSON string body into a JavaScript object
            const newTodo = JSON.parse(body);

            // Add the new todo to the todos array
            todos.push(newTodo);

            // Set HTTP status code to 201 (Created)
            res.statusCode = 201;

            // Send the newly created todo as a JSON response
            res.end(JSON.stringify(newTodo));
        });

        // Stop execution so the 404 handler does not run
        return;
    }

    // ======================
    // 404 route (no matching endpoint)
    // ======================
    // If no route matches the request
    res.statusCode = 404;

    // Send a 404 error message in JSON format
    res.end(JSON.stringify({ message: "Not Found" }));
});

// Start the server on port 3003
server.listen(3003, () => {

    // Log a message when the server starts successfully
    console.log("Server running at http://localhost:3003");
});
