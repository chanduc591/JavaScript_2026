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
console.log(x+y);//concatenation operation
console.log(x+z);//arithmetic operation