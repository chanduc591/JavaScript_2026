//Asynchronous Functions with Promise 

//normal function to generate random number
function randomNumber(): number {
    return Math.random();
}

//calling the normal function
// console.log(randomNumber());


//I want to generate a random number with some expectation like Random number should be greater than 0.5. 
async function getRandomNumber(): Promise<number> {

    return new Promise((resolve, reject) => {
        const random = Math.random();
        console.log(random);
        if (random > 0.5) {
            resolve(random);//if promise is fulfilled return the random number
        } else {
            reject(new Error(`Random number ${random} is less than 0.5. `)) //if promise is rejected return the error message
        }
    })

}


//Creating the asynchronous function with some wait time 
async function getRandomNumberWithTimeout(): Promise<number> {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const random = Math.random();
            console.log(random);
            if (random > 0.5) {
                resolve(random);//if promise is fulfilled return the random number
            } else {
                reject(new Error(`Random number ${random} is less than 0.5. `)) //if promise is rejected return the error message
            }
        }, 3000);


    })

}

//Calling the asynchronous function. 
let value = await getRandomNumberWithTimeout();
console.log(`Random number is ${value}`);


