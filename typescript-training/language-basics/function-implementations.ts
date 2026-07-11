//Function : Block of code or a collection of statements written together to complete a specific task. 

//There are multiple ways we can implement the functions in TypeScript. 

//1. Function without parameters and without return type 
//Function is not going to accept any parameters, and then it is not going to return any output value. 

function login(): void {
    console.log("Launch the Chrome browser.");
    console.log("Enter the URL: www.amazon.com ");
    console.log("Enter username as Bharath and password as Bharath123. ");
    console.log("Click on the Login button. ");
}

//calling function
login();

//2. Function with parameters and without return type 
//A function is going to accept some parameters to update the data dynamically inside the function, and it is not going to return any output value.

function loginWith(username: string, password: string): void {
    console.log("Launch the Chrome browser.");
    console.log("Enter the URL: www.amazon.com ");
    console.log(`Enter username as ${username} and password as ${password}. `);
    console.log("Click on the Login button. ");
}

//calling function
loginWith("Aiswarya", "Asiwarya123");
loginWith("Akshay", "Akshay123");

//3. Function with parameters and with return type 
//Function that is going to accept some parameters to update the data dynamically inside the function, and it is going to give some output value as well. 

function getAccountBalance(username: string, password: string): number {
    console.log("Launch the Chrome browser.");
    console.log("Enter the URL: www.icici.com ");
    console.log(`Enter username as ${username} and password as ${password}. `);
    console.log("Click on the Login button. ");
    console.log("Click on the account section. ");
    const accountBalance: number = 10000;
    return accountBalance;
}

//printing account balance
console.log(getAccountBalance("Bharath", "Bharath123"));

//4. Function without parameters and with return type 
//Function that is not going to accept any parameters, but it is going to return some value. 
function getCurrentYear(): number {
    let date = new Date();
    return date.getFullYear();
}

//calling function
console.log(getCurrentYear());

//5. Function with optional parameters. 
//Function Which is going to accept some optional parameters,
// Meaning even if you are not going to enter the parameter, still it is not going to throw any error and execute the function. 

function printEmpDetails(empName: string, empId: number, empAge?: number): void {
    console.log(`Employee name is  ${empName}`);
    console.log(`Employee id is  ${empId}`);
    if (empAge)
        console.log(`Employee age is  ${empAge}`);
}

//calling function
printEmpDetails("Senthil", 1234);
printEmpDetails("Bharath", 1235, 35);

//6. Function with default parameters 
//Function is created with some default values so that if the user is not going to enter any value, it is going to consider the default value. 

function printEmpInto(empName: string, empId: number, comingToMovie:boolean = false): void {
    console.log(`Employee name is  ${empName}`);
    console.log(`Employee id is  ${empId}`);
    console.log(`Employee is interested to join  ${comingToMovie}`);
}

//calling function
printEmpInto("Senthil", 1234);
printEmpInto("Bharath", 1235, true);

//7. Function with rest Parameters 
//Function is going to accept multiple values as an array.

function sumOfNumbers(...numbers : number []){
    let sum: number = 0;
    for (let num of numbers){
        sum+=num;
    }
    return sum;
}

console.log(sumOfNumbers(1,2,3,4));

