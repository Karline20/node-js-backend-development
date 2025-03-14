
const fs = require('fs');
const path = require('path');



const dataFolder = path.join(__dirname, 'data');

if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log('Data folder created');
}
//synchronous way of creating a file
const filePath = path.join(dataFolder, 'sample.txt');

fs.writeFileSync(filePath, 'Hello from node js');
console.log('File created successfully');

const readFile = fs.readFileSync(filePath, 'utf-8');
console.log('Read file content:', readFile);

fs.appendFileSync(filePath, '\nThis is a new added on the file');
console.log('New file content added');


//asynchronous way of creating a file

const filePathAsync = path.join(dataFolder, 'sampleAsync.txt');
fs.writeFile(filePathAsync, 'Hello, Async from node js', (err) =>{
    if(err) throw err;
    console.log('Async File created successfully');

    fs.readFile(filePathAsync, 'utf-8', (err, data) =>{
        if(err) throw err;
        console.log('Async read file content:', data);

        fs.appendFile(filePathAsync, '\nThis is a new added content on the file', (err) => {
            if(err) throw err;
            console.log('Async added a new content');

            fs.readFile(filePathAsync, 'utf8', (err, updatedData) =>{
                if(err) throw err;
                console.log('Updated file content:', updatedData);
            });
        });
    }
);
})