let age: number = 15;

if (age < 18) {
    throw new Error("Age is less than 18, Not eligible for voting");
} else {
    console.log("Age is greater than 18, Eligible for voting");
}

console.log("Execution is completed");