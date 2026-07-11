//String :  String is a collection of characters. 

let firstName: string = "Bharath";
let lastName: string = 'Reddy';
let fullName: string = `My name is ${firstName} ${lastName}`;
console.log(fullName);

//1. Storing a string in a variable
console.log("************Storing a string in a variable************");
let originalString: string = " Username : Admin | Password : admin123 ";
console.log(originalString);

//2. Method to calculate the total number of characters available in the string. => string.length
console.log("************Calculating the total number of characters in the string************");
console.log(`Total number of characters: ${originalString.length}`);

//3. Method to get a particular character from a specific index => string.charAt(Index)
console.log("************Getting a particular character from a specific index************");
let index: number = 5;
console.log(`Character at index ${index}: ${originalString.charAt(index)}`);

//Reverse the string. 
console.log("************Reverse the string************");
let reverseString: string = "";
for (let i = originalString.length - 1; i >= 0; i--) {
    reverseString = reverseString + originalString.charAt(i);
}
console.log(reverseString);

//4. Method to remove unwanted spaces from the string 
console.log("************Method to remove unwanted spaces from the string************");
console.log(`Original String: "${originalString}"`);
let trimmedString: string = originalString.trim();
console.log(`Trimmed String: "${trimmedString}"`);

//5. Method to remove all the spaces from the string. => string.replace(/chars-to-be-replaced/g, '');
let stringWithoutSpaces: string = originalString.replace(/ /g, '');
console.log(`Original String: "${originalString}"`);
console.log(`String without spaces: "${stringWithoutSpaces}"`);

//6. Method to remove all the alphabets from the string. => string.replace(/chars-to-be-replaced/g, '');
let stringWithoutAlphabets: string = originalString.replace(/[a-zA-Z]/g, '');
console.log(`Original String: "${originalString}"`);
console.log(`String without alphabets: "${stringWithoutAlphabets}"`);

//7. Method to remove all the numbers from the string. => string.replace(/chars-to-be-replaced/g, '');
let stringWithoutNumbers: string = originalString.replace(/[0-9]/g, '');
console.log(`Original String: "${originalString}"`);
console.log(`String without numbers: "${stringWithoutNumbers}"`);

//8. Method to remove all the special characters from the string. => string.replace(/chars-to-be-replaced/g, '');
let stringWithoutSpecialChars: string = originalString.replace(/[^a-zA-Z0-9]/g, '');
console.log(`Original String: "${originalString}"`);
console.log(`String without special characters: "${stringWithoutSpecialChars}"`);

//9. Method to convert the string into uppercase. => string.toUpperCase()
console.log("************Method to convert the string into uppercase************");
let upperCaseString: string = originalString.toUpperCase();
console.log(`Original String: "${originalString}"`);
console.log(`Uppercase String: "${upperCaseString}"`);

//10. Method to convert the string into lowercase. => string.toLowerCase()
console.log("************Method to convert the string into lowercase************");
let lowerCaseString: string = originalString.toLowerCase();
console.log(`Original String: "${originalString}"`);
console.log(`Lowercase String: "${lowerCaseString}"`);

//11. Extract part of the string. 
console.log("************Extract part of the string************");
let username: string = originalString.substring(12, 17);
let password: string = originalString.substring(31);
console.log(`Original String: "${originalString}"`);
console.log(`Extracted String: "${username}"`);
console.log(`Extracted String: "${password}"`);

//11. Extract part of the string from dynamic text
console.log("************Extract part of the string from dynamic text************");
let splittedString: string[] = originalString.split(" ");
let user: string = splittedString[3];
let pass: string = splittedString[7];
console.log(`Original String: "${originalString}"`);
console.log(`Extracted String: "${user}"`);
console.log(`Extracted String: "${pass}"`);

//12. Methods to compare two different string values 
console.log("************Methods to compare two different string values************");
//== (loose equality)==> It will compare only the value of the string. 
//=== (strict equality) ==> It will compare both value as well as data type. 
//includes() => It will check whether the string contains a specific value or not. 
//startsWith() => It will check whether the string starts with a specific value or not. 
//endsWith() => It will check whether the string ends with a specific value or not. 
let string1: string | number = "10";
let string2: string | number = 10;
console.log(`Comparing string1: "${string1}" and string2: "${string2}"`);
//console.log(`Loose Equality (==): ${string1 == string2}`);  
//console.log(`Strict Equality (===): ${string1 === string2}`);
console.log(`Includes "hara": ${"Bharath".includes("hara")}`);
console.log(`Starts with "Bha": ${"Bharath".startsWith("Bha")}`);
console.log(`Ends with "rath": ${"Bharath".endsWith("rath")}`);

//13. Method to convert String to number or other data types and vice versa 
console.log("************Method to convert String to number or other data types and vice versa************");
let std : number = 144;
let phone : number = 123456;
let stdCode : string = String(std); //"144"
console.log(stdCode+phone);

let balance : string = " Account balance: $19,999.99 ";
balance = balance.replace(/[^0-9.]/g, "");
console.log(balance)
let bal : number = parseFloat(balance);
console.log(bal >= 10000);