
var express = require('express');

// declare an instance of express

var app = express();

// In production you're going to use PORT 8080, 8888

var port = 5000;

app.get('/', function(req, res){
	res.send('Hello World!');
});

app.listen(port, function(err){
	console.log('running server on port ' + port);
});

