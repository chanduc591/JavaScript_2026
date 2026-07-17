//Data types in JavaScript are divided into two major categories. 

//1. Primitive Data Types (Immutable data types) (meaning the original value won't change if we just perform some operation on top of that. )
//2. Non-Primitive Data Types (Mutable data types) (meaning the original value will change if we just perform some operation on top of that. )

//Immutable
// let a = 10;
// a+10;
// console.log(a);

//Mutable
// let empData = {
//     "name" :"Bharath",
//     "empId":1234
// }
// empData.age = 35;
// console.log(empData);

/*********************************************/
/****************Primitive Datatypes**********/
/*********************************************/

// number
// string
// boolean
// undefined
// null
// symbol


// number => The data type that can store numbers with decimals or without decimals, without any quotations 
let num1 = 10;
let num2 = 10.5;
console.log(typeof num1);
console.log(typeof num2);

// string => The data type that can store text, characters, words, sentences, etc. It is always enclosed within single or double quotes or backticks.
let empName = "Bharath Reddy";
let empRole = '"Senior" SDET';
console.log(typeof empName);
console.log(typeof empRole);

let empInfo = `emp name is ${empName} and emp role is ${empRole}`;
console.log(empInfo);

let x = 10;
let y = "10";
let z = 10;
console.log(x + y);//concatenation operation
console.log(x + z);//arithmetic operation

//boolean => Boolean data type will be used to store the result of a condition in the form of true or false. 
let isRaining = true;
let isSunny = false;
console.log(typeof isRaining);
console.log(typeof isSunny);

//undefined => Undefined represents a variable that has been declared but not assigned any value. 
let age;
console.log(age);

//null => Null represents a variable that has been declared and assigned a null value or empty value. 
let salary = 100000;
console.log(salary);
salary = null;
console.log(salary);

//Symbol 


/*********************************************/
/************Non-Primitive Datatypes**********/
/*********************************************/

// object => Object data type represents a collection of key-value pairs within the curly braces. 

// let empName = "Bharath";
// let empId = 1234;
// let visaStatus = true;

let empData = {
    "empName": "Bharath",
    "empId": 1234,
    "visaStatus": true,
    "address": {
        "city": "Hyderabad",
        "state": "Telangana"
    }
}

//Access the data from the object. 
console.log(empData.empId);
console.log(empData.address.city);

console.log(empData["empId"]); // objectName["keyName"] = value
console.log(empData["address"]["city"]); // objectName["keyName"]["keyName"] = value



let key = "empName";
console.log(empData[key]); //Bharath
console.log(empData.key); //undefined

//Array => Array is nothing but a list of values in JavaScript. 
let fruits = ["Apple", "Banana", "Mango", "Grapes"];
console.log(fruits.length);
console.log(fruits[2]);
let prices = [100, 200, 300, 400];
console.log(prices.length);
console.log(prices[2]);
let fruitsAndPrices = ["Apple", 100, "Banana", 200, "Mango", 300, "Grapes", 400];
console.log(fruitsAndPrices.length);
console.log(fruitsAndPrices[2]);

//function => Function is a data type that represents a block of code or collection of statements written together to complete a specific task. 

function loginIntoApplication(BrowserName, Username, Password) {
    console.log(`Launch the ${BrowserName} Browser`);
    console.log("Enter the URL: https://www.icici.com/");
    console.log(`Enter the username as ${Username} and password as ${Password}`);
    console.log("Click on the login button");
}

function getAccountBalance() {
    console.log("Navigate to the account balance page");
    let accountBalance = 100000;
    return accountBalance;
}

//set => Set is a data type that represents a collection of unique values of any data type. 
let empIds = new Set(); //Creating New Empty Set 
empIds.add(1234);//Adding value to the set. 
empIds.add(1235);
empIds.add(1234);
empIds.add(1237);
empIds.add(1238);

console.log(empIds.size);
console.log(empIds);

//Map => Map is a data type that represents a collection of key-value pairs where the keys can be of any data type.
let empDetails = new Map(); //duplicate keys are not allowed in the map.
empDetails.set("empId", 1234);
empDetails.set("visaStatus", true);
empDetails.set("address", "Hyderabad");
empDetails.set("empId", 1235);//duplicate key, so the value will be updated to 1235

console.log(empDetails.size);
console.log(empDetails.get("empId"));

//Date => Date is a data type that represents a specific point in time, including the date and time information.
let currentDate = new Date();
console.log(currentDate);

//get current year, month, date, hours, minutes, seconds , day
console.log(currentDate.getFullYear()); //2026
console.log(currentDate.getMonth());//0-11 (0=January, 1=February, 2=March, 3=April, 4=May, 5=June, 6=July, 7=August, 8=September, 9=October, 10=November, 11=December)
console.log(currentDate.getDate());//23
console.log(currentDate.getHours());//21
console.log(currentDate.getMinutes());//08
console.log(currentDate.getSeconds());//33
console.log(currentDate.getDay());//0-6 (0=Sunday, 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday)