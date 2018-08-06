var https = require('https');

function getAndPrintHTML (options, callback) {
  var buffer = "";
  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      buffer += data;
    });
    response.on('end', function (data) {
      callback(buffer);
    });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getAndPrintHTML(requestOptions, printHTML);