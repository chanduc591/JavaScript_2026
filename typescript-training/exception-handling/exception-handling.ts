//Exception Handling: Meaning, Handle the Exceptions / Control the exceptions. 

//Handle the exception. Whenever there is any exception, I want to ignore those exceptions and I want to continue the execution process. 
//Other way, When there is no exception, I want to create my own exception and fail the program intentionally. 

//try catch block is used to handle the exceptions.
//throw keyword is used to create our own exception.


//Syntax of try catch block

// try{
//     //original code which may throw an exception
// } catch (error) {
//     //handle the exception and execute the alternative code
// } 


let input: any;
try {
    console.log(input.toLowerCase());
} catch (error) {
    console.log("Exception is handled and execution is continued");
    console.log(input.toUpperCase());
} finally {
    console.log("Execution is Completed"); //mandatory block even if try and block is executed or not.
}

//Syntax of throw an custom exception