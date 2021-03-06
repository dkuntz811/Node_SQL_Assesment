var express = require('express');
var app = express();
var path = require('path');
var pg = require('pg');
var bodyParser = require('body-parser');

var animals = require('./routes/animals'); //Server runs with these three lines commented out.
var random = require('./routes/random');

app.use(bodyParser.urlencoded({extended: true}));

app.use('/animals', animals);
app.use('/random', random);

app.get('/*', function (req, res){
	var file = req.params[0] || '/views/index.html';
	res.sendFile(path.join(__dirname, './public', file));
});

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function (){
	console.log('Listening on port ', app.get('port'));
});
