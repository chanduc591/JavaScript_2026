//Polymorphism is a concept of having multiple implementations for the single method. 

//In other languages, we usually have two different types of polymorphism. 

//1. Compiletime polymorphism (Method Overloading)
//2. Runtime polymorphism (Method Overriding)

// But in TypeScript, we can only achieve runtime polymorphism.

class Parent {

    loginIntoApplication(): void {
        console.log("Enter the username. ")
        console.log("Enter the password. ")
        console.log("Click on the login button. ")
    }

}



class Child extends Parent {

    //Compile-time polymorphism: meaning having multiple methods with the same name within the same class with different parameters 

    // add(a: number, b: number): void {
    //     console.log(a + b);
    // }

    // add(x: string, y: string): void {
    //     console.log(x + y);
    // }

  
    //Runtime polymorphism: meaning having multiple methods with the same name in parent and child classes with the same parameters.
    loginIntoApplication(): void {
        console.log("Launch the browser.  ")
        console.log("Enter the URL.  ")
        console.log("Enter the username. ")
        console.log("Enter the password. ")
        console.log("Click on the login button. ")
    }


}

let obj = new Child();
obj.loginIntoApplication();