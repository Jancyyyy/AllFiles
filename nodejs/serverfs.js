let http=require('http');
let fs=require('fs');
http.createServer((req,res)=>{
    fs.writeFile('test.txt','node js',(err,data)=>{//append-it can take 3 arguments--filename,
        res.write(data);
        res.end();
    })
//append- add the word to text file
//write-replace the word 
}).listen(8080)
/* err-
*/