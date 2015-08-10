// Dependencies

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 3033;

app.listen(port, function() {
	console.log('I am watching you.....', port);
});



