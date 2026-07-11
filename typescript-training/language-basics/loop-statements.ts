//Loop Statements in TypeScript => Loop statements are nothing but the conditions that we are going to add along with the statements to execute the same code multiple times. 

let name : string = "Aravind";


//Before Loops
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);


//Loop statements are mainly divided into two different categories. 

//1. for loop => When we know the total number of iterations to be executed before itself 
//2. while loop => When we are not sure about the total number of iterations to be executed 

//1. for loop 
//Syntax => for(condition-to-start; condition-to-end; interval) { 
// code to be executed 
// }

for(let i :number = 1;i<=10 ;i++){
    console.log(name);
}


//2. while loop
//Syntax : while(condition-to-start){
//  code to execute
//}

let j : number = 1;
let isPageLoaded : boolean = false;

while(j>0){    
    if(j>5 || isPageLoaded){
        break; //stop the execution and come out of the loop
    }
    console.log("Refresh the page. ")

    j++; //Increment the value of j by 1
}


//Special cases in Loops

//1. for..of loop => Used to iterate over the values of an array 
//2. for..in loop => Use to iterate over the properties of an object. 
//3. do..while loop => Use to execute the block of code at least once, even when the condition is not satisfied. 


//Array
let fruits : string []= ["Apple", "Banana", "Mango", "Grapes"];

//normal for loop
for(let i:number =0 ; i<fruits.length ;i++){
    console.log(fruits[i]);
}

//1. for..of loop => Iterate over each and every value of the given list. 
//Syntax : for(let value of list){
//  code to execute
//}

for(let fruit of fruits){
    console.log(fruit);
}

//2. for..in loop => Iterate over each and every property of the given object.
//Syntax : for(let property in object){
//  code to execute
//}

//create template to store object
interface empInfo {
    "empName": string,
    "empId": number,
    "visaStatus": boolean,
    "address": {
        "city": string,
        "state": string
    }
}

//storing the data
let empDetails : empInfo = {
    "empName": "Bharath",
    "empId": 1234,
    "visaStatus": true,
    "address": {
        "city": "Hyderabad",
        "state": "Telangana"
    }
}

for(let key in empDetails){
    console.log(key);
    console.log(empDetails[key as keyof empInfo]);
}

//do..while loop => Execute the block of code at least once, even when the condition is not satisfied.

//Syntax : do{
//  code to execute
//}while(condition-to-start)

console.log("do..while loop example");
let x : number = 0;
do{
    console.log("Refresh the Page");
    x++;
}while(x > 0);