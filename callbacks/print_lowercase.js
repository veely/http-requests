var httpFunctions = require('./http-functions.js');

function printLowercase(html) {
  var lower = html.toLowerCase();
  console.log(lower);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

httpFunctions.getHTML(requestOptions, printLowercase);