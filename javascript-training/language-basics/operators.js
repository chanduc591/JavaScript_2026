//How to strore data in a program?

//Syntax : declaration variable = data ;

//Operators in JavaScript
//Operators are nothing but a set of special characters used in JavaScript to perform different types of operations. 

//There are mainly five different types of operators we are having in JavaScript. 

//1. Arithmetic Operators
//2. Assignment Operators
//3. Comparison Operators
//4. Logical Operators
//5. Ternary Operator

//1. Arithmetic Operators => The special characters used to perform mathematical operations. (+ , - , * , / , % , ++ , --)
//+ addition o
//- subtraction
//* multiplication
// / division
// % modulus /remainder
// ++ increment (Increase the previous value by 1. )
// -- decrement (Decrease the previous value by 1. )

let a = 10;
let b = 20;

//a++ => post-increment  (Post execution of this line, increase the value by 1. )
//b-- => post-decrement  (Post execution of this line, decrease the value by 1)
console.log(a++); // a= a+1; 10+1 = 11
console.log(a); //next line after post increment
console.log(b--);
console.log(b); //next line after post decrement

//++a => pre-increment  (Before execution of this line, increase the value by 1. )
//--b => pre-decrement  (Before execution of this line, decrease the value by 1)
// console.log(++a);
// console.log(--b);


//2. Assignment Operators : Special characters used to assign values to the variable (= , += , -= , *= , /= , %=)

let i = 10;
console.log("Initial Value of i is : " + i);

i+=10;//i= i+10; i = 10+10 = 20;
console.log("After Using += Value of i is : " + i);

i-=10;//i=i-10 ; 20-10 = 10;
console.log("After Using -= Value of i is : " + i);

i*=10;//i=i*10; 10*10 = 100;
console.log("After Using *= Value of i is : " + i);

i/=10;//i= i/10 = 100/10 = 10;
console.log("After Using /= Value of i is : " + i);

//3. Comparison Operators => Special characters used to compare two values. (== , === , != , > , < , >= , <=)
//== Represents loose equality.(Loose equality compares only data.)
//=== Represents strict equality. (Strict equality compares data along with its data type.)

let x = 10;
let y = "10"; // string / text
let z = 10;

console.log(x==y);//true
console.log(x==z);//true

console.log(x===y);//false
console.log(x===z);//true

console.log(x!=z);//false
console.log(x>z);//false
console.log(x>=z);//true
console.log(x<z);//false
console.log(x<=z);//true

//4. Logical Operators => Special characters used to build the logic by combining multiple conditions together (&& (and), || (or), ! (not))

//&&(and) => We will get a result as true only if all the conditions are true. 
//||(or) => We will get a result as true if any one of the conditions is true.
//!(not) => We will get a result as true if the condition is false.

let p = 10;
let q = 20;
let r = 30;

console.log(p<q && q>r); // true && false = false
console.log(p<q || q>r); // true || false = true
console.log(!(p<q)); //not (true) = false

//5. Ternary Operator : Special character used to write a condition in a single line or shorthand of an if-else conditional statement (?)

//Syntax : let result = condition ?  value-if-true : value-if-false ;

let age = 18.5;

let result = (age >= 18) ? "Eligible" : "Not Eligible" ;
console.log(result);