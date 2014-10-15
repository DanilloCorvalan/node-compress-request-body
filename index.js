var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var requestStats = require('request-stats');

var app = express();

app.use(bodyParser.json( { limit: '50mb' } ));
//app.use(bodyParser.urlencoded({extended: true}));

app.post('/data', function (req, res) {
  res.send(req.body);
});

app.server = http.createServer(app);
requestStats(app.server, function (stats) {
  // this function will be called every time a request to the server completes
  console.log(stats);
});
app.server.listen(8000);
