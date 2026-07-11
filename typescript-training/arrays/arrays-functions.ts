//Array :  Array is a collection of multiple values. 

//1. Storing the values within the array 
console.log("**********Storing the values within the array**********");
let fruits: string[] = ["Apple", "Banana", "Mango", "Grapes"];
let prices: number[] = [100, 200, 300, 400];
let fruitsAndPrices: (string | number)[] = ["Apple", 100, "Banana", 200, "Mango", 300, "Grapes", 400];

//2. Accessing the values from the array
console.log("**********Accessing the values from the array**********");
console.log(fruits);
console.log(fruits[0]);
console.log(prices);
console.log(prices[2]);
console.log(fruitsAndPrices);
console.log(fruitsAndPrices[3]);
console.log(fruits.length);

//3. Adding additional values to the existing array at the end 
console.log("**********Adding additional values to the existing array at the end**********");
fruits.push("Orange");
prices.push(500);
fruitsAndPrices.push("Orange", 500);
console.log(fruits);
console.log(prices);
console.log(fruitsAndPrices);

//4. Remove existing values from the array at the end. 
console.log("**********Remove existing values from the array at the end**********");
fruits.pop();
prices.pop();
fruitsAndPrices.pop();
console.log(fruits);
console.log(prices);
console.log(fruitsAndPrices);

//5. Adding additional values to the existing array at the beginning
console.log("**********Adding additional values to the existing array at the beginning**********");
fruits.unshift("Orange");   
prices.unshift(500);
fruitsAndPrices.unshift("Orange", 500);
console.log(fruits);
console.log(prices);
console.log(fruitsAndPrices);

//6. Remove existing values from the array at the beginning
console.log("**********Remove existing values from the array at the beginning**********");
fruits.shift();
prices.shift();
fruitsAndPrices.shift();
console.log(fruits);
console.log(prices);
console.log(fruitsAndPrices);

//7. Adding additional values to the existing array at a specific index
console.log("**********Adding additional values to the existing array at a specific index**********");
//Syntax : arrayName.splice(index,number-of-values-to-be-deleted,values-to-be-added);
fruits.splice(2, 3, "Papaya", "Pineapple");
console.log(fruits);

//8.Create a new array by extracting the part of the values from the existing array. 
console.log("**********Create a new array by extracting the part of the values from the existing array**********");
//Syntax : arrayName.slice(starting-index,ending-index+1);
let newFruits: string[] = fruits.slice(1, 4);
console.log(newFruits);

//9. Create a new array by merging the existing arrays.
console.log("**********Create a new array by merging the existing arrays**********");
let veggies: string[] = ["Carrot", "Potato", "Tomato"];
let fruitsAndVeggies: string[] = fruits.concat(veggies);
console.log(fruitsAndVeggies);

//10.Find the index of a specific value within the array. 
console.log("**********Find the index of a specific value within the array**********");
console.log(fruits);
let index: number = fruits.indexOf("Papaya");
console.log(index);

//11.Iterate all the values from the array. 
console.log("**********Iterate all the values from the array**********");
for (let fruit of fruits) {
    console.log(fruit);
}

//12. Reverse the values within the array. 
console.log("**********Reverse the values within the array**********");
fruits.reverse();
console.log(fruits);

for (let i:number=fruits.length-1; i>=0; i--){
    console.log(fruits[i]);
}

//13. Sort the values within the array.
console.log("**********Sort the values within the array**********");
fruits.sort();
console.log(fruits);
prices.sort((a,b)=>b-a); //descending order
console.log(prices);
fruitsAndPrices.sort();
console.log(fruitsAndPrices);