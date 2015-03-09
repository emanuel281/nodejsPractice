var http = require('http');
var server = http.createServer(function(request, response){
		response.writeHead(200, {"Context-type": "text/html"});
		response.write("<h1>Hello World!</h1> <p>You asked for code <code>" + request.url + "</code></p>");
		response.end();
	});

server.listen(8000);
