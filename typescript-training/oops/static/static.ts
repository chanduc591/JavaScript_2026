//Main Class
//static in typescript : Static properties will be shared across the classes. 
//Because of that reason, you don't need to create any object to access the static property from the class. 

class Person {

    static name: string = "Bharath Reddy";
    name : string = "Sarath Reddy";
    age: number = 35;
    city: string = "Hyderabad";

    //Method to display the data
    static printData1() {
        console.log(this.name);
    }

    printData2() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.city);
    }

}

let obj = new Person();
console.log(Person.printData1());
console.log(obj.printData2());