const fs = require('fs');

//  writeFile sync...
fs.writeFileSync('./testFile.txt', 'hello world');

// writeFile async...
fs.writeFile('./newFile.txt', 'new world',(err) =>{});

// readFile sync... 
const res =  fs.readFileSync('./contact.txt', 'utf-8');
console.log(res);

//readFile async..
// ✅  in async it will always want a callback not return anything
fs.readFile('./contact.txt',  'utf-8', (err, res) =>{
    if(err){
        console.log(err);
    }else {
        console.log(res);
    }
});

fs.appendFileSync('./newFile.txt', '\nHey there');

fs.appendFileSync('./newFile.txt', `${Date.now()} Login there\n`);

// to copy
fs.copyFileSync('./contact.txt' ,'./copyfile.txt');

// to delete
fs.unlinkSync('./copyFile.txt');

// to check stats
console.log(fs.statSync('./newFile.txt').isFile());

fs.mkdirSync('my-docs/a/b', {recursive: true});

