//Jumping Statements

//Jumping statements are all about the set of keywords we are going to use to stop the execution or to stop the current iteration. 

//There are mainly three jumping statements we have in JavaScript and TypeScript. 

//1. break => Break statement is going to stop the complete execution and come out of the loop. 
//2. continue => Continue statement is going to stop the current iteration and jump to the next iteration. 
//3. return => It will return the value inside the function, so that the function variable will be assigned some value. 

for (let i: number = 1; i <= 10; i++) {

    if (i == 5) {
        continue; 
    }

    console.log(i);
}

function getAccountBalance() :number {
    console.log("Navigate to the account balance page");
    let accountBalance :number= 100000;
    return accountBalance;
    // console.log(accountBalance);
}