//Program : Program is all about a set of instructions. 

//1. Launch the Chrome browser. 
//2. Navigate to the URL: https://www.google.com
//3. Click on the Gmail link. 
//4. Enter username as Bharath, password as Bharath123 in the login page.
//5. Click on the Sign in button.
//6. Verify the title of the page is "Gmail". 


//Instruction : Instruction is a combination of data plus action that we want to complete by using the data. 



//How to strore data in a program?
//declaration variable = data ;

//In JavaScript, we can declare the variables by using three different keywords. 

//1. var (We should avoid in the modern JavaScript )
//2. let (Used for the variables that can be re-assigned. )
//3. const (Used for constant values that cannot be reassigned. )

//These three different variable declarations will differ mainly based on four important parameters.

//1. Initialization 
//2. Reassignment 
//3. Re-declaration 
//4. Scope 


//1. Initialization => Adding the value at the time of declaration 
var a; //It is not mandatory to store the data at the beginning 
let b; //It is not mandatory to store the data at the beginning 
const c =10; //It is mandatory to store the data at the beginning. 

//2. Reassignment => Changing the original value 
a = 10; //var will allow reassignment
b=20; //let will allow reassignment
//c=30; //const won't allow reassignment. 

//3. Re-declaration => declaring same variable again to store different data 
var a = "bharath"; //var will allow re-declaration
//let b = "sarath"; //let won't allow re-declaration
//const c = "Ramakanth";//const won't allow re-declaration.

//4. Scope => The area of the program where the variable is accessible.
//var => not block scoped
//let => block scoped
//const => block scoped

{
    let x = 10;
    const y = 20;
    var z = 30;

    // console.log(x);
    // console.log(y);
    // console.log(z);
}

    // console.log(x);
    // console.log(y);
    console.log(z);