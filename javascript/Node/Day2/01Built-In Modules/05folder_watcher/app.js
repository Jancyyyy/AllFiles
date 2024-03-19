// const fs = require('fs');

// fs.watch("./my-folder",(eventType,fileName)=>{
//     console.log(`File - ${fileName}, ${eventType} at ${new Date().toLocaleTimeString()}`);
// })

// console.log("Folder watching started!.....");


// using chokidar

const chokidar = require('chokidar');

const watcher = chokidar.watch('./my-folder');

watcher.on('add', (path) => {console.log(`File, ${path} is created ...`)})
watcher.on('change', (path) => {console.log(`File, ${path} is modified ...`)})
watcher.on('unlink', (path) => {console.log(`File, ${path} is deleted ...`)})

console.log('chokidar is watching!')