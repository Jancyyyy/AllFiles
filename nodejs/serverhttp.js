//HTTP MODULE

let http=require('http');
let fs=require('fs');//importing file system management module32e
/*
importing http
creating a server,running the server 8080 port, listen-will run server with port 8080
req,res-arguments,res--display any content in browser
req-url data which we want to use in node application
write- will generate coontent to the browser
if we start the server we should end the server by res.endwwq*/
http.createServer((req,res)=>{
    res.write(req.url);//
    res.end(); ``
    console.log('server running');
}).listen(8080)

