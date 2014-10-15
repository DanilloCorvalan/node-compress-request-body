var zlib = require('zlib');
var fs = require('fs');
var memstream = require('memorystream');
var request = require('request');
var body = require('./data.json');

// var body = JSON.stringify({ name: 'Danillo', array: [1, 2, 'rahhh'], anotherProp : 1234, justAnotherProp: 'awodiwaojD IjawidojAIWOjd iaoWJ dJAW iodjAIWOdj ioajwd iojawido jIWAOJD ioaJWdio JAWido jaoiwjd ioJAWdio jaio', rahhh: 1238082139890213  });

zlib.gzip(JSON.stringify(body), function (err, result) {

  var options = {
    uri: 'http://localhost:8000/data',
    method: 'POST',
    headers: {
      'content-encoding': 'gzip',
      'content-type': 'application/json'
    },
    body: result
  };

  request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body); // Print the shortened url.
    }
  });
});



// var stream = new memstream();

// var jsonFile = fs.createReadStream('./data.json');
// var body = '';

// stream.on('data', function (chunk) {
//   body += chunk;
//   console.log("chunk = ", typeof body);
// });

// stream.on('end', function () {
//   console.log('end');


// });

// jsonFile.pipe(zlib.createGzip()).pipe(stream);
//jsonFile.pipe(stream);
