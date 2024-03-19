
// const http = require('http');

// const server = http.createServer((req,res) =>{
//     // console.log(req.url);
//     // console.log(req.headers);

//     // res.end('Response from Node Http Server!');

//     res.setHeader("content-type","text/html");
//     res.write("<h1>Response from Node HTTP Server!");
//     res.end();
// });

// server.listen(3000);

// function onListening(){
//     var address = server.address();
//     console.log(`Server started on port: ${address.port}`);
// }

// server.on('listening',onListening);


const fs  = require('fs');
const http = require('http');

const server = http.createServer((req,res) =>{
    fs.readFile('./Index.html','utf-8',(err,htmlContent) =>{
        if(err){
            res.setHeader("content-type","text/plain");
            res.end("Page not found.....");
        }
        else{
            res.setHeader("content-type","text/html");
            res.write(htmlContent);
            res.end();
        }
    })
});

server.listen(3000);

function onListening(){
    var address = server.address();
    console.log(`Server started on port: ${address.port}`);
}

server.on('listening',onListening);