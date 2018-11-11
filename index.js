const http = require('http')
const url = require('url')
const handlesFile = require('./handles.js')

// Declare an http server
http.createServer(handlesFile.server).listen(8081)