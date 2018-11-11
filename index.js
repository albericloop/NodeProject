const http = require('http')
const url = require('url')

// Declare an http server
http.createServer(function (req, res) {

  // Write a response header
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Write a response content
  res.end('first server\n');

// Start the server
}).listen(8081)