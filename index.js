var http = require('http');
var port = 3000;


var requestHandler = function(request, response ){
    console.log(request.url);
    response.end("Helllo from node web server");
}

var server = http.createServer(requestHandler);
server.listen(port);

console.log('Node started on port 3000')