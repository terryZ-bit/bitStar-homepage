var fs = require('fs');
var ttf2woff2 = require('ttf2woff2');

var input = fs.readFileSync('pingfang-Standard-Normal.ttf');

fs.writeFileSync('pingfang-Standard-Normal.woff2', ttf2woff2(input));