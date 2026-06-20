//Debugging : Debugging is the process of identifying and fixing the errors in the program. 

console.log("Executing Line 1");
console.log("Executing Line 2");
console.log("Executing Line 3");
sumOfNumbers(5,10) ;
console.log("Executing Line 5");
console.log("Executing Line 6");
console.log("Executing Line 7");
console.log("Executing Line 8");
console.log("Executing Line 9");
console.log("Executing Line 10");


//Debugging the program step by step. 

//1. At the break points (before the line where you want to manually execute the program )
//2. Run the program in debug mode. 




//Continue (F5) => Continue the execution till the next break point. 
//Stop (Shift + F5) => Stop the execution of the program.
//Restart (Ctrl + Shift + F5) => Restart the execution of the program from the begining

//Step Over (F10) => Execute the current line and move to the next line. 
//Step Into (F11) => Go inside the function. Check the internal code. 
//Step Out (Shift + F11) => Come out of the function and move to the next line.













//Logic to get the sum of two numbers
function sumOfNumbers(a, b) {
    c= a + b;
    console.log(c);
}