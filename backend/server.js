var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var api = require('./api/sentences.json');

var app = express();
app.use(cors());


// pick random sentence
function pickSentence(object) {
  var random = Math.round(Math.random() * object.sentences.length);

  return Object.assign(
    {},
    { topic: object.topic },
    { id: object.id },
    { sentences: object.sentences[random] }
  )

}

// return topics
function returnTopics(array) {
  return array.map(topic => {
    return Object.assign(
      {},
      { topic: topic.topic },
      { id: topic.id }
    )
  })
};



app.get('/api/search/:query?', function(req, res) {
  var query = req.params.query;
  var topic = api.find(element => element.id == query);

  res.header('Content-Type', 'application/json');
  // res.send(pickSentence(topic));
  res.send(topic);
});

app.get('/api/topics', function(req, res) {
  res.header('Content-Type', 'application/json');
  res.send(returnTopics(api))
});

app.listen(5000);
