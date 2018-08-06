var httpFunctions = require('./http-functions.js');

function print1337(html) {
  var str = html.split('');
  var leet = [];
  var newStr;

  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case 'a':
        leet.push('4');
        break;
      case 'l':
        leet.push('1');
        break;
      case 'o':
        leet.push('0');
        break;
      case 's':
        leet.push('5');
        break;
      case 't':
        leet.push('7');
        break;
      case 'e':
        if (str[i + 1] && str[i + 1] === 'r') {
          leet.push('0');
        } else {
          leet.push('3');
        }
        break;
      case 'c':
        if (str[i + 1] && str[i + 1] === 'k') {
          leet.push('x');
          i++;
        } else {
          leet.push('c');
        }
        break;
      case 'y':
        if (str[i + 1] && str[i + 2] && str[i + 1] === 'o' && str[i + 2] === 'u') {
          leet.push('j00');
          i += 2;
        } else {
          leet.push('y');
        }
        break;
      default:
        leet.push(str[i]);
        break;
    }
  }
  newStr = leet.join('');
  console.log(newStr);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

httpFunctions.getHTML(requestOptions, print1337);