const http = require('http')
const url = require('url')
const handles = require('./handles')

// Declare an http server
http.createServer(handles.serverHandle).listen(8080)