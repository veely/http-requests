var httpFunctions = require('./http-functions.js');

function reverse(html) {
  var reverseStr = html.split('').reverse().join('');
  console.log(reverseStr);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

httpFunctions.getHTML(requestOptions, reverse);