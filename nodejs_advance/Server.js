const http = require("http");
require("dotenv").config();

// CREATE SERVER
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Server is running");
});

// PORT FROM .env
const PORT = process.env.PORT || 3000;

// START SERVER
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


