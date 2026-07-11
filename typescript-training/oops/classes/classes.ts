//Employee Class 

class Employee {

    //properties /data
    empId : number = 1234;
    empName : string = "John Doe";
    empDepartment : string = "IT";

    //method
    employeeAddress(){
        console.log("Employee Address : 123, Main Street, City, Country");
    }

}

//Access the data from the class  
let obj = new Employee(); // new -> new copy 
console.log(obj.empId);
obj.employeeAddress();