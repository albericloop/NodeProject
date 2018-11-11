const http = require('http')
const url = require('url')
const querystring = require('querystring');

module.exports = {
  serverHandle: function(req, res) {
  	const route = url.parse(req.url);
  	const page = url.parse(req.url).pathname;
  	const parameter = querystring.parse(route.query);

  	if(page == "/"){
	  	// Write a response header
	  	res.writeHead(200, {'Content-Type': 'text/plain'});

	  	// Write a response content
	  	res.end('You are on my first NodeJS web page! \n\nIf you want to know more about me, add /hello?name=Alberic in the URL! \n\nType /hello?name= with your name and a message will appear!');

	}else if(page == "/hello" && 'name' in parameter){
		//if the two conditions are ok
	  	res.writeHead(200, {'Content-Type': 'text/plain'});

	  	const name = parameter['name'];

		if(name == "Alberic"){
			//short introduction
			res.end('Hello, I am Alberic Dufort, actually studying Big Data and Analytics at ECE Paris');
		}else{
			//hello name
			res.end('hello ' + name);
		}
	}else{
		//wrong path
		res.writeHead(404);
		res.end('Not found')
	}
  }
}