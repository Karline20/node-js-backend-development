
const firstModule = require("./first-module");

console.log(firstModule.divide(20, 22));

try{
    console.log('Trying to divide by zero');
    let result = firstModule.divide(20, 20);
    console.log('Result: ' + result);
    console.log('This should not be printed');
}catch(error){
    console.log(error.message);
}

(
    function(exports, require, module, __filename, __dirname){
        
    }
)