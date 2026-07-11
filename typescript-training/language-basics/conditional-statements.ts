//Conditional Statements : Statements along with conditions

//Statement : line of code

//So, there are two different types of conditional statements we have in TypeScript. 

//1. If-Else Statement : When we don't know the result of the condition before itself 
//2. Switch Case Statement : When we want to choose one option among multiple options available 


//1. If-Else Statement 

//Syntax : 

// if(condition 1){
//     //code to be executed if condition 1 is true
// } else if(condition 2){
//     //code to be executed if condition 2 is true
// } else if(condition 3)  {
//     //code to be executed if condition 3 is true
// } else{
//     //default code to be executed if all conditions are false
// }

// 1-1 : Nested if-else conditional statement. 

// if(condition 1){
//     //code to be executed if condition 1 is true
        // if(condition){
        //     //code to execute
        // }else{
            //}
// } else if(condition 2){
//     //code to be executed if condition 2 is true
// } else if(condition 3)  {
//     //code to be executed if condition 3 is true
// } else{
//     //default code to be executed if all conditions are false
// }

//Example of if-else conditional statement

let percentage: number = 34;

if (percentage >= 90) {
    console.log("Grade A");
} else if (percentage >= 80) {
    console.log("Grade B");
} else if (percentage >= 70) {
    console.log("Grade C");
} else {
    console.log("Grade D");
}

//Example of nested if-else conditional statement

if (percentage >= 90) {
    console.log("Grade A");
    if (percentage >= 95) {
        console.log("Hey Buddy, You will get gold medal");
    } else if (percentage >= 90) {
        console.log("Hey Buddy, You will get silver medal");
    } else{
        console.log("Hey Buddy, You will get bronze medal");
    }
} else if (percentage >= 80) {
    console.log("Grade B");
} else if (percentage >= 70) {
    console.log("Grade C");
} else {
    console.log("Grade D");   
}


//2. Switch Case Statement


//Example of switch-case conditional statement

let env: string = "uat";

switch (env) {
    case "dev":
        console.log("launch the application with dev.amazon.com");
        break; //break keyword is used to exit from the switch-case block when the case is matched.
    case "qa":
        console.log("launch the application with qa.amazon.com");
        break;
    case "prod":
        console.log("launch the application with amazon.com");
        break;
    default:
        console.log("Please provide the correct environment");
}

