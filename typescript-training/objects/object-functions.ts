//Object : Object is a non-primitive data type that can store multiple properties with different data types in the form of a key-value pair. 

// 1. Storing the data inside the object 

interface empInfo {
    "empName": string,
    "empId": number,
    "visaStatus": boolean,
    "salary"?:number,
    "address": {
        "city": string,
        "state": string,
        "country"?: string
    }
}

//storing the data
let empDetails : empInfo = {
    "empName": "Bharath",
    "empId": 1234,
    "visaStatus": true,
    "address": {
        "city": "Hyderabad",
        "state": "Telangana"
    }
}

// 2. Access the data from the object. 
console.log ("***********Access the data from the object.***********");
console.log (empDetails.empId);
console.log (empDetails.address.state);

console.log (empDetails ["empId"]);
console.log (empDetails["address"]["state"]);

// 3. Add additional properties to the existing objects. 
console.log ("***********Add additional properties to the existing objects. ***********");
empDetails.salary = 200000;
empDetails.address.country = "India";
console.log (empDetails);

// 4. Update the existing property of the object. 
console.log ("***********Update the existing property of the object.  ***********");
empDetails.salary = 235000;
empDetails.address.city = "Secundrabad";
console.log (empDetails);

// 5. Deleting the existing property from the object. 
console.log ("***********Deleting  the existing property of the object.  ***********");
delete empDetails.salary ;
console.log (empDetails);

// 6. Verify a particular property exists within the object. 
console.log ("***********Verify a particular property exists within the object. ***********");
console.log ("empId" in empDetails);
console.log ("state" in empDetails.address);

//7. Get all the keys from the object. 
console.log ("***********Get all the keys from the object. ***********");
console.log (Object.keys(empDetails));
console.log (Object.keys(empDetails.address));

//8. Get all the values from the object.
console.log ("***********Get all the values from the object. ***********");
console.log (Object.values(empDetails));
console.log (Object.values(empDetails.address));

//9. Get all the entries from the object.
console.log ("***********Get all the entries from the object. ***********");
console.log (Object.entries(empDetails));
console.log (Object.entries(empDetails.address));

//10. Iterate all the keys from the object and get the value out of it. 
console.log ("***********Iterate all the keys from the object and get the value out of it. ***********");
for (let key in empDetails) {
    console.log (key, empDetails[key as keyof typeof empDetails]);
}

//11. Get the data type of a particular property inside the object. 
console.log ("***********Get the data type of a particular property inside the object. ***********");
console.log (typeof empDetails.empName);
console.log (typeof empDetails.address);


//12. Merge two different objects together and make it a single object. 
console.log ("***********Merge two or more different objects together and make it a single object. ***********");
interface companyInfo {
    "companyName": string,
    "companyId": number
}

let companyDetails : companyInfo = {
    "companyName": "Microsoft",
    "companyId": 1234
}       

let mergedObject = {...empDetails, ...companyDetails};
console.log (mergedObject);