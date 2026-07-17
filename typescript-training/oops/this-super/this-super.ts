//this & super in typescript

//this keyword refers to the current instance of the class
//super keyword is used to access properties and methods of the parent class

let name = "Bharath Reddy";


//Main Class
class Person {

    name: string = "Bharath Reddy";
    age: number = 35;
    city: string = "Hyderabad";

    //Method to display the data
    printData() {
        console.log(name);
        console.log(this.age);
        console.log(this.city);
    }

}


//Child 1 Class
class Child extends Person {

    state: string = "Telangana";
    //Method to display the data
    printChildData() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.city);
        console.log(this.state);
    }
}