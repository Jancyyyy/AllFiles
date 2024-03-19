var fs = require('fs');


//fs.stat('just.txt',function(err,stats){
// fs.stat('D:\\MERN_Freshers_Batch_7_Nov_2022\\Node\\Day II\\01Built-In Modules',function(err,stats){
//     console.log(stats);
//     console.log('is File? '+stats.isFile());
//     console.log('is Directory? '+stats.isDirectory());
// })

// fs.readdir('./',function(err,files){
//     if(err){
//         return console.error(Err);
//     }
//     files.forEach(function(file){
//         console.log(file);
//     })
// })

// fs.readFile('just.txt',function(err,data){
//     if(err){
//         return console.error(Err);
//     }
//     console.log('\t\tAsynchrnous Read\n'+data.toString());
// })
// console.log('\n last line!');

// // Synchronous version of readFile
// var data = fs.readFileSync('just.txt');
// console.log('\t\tSynchronous Read\n'+data.toString());
// console.log('\n last line!');


// writeFile

// var message = 'Hello from Node Application!';

// fs.writeFile('./file2.txt',message,'utf-8',(err)=>{
//     if(err){
//         console.error(err);
//     }
//     else
//     console.log('File write completed!');
// });

// console.log('\n last line!');


// // appendFile

// var message = '\nHello from Node Application!';
// fs.appendFile('./file3.txt',message,'utf-8',(err)=>{
//     if(err){
//         console.error(err);
//     }
//     else
//     console.log('File append completed!');
// });

// console.log('\n last line!');

