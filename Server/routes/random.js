var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.post('/' function (req, res){
  var animal = req.body;
  pg.connect(connectionString, function (err, client, done){
    if (err) {
      res.sendStatus(500);

    }

    client.query('INSERT INTO animals (animals)'
               + 'VALUES ($1)',
             [animals.name]randomNumber();)
      function (err, result) {
        done();

        if (err) {
          res.sendStatus(500);
        }
        res.sendStatus(201);
      }
  }
});

function randomNumber(1, 100){
        return Math.floor(Math.random() * (1 + max - min) + min);
    }
