//Abstraction : Abstraction is the concept of hiding the implementation. 

abstract class CommonMethods {

    //Method: Method is all about a block of code or a collection of statements written together to complete a specific task. 

    abstract loginIntoApplication(): void ;

    abstract logoutFromApplication(): void;

    navigateToHomePage(): void {
        console.log("Click on the home button. ")
    }

}

 abstract class Test extends CommonMethods {

    loginIntoApplication(): void {
        console.log("Enter the username. ")
        console.log("Enter the password. ")
        console.log("Click on the login button. ")
    }


    verifyLoginFunctionality(): void {

       this.navigateToHomePage();

    }

}