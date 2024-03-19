//unlink=it will take only two arguments.1-filenme that we want to delete 2-not want any kind of  overide
var http=require('http');
var fs=require('fs');
http.createServer((req,res)=>{
    fs.unlink('test.txt',(err)=>{
        if(err) throw err;
        console.log('file deleted');
    })
}).listen(8080)