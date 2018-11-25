/*const http = require('http')
const url = require('url')
const querystring = require('querystring')
const express = require('express')
const metrics = require('./metrics')


module.exports = {

	app: app = express(),

	  get: (callback) => {
	    callback(null, [
	      { timestamp: new Date('2013-11-04 14:00 UTC').getTime(), value:12}
	    , { timestamp: new Date('2013-11-04 14:30 UTC').getTime(), value:15}
	    ])
	  }

}

app.get('/', function (req, res) {
		//res.writeHead(200, {'Content-Type': 'text/plain'});
	  	res.send('You are on my first NodeJS web page! \n\nIf you want to know more about me, add /hello/Alberic to the URL! \n\nType /hello?name= with your name and a message will appear!');
})

app.post('/', (req, res) => {
		//res.writeHead(200, {'Content-Type': 'text/plain'});
	  	res.send('You are on my first NodeJS web page! \n\nIf you want to know more about me, add /hello/Alberic to the URL! \n\nType /hello?name= with your name and a message will appear!');
})

app.get('/hello/:name', function(req, res) {
	if(req.params.name == "Alberic"){
		res.send('Hello, I am Alberic Dufort, actually studying Big Data and Analytics at ECE Paris');
	}else{
		res.render('hello.ejs', {name: req.params.name})

	}

	//res.send("Hello " + req.query.name)
})

app.get('/metrics.json', (req, res) => {
  metrics.get((err, data) => {
    if(err) throw err
    res.status(200).json(data)
  })
})
*/
