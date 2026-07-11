//Encapsulation : Encapsulation is a concept of hiding the information. 

 
//Main Class
class Person {

    private name: string = "";
    private age: number = 35;
    private city: string = "Hyderabad";

    //Method to display the data
    printData() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.city);
    }

    //method to get the person name
    public getName() : string{
        return this.name;
    }

    //method to set  the new person name
    public setName(newName:string) : void{
        this.name = newName;
    }

}

//Outsider Class
class Outsider {
    //Method to display the data
    printOutsiderData() {
        let obj = new Person();
        obj.setName("Sarath Reddy");
        console.log(obj.getName());
    }
}


let obj1 = new Person();
obj1.setName("Bharath Reddy");
obj1.getName(); //Accessing the data from main class

let obj = new Outsider();
obj.printOutsiderData(); //Accessing the data from main class

