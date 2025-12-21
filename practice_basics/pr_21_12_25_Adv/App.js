const http = require('http');
const testingSyntax = require('./Syntax');
const runtime = require('./Runtime');
const logical = require('./Logical');

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method);
    testingSyntax();
    // runtime();
    // logical();
})

const PORT = 3002;
server.listen(PORT, () =>{
    console.log(`Server running on address http://localhost:${PORT}`);
    
})