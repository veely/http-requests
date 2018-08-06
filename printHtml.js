var https = require('https');

function getAndPrintHTML (options) {
  var buffer = "";
  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      buffer += data;
    });
    response.on('end', function (data) {
      console.log(buffer);
    });
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);