const fs = require('fs');

//async write
fs.writeFile('text.txt','This file is writen async',(err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('Async File Written Successfully');
})


//sync write
fs.writeFileSync('text2.txt','Sync written file','utf-8');
console.log('Sync file written seccessfully');