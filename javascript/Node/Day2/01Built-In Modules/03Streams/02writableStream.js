var fs = require('fs');
var stream = fs.createWriteStream('02output.txt');

stream.write('Hello Node.js\n');
stream.write('We are learning writable streams!');
stream.end();

stream.on('finish',function(){
    console.log('all writes are completed!');
})