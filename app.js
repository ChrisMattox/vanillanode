
var potato3 = require('./modules/module3');

var http = require('http');
var portDecision = 3000;

//function to create server, function parameters are the request and response
http.createServer(function(req, res){
  //200 is a sucess status
  res.writeHead(200);
  res.write(potato3.balance() + potato3.number(100,100000));
  res.end();
  //listens for that specific port
}).listen(portDecision);
console.log("Listening on port: ", portDecision);
