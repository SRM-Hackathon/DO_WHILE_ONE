var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient

var db;
MongoClient.connect('mongodb://localhost:27017/paperless', function (err, database) {
  if (err) throw err

  db = database;
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/echo', function(req, res, next) {
  res.send(req.query);
});

router.get('/busStops', function(req, res, next) {
  let busCode = req.query.busCode;
  db.collection('busses').find({ bus: busCode }).toArray(function (err, result) {
    if (err) throw err
    if (result.length > 0) {
      res.send(result[0].stops);
    } else {
      res.send([]);
    }
  })
  
});

module.exports = router;
