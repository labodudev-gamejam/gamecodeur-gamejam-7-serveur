var http = require('http');
var url  = require('url');


var server = http.createServer(function(error, content) {
	fs.readFile('./index.html', 'utf-8', function(error, content) {
		res.writeHead(200, {"Content-type": "text/html"});
		res.end(content);
	})
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', fucntion (socket) {
	console.log.('Un client est connecté !');
});

server.listen(8000);
