const http = require('http')
const url = require('url')
const handles = require('./handles')
const express = require('express')
const path = require('path')
//app = express()


handles.app.set('port', 8081)

app.set('views', __dirname + "/views")
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))

app.listen(
  app.get('port'), 
  () => console.log(`server listening on ${app.get('port')}`)
)
