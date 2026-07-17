// Test Case 1: verify the home page.
console.log("******************TEST CASE 1: VERIFY THE HOME PAGE******************");
loginIntoApplication("Chrome", "Bharath", "Bharath123");
console.log("Verify the home page is displayed or not");
logoutAndCloseBrowser();

// Test Case 2: verify the account balance
console.log("******************TEST CASE 2: VERIFY THE ACCOUNT BALANCE******************");
loginIntoApplication("Firefox", "Senthil", "Senthil123");
console.log("Verify the home page is displayed");
console.log("Verify the account balance is displayed as " +  getAccountBalance());
logoutAndCloseBrowser();

// Test Case 3: verify the account statement
console.log("******************TEST CASE 3: VERIFY THE ACCOUNT STATEMENT******************");
loginIntoApplication("Edge", "Manisha", "Manisha123");
console.log("Verify the home page is displayed");
console.log("Navigate to the account statement page");
console.log("Verify the account statement is displayed with the following details:");
logoutAndCloseBrowser();


function loginIntoApplication(BrowserName, Username, Password) {
    console.log(`Launch the ${BrowserName} Browser`);
    console.log("Enter the URL: https://www.icici.com/");
    console.log(`Enter the username as ${Username} and password as ${Password}`);
    console.log("Click on the login button");
}

function getAccountBalance() {
    console.log("Navigate to the account balance page");
    let accountBalance = 100000;
    return accountBalance;
}

// function loginIntoApplicationInChrome(){
//     console.log("Launch the Chrome Browser");
//     console.log("Enter the URL: https://www.icici.com/");
//     console.log("Enter the username as 'Bharath' and password as 'Bharath@123'");
//     console.log("Click on the login button");
// }

// function loginIntoApplicationInFirefox(){
//     console.log("Launch the Firefox Browser");
//     console.log("Enter the URL: https://www.icici.com/");
//     console.log("Enter the username as 'Bharath' and password as 'Bharath@123'");
//     console.log("Click on the login button");
// }

//function without any parameters and return type 
function logoutAndCloseBrowser() {
    console.log("Logout from the application");
    console.log("Close the browser");
}

//1. Identify the duplicate code and separate the same from the program.
//2. Separate the duplicate code and add inside the curly braces outside of program.
//3. Add a unique name to call whenever it's required. (function variable())

