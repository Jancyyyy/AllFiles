const fs = require('fs').promises;

async function readMyFile(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        console.log(data);
    }
    catch(err){
        console.error(`Got an error : ${err.message}`);
    }
}

readMyFile('just.txt');