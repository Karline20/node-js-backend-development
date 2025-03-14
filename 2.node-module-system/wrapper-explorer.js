
console.log('This is the wrapper function');
console.log('__filename in Wrapper explorer:', __filename);
console.log('__dirname in Dirname explorer:', __dirname);


module.exports.greet = function(name){
    console.log('Hello, ' + name);
}