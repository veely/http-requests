var httpFunctions = require("./http-functions.js");

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

httpFunctions.getAndPrintHTML(requestOptions, httpFunctions.printHTML);