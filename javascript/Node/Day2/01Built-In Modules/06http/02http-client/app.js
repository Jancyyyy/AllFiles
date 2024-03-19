const https = require('https');
const fs = require('fs');

const url = "https://jsonplaceholder.typicode.com/posts";

const writeStream = fs.createWriteStream('./posts.json');

var options={
    method:'GET'
}

const request = https.request(url,options,(res) =>{
    if(res.statusCode !== 200){
        console.log('Request cannot be completed!.....');
        res.resume();
        return;
    }

    res.on('data',(chunk)=>{
        console.log("Chunk of Data Recieved!.....");
        writeStream.write(chunk);
    })

    res.on('close',()=>{
        console.log("All Data Recieved!.....");
        writeStream.close();
    })
})

request.end();
