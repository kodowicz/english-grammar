var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
app.use(cors());


app.get('/search/:query?', function(req, res) {
  var query = req.params.query;

  res.header('Content-Type', 'application/json');
  res.send(query)
});


app.listen(5000);
