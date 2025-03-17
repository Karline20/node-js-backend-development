
function delayedFn(time){
    return new Promise((resolve) => setTimeout(resolve, time));
}

async function delayedGreet(name){
    await delayedFn(2000);
    console.log(name);
}

delayedGreet('Karlen Marx Engell Legaspi');


async function divisionFn(num1, num2){
    try{
        if(num2 === 0) throw new Error('Cannot divide by 0');
        return num1/num2;
    }catch(error){
        console.error('Error:', error);
    }
}

async function mainFn(){
    console.log(await divisionFn(10, 2));
    console.log(await divisionFn(10, 0));
}

mainFn();