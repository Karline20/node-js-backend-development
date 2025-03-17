const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {

    if(err){
        console.log('Error failed to read file', err);
        return
    }

    const modifyFile = data.toUpperCase();

    fs.writeFile('output.txt', modifyFile, (err) => {
        if(err){
            console.log('Error failed to write file', err);
            return
        }

        console.log('Data written to the new file!');

        fs.readFile('output.txt', 'utf8', (err, data) => {
            if(err){
                console.log('Error reading the output file!', err);
                return
            }
            
            console.log(data);
        })
    });
});