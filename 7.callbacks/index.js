const fs = require('fs');


function person(name, callbackFn){

    console.log(`Hello ${name}`);
    callbackFn();

}

function address(){
    console.log("Philippines");
}

person("Karlen Legaspi", address);

fs.readFile('input.txt', 'utf8', (err, data) => {
    if(err){
        console.log("Error reading file", err);
        return
    }

    console.log(data);
});