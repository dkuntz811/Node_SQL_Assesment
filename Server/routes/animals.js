var express = require('express');
var router = express.Router();
var pg = require('pg');
var bodyParser = require('body-parser');
var connectionString = 'postgres://localhost:5432/omicron';

router.get('/', function (req, res){
	pg.connect(connectionString, function (err, client, done){

		if (err) {
			res.sendStatus(500);
			console.log('animals err1 is', err);
		}
		client.query('SELECT * FROM animals'),
		function (err, result){
			done();
			if (err){
				res.sendStatus(500);
				console.log('animals err2 is, err');
			}
			res.send(result.rows);
		}
	});
});

module.exports = router;
