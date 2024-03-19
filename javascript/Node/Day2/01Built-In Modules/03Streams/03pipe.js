// var fs = require('fs');

// var readableStream = fs.createReadStream('03cricketers.json');
// var writableStream = fs.createWriteStream('03cricketersI.json');

// readableStream.pipe(writableStream);


var fs = require('fs');
var zlib = require('zlib');

var readableStream = fs.createReadStream('03cricketers.json');
var writableStream = fs.createWriteStream('03cricketers.json.gz');

readableStream
.pipe(zlib.createGzip())
.pipe(writableStream);