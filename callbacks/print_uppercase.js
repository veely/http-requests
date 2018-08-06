var httpFunctions = require('./http-functions.js');

function printUppercase(html) {
  var upper = html.toUpperCase();
  console.log(upper);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

httpFunctions.getHTML(requestOptions, printUppercase);