const EventEmitter = require('events');

const myFirstEmitter = new EventEmitter();

//register a listener
myFirstEmitter.on('greet', (name) => {
    console.log('Name: ', name);
});

function delayedFn(time){
    return new Promise((resolve) => setTimeout(resolve, time));
}

async function trigger(){
    await delayedFn(2000);
    myFirstEmitter.emit('greet', 'Karlen Marx Elgaspi');
}

trigger();