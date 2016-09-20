
var express = require('express');

// declare an instance of express
var app = express();

// setup middleware, app use gets used by app first and express gets routes second, looks for static file and then set that up
app.use(express.static('public'));
app.use(express.static('src/views'));

// In production you're going to use PORT 8080, 8888
var port = 5000;

app.get('/', function(req, res){
	res.send('Hello World!');
});

app.listen(port, function(err){
	console.log('running server on port ' + port);
});

