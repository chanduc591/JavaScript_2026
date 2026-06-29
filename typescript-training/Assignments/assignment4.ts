// Storing the transactions in an array (Data Structure)
const transactions: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

// Initializing counters and accumulators
let creditCount: number = 0;
let debitCount: number = 0;
let totalCredited: number = 0;
let totalDebited: number = 0;
let suspiciousCount: number = 0;


// Loop through each transaction
for (const amount of transactions) {
    // 4. Check for suspicious transactions (exceeding +/- 10000)
    if (amount >= 10000) {
        console.log(`Suspicious credit Transaction with Amount: ${amount}`);
        suspiciousCount++;
    } else if (amount <= -10000) {
        console.log(`Suspicious debit Transaction with Amount: ${amount}`);
        suspiciousCount++;
    }

    // 1 & 2. Categorize as Credit or Debit and calculate totals
    if (amount > 0) {
        creditCount++;
        totalCredited += amount;
    } else if (amount < 0) {
        debitCount++;
        totalDebited += Math.abs(amount); // Using absolute value for total debited presentation
    }
}

// 3. Calculate remaining balance
const remainingBalance: number = totalCredited - totalDebited;

console.log(`Total Credit Transactions: ${creditCount}`);
console.log(`   Total Debit Transactions: ${debitCount}`);
console.log(`Total Amount Credited: ${totalCredited}`);
console.log(`   Total Amount Debited: ${totalDebited}`);
console.log(`Total Amount Remaining in Account: ${remainingBalance}`);
console.log(`Total Number of Suspicious Transactions: ${suspiciousCount}`);