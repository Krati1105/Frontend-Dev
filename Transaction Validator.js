"use strict";


const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

console.log("\n--- Transaction Validator Report ---\n");

for (let i = 0; i < transactions.length; i++) {
    try {
        const tx = transactions[i];

       
        if (tx === null) {
            throw new Error("Null transaction entry detected");
        }

        if (tx.id === undefined || tx.amount === undefined) {
            throw new Error(`Missing required property in transaction at index ${i}`);
        }

        if (tx.amount < 0) {
            throw new Error(`Negative transaction amount in id ${tx.id}`);
        }

        validTransactions.push(tx);
        console.log(`Transaction ID ${tx.id} is VALID → Amount: ${tx.amount}`);

    } catch (error) {
        invalidTransactions.push({ index: i, reason: error.message });
        console.log(`Error at transaction index ${i}: ${error.message}`);
    }
}

console.log("\n--- Final Summary ---");
console.log(`Successful Transactions: ${validTransactions.length}`);
console.log(`Failed Transactions: ${invalidTransactions.length}`);

console.log("\nInvalid Transaction Details:");
for (let issue of invalidTransactions) {
    console.log(`Index ${issue.index} → Reason: ${issue.reason}`);
}