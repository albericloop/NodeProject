const http = require('http')
const url = require('url')

module.exports = {
  server: function(req, res) {
	  // Write a response header
	  res.writeHead(200, {'Content-Type': 'text/plain'});

	  // Write a response content
	  res.end('second server\n');
  }
}