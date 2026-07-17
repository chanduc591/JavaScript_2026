//Callback functions :


//Program 
console.log("Execution Started");
console.log("Line 2 executed Successfully");
console.log("Line 3 executed Successfully");
console.log("Line 4 executed Successfully");
setTimeout(() => { //Calling the SUM of NUMBER function at the end of the execution 
    console.log(sumOfNumbers(10000000000));
},5000) // At the end of execution, call this function after 5 seconds. 
console.log("Line 6 executed Successfully");
console.log("Line 7 executed Successfully");
console.log("Execution Completed Successfully");
//wait for 5 sec
//then call the sumOfNumbers function and print the result in console.












//Function to get the sum of numbers from 1 to the given input number 
function sumOfNumbers(input: number): number {
    let sum = 0;
    for (let i = 1; i <= input; i++) {
        sum += i;
    }
    return sum;
}
