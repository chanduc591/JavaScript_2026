//Data types in TypeScript are divided into two major categories. 

//1. Primitive Data Types (Immutable data types) (meaning the original value won't change if we just perform some operation on top of that. )
//2. Non-Primitive Data Types (Mutable data types) (meaning the original value will change if we just perform some operation on top of that. )

//Syntax to store data in TypeScript :  declaration variable : datatype = data ;

/*********************************************/
/****************Primitive Datatypes**********/
/*********************************************/

//number => It can store numbers with decimals without decimals. 
let empId: number = 1234;
// empId = "Bharath";
console.log(empId);

let hikePercentage: number = 98.23;

// string => The data type that can store text, characters, words, sentences, etc. It is always enclosed within single or double quotes or backticks.
let empName: string = "Bharath Reddy";
let empRole: string = 'Senior SDET';

//boolean => Boolean data type will be used to store the result of a condition in the form of true or false. 
let isRaining: boolean = true;

//undefined => Undefined represents a variable that has been declared but not assigned any value. 
let age: undefined;
console.log(age);

//null => Null represents a variable that has been declared and assigned a null value or empty value. 
let salary: null = null;
console.log(salary);

//union  => Union represents more than one data type that can be stored within the variable. 
let empAddress: string | number | boolean;

empAddress = "Hyderabad";
empAddress = 500081;
empAddress = true;

//any => Any represents any data type that can be stored within the variable. Indirectly, we are removing the type safety. 

let empData: any;

empData = 1234;
empData = "Bharath";
empData = true;

/*********************************************/
/************Non-Primitive Datatypes**********/
/*********************************************/
// object => Object data type represents a collection of key-value pairs within the curly braces. 

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

//Array => Array can store a list of values. 
let fruits : string []= ["Apple", "Banana", "Mango", "Grapes"];
console.log(fruits.length);
console.log(fruits[2]);
let prices : number []= [100, 200, 300, 400];
console.log(prices.length);
console.log(prices[2]);
let fruitsAndPrices : (string | number) [] = ["Apple", 100, "Banana", 200, "Mango", 300, "Grapes", 400];
console.log(fruitsAndPrices.length);
console.log(fruitsAndPrices[2]);

//Tuples : Tuple is an ordered array that represents a list of values in a specific order. 

//Problem Statement : I want to store employee name, employee phone number, and employee visa status together. 

//Array :
let empInformation : (string | number | boolean ) []= ["Bharath Reddy", 9553220022, true, "Hyderabad"];

//Tuple :
let empDetail : [string, number, boolean] = ["Bharath Reddy", 9553220022, true ];

//function => Function is a data type that represents a block of code or collection of statements written together to complete a specific task. 

function loginIntoApplication(BrowserName:string, Username:string, Password:string):void { //void meaning no data returned
    console.log(`Launch the ${BrowserName} Browser`);
    console.log("Enter the URL: https://www.icici.com/");
    console.log(`Enter the username as ${Username} and password as ${Password}`);
    console.log("Click on the login button");
}

function getAccountBalance() :number {
    console.log("Navigate to the account balance page");
    let accountBalance :number= 100000;
    return accountBalance;
    // console.log(accountBalance);
}

//set => Set is a data type that represents a collection of unique values of any data type. 
let empIds : Set <number | string>= new Set(); //Creating New Empty Set 
empIds.add(1234);//Adding value to the set. 
empIds.add(1235);
empIds.add(1234);
empIds.add("ONE TWO THREE FOUR");
empIds.add(1238);

console.log(empIds.size);
console.log(empIds);

//Map => Map is a data type that represents a collection of key-value pairs where the keys can be of any data type.
let empValues : Map<string , number | boolean | string>= new Map(); //duplicate keys are not allowed in the map.
empValues.set("empId", 1234);
empValues.set("visaStatus", true);
empValues.set("address", "Hyderabad");
empValues.set("empId", 1235);//duplicate key, so the value will be updated to 1235

console.log(empValues.size);
console.log(empValues.get("empId"));


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