var express = require('express');
var router = express.Router();
var pg = require('pg');
var bodyParser = require('body-parser');
var connectionString = 'postgres://localhost:5432/omicron';

var animals = [];

router.post('/', function (req, res){
  var animal = req.body;
  pg.connect(connectionString, function (err, client, done){
    if(err){
      res.sendStatus(500);
      console.log('err is', err);
    }
    client.query('INSERT INTO animals (animal, animal_number) ' +
                'VALUES($1)',
                [animals.animal, animals.animal_number],

      function (err, result){
        done();

        if (err) {
          res.sendStatus(500);
          console.log('this err is', err);
        }
        res.sendStatus(201);
        console.log('success posting animals');
      });
  });
});

// function randomNumber(1, 100){
//         return Math.floor(Math.random() * (1 + max - min) + min);
//     }

    module.exports = router;
