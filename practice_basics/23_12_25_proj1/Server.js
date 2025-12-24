// Import the built-in HTTP module to create a server
const http = require("http");

// Import the File System module to read and write files
const fs = require("fs");
const path = require("path");

// Config
const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = __dirname;
const USERS_FILE = path.join(PUBLIC_DIR, "Users.json");
const MAX_BODY_SIZE = 1_000_000; // 1 MB

// Ensure Users.json exists and is a JSON array
function ensureUsersFile() {
  try {
    if (!fs.existsSync(USERS_FILE)) {
      fs.writeFileSync(USERS_FILE, "[]", "utf8");
    } else {
      // Try parsing to avoid crashes on bad JSON
      const raw = fs.readFileSync(USERS_FILE, "utf8");
      JSON.parse(raw || "[]");
    }
  } catch (err) {
    // If parsing failed or write failed, overwrite with a safe empty array
    fs.writeFileSync(USERS_FILE, "[]", "utf8");
  }
}

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Handle Home Page request
  // URL: /  |  Method: GET
  if (req.url === "/" && req.method === "GET") {
    const filePath = path.join(PUBLIC_DIR, "Home.html");
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.error("Error reading Home.html:", err);
        res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Internal Server Error");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(data);
    });
  }

  // Handle Register Page request
  // URL: /register  |  Method: GET
  else if (req.url === "/register" && req.method === "GET") {
    const filePath = path.join(PUBLIC_DIR, "Register.html");
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.error("Error reading Register.html:", err);
        res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Internal Server Error");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(data);
    });
  }

  // Handle Register Form Submission
  // URL: /register  |  Method: POST
  else if (req.url === "/register" && req.method === "POST") {
    // Simple content-type check
    const contentType = req.headers["content-type"] || "";
    if (!contentType.includes("application/x-www-form-urlencoded")) {
      res.writeHead(415, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Unsupported Media Type");
      return;
    }

    // Limit the incoming body size
    let body = "";
    let received = 0;
    let tooLarge = false;

    req.on("data", (chunk) => {
      received += chunk.length;
      if (received > MAX_BODY_SIZE) {
        tooLarge = true;
        // stop processing more data
        req.pause();
      } else {
        body += chunk;
      }
    });

    req.on("end", () => {
      if (tooLarge) {
        res.writeHead(413, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Payload Too Large");
        return;
      }

      // Parse form data
      const formData = new URLSearchParams(body);
      const username = (formData.get("username") || "").trim();
      const email = (formData.get("email") || "").trim();

      // Basic validation
      if (!username || !email) {
        res.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("username and email are required");
        return;
      }

      // Read existing users data from Users.json file (safe parsing)
      let users = [];
      try {
        const raw = fs.readFileSync(USERS_FILE, "utf8");
        users = JSON.parse(raw || "[]");
        if (!Array.isArray(users)) users = [];
      } catch (err) {
        // If reading/parsing fails, start with an empty array
        console.error("Error reading/parsing Users.json:", err);
        users = [];
      }

      // Add new user to users array
      users.push({ username, email, createdAt: new Date().toISOString() });

      // Save updated users data back to Users.json
      try {
        fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), "utf8");
      } catch (err) {
        console.error("Error writing Users.json:", err);
        res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Internal Server Error");
        return;
      }

      // Redirect user back to Home page after successful registration
      res.writeHead(302, { Location: "/" });
      res.end();
    });

    req.on("error", (err) => {
      console.error("Request error:", err);
      res.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Bad Request");
    });
  }

  // Handle unknown routes (404 error)
  else {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Page Not Found");
  }
});

// Start the server on port 3000
ensureUsersFile();
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});