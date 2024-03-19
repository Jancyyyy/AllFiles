var fs = require('fs');
var stream = fs.createReadStream('01raw.json');

stream.on('data',function(dataChunk){
    console.log('chunk starts .....');
    console.log(dataChunk);
    console.log(dataChunk.toString());
    console.log('chunk ends .....');
    stream.pause();
    console.log('stream paused');
    setTimeout(function(){
        stream.resume();
        console.log('stream resumed');
    },1500);
});

stream.on('end',function(dataChunk){
    console.log('Reached EOF, no more data available!');
})
