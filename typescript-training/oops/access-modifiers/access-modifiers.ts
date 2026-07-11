// Access modifiers are nothing but a set of keywords used to control the access of data and methods stored inside the class. 

// There are 3 types of access modifiers in TypeScript: public, protected , private

//1. public /no keyword  => Data and methods can be accessible everywhere. (within the class,child class and outside class) 
//2. protected => We can access only within the current class and child class. We cannot access the data form outside class
//3. private => We can access only within the current class. We cannot access the data from outside class and child class.


// 1. public

//Public data can be accessed within the class. 
//Public data can be accessed within the child class.
//Public data can be accessed outside the class.

// 2. protected

//protected data can be accessed within the class. 
//protected data can be accessed within the child class.
//protected data cannot be accessed outside the class.

// 3. private

//private data can be accessed within the class. 
//private data cannot be accessed within the child class.
//protected data cannot be accessed outside the class.

//Main Class
class Person {

    private name: string = "Bharath Reddy";
    private age: number = 35;
    private city: string = "Hyderabad";

    //Method to display the data
    printData() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.city);
    }

}

//Child Class
class Child extends Person {

    //Method to access the data from parent class (Person)
    printChildData() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.city);

    }
}

//Outsider Class
class Outsider {
    //Method to display the data
    printOutsiderData() {
        let obj = new Person();
        console.log(obj.name);
        console.log(obj.age);
        console.log(obj.city);
    }
}


let obj = new Person();
obj.printData(); //Accessing the data from main class

