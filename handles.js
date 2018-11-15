const http = require('http')
const url = require('url')
const querystring = require('querystring')
const express = require('express')

module.exports = {

	app: app = express()

}



app.get('/', function (req, res) {
		res.writeHead(200, {'Content-Type': 'text/plain'});
	  	res.send('You are on my first NodeJS web page! \n\nIf you want to know more about me, add /hello?name=Alberic to the URL! \n\nType /hello?name= with your name and a message will appear!');
})

app.post('/', (req, res) => {
		res.writeHead(200, {'Content-Type': 'text/plain'});
	  	res.send('You are on my first NodeJS web page! \n\nIf you want to know more about me, add /hello?name=Alberic to the URL! \n\nType /hello?name= with your name and a message will appear!');
})

app.get('/hello', function(req, res) {
	res.send("Hello " + req.query.name)
})


