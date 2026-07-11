//Employee Class 

class Employee {

    constructor(){

    }

    //properties /data
    empId : number = 1234;
    empName : string = "John Doe";
    empDepartment : string = "IT";

    //method
    employeeAddress(emp:string){
        console.log("Employee Address : 123, Main Street, City, Country");
    }

}

//Access the data from the class  
let obj = new Employee(); // new -> new copy 
console.log(obj.empId);
// obj.employeeAddress();