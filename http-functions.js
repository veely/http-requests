var https = require('https');

module.exports = {
  getAndPrintHTML: function (options, callback) {
    var buffer = "";
    https.get(options, function (response) {
      response.setEncoding('utf8');
      response.on('data', function (data) {
        buffer += data;
      });
      response.on('end', function (data) {
        callback(buffer);
      });
    });
  },
  printHTML: function (html) {
    console.log(html);
  }
}