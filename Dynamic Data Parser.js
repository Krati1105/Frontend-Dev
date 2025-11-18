"use strict";

const validNumbers = [];
const invalidNumbers = [];

console.log("\n--- Dynamic Data Parsing Report ---\n");

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];

    const numValue = Number(value);       
    const boolValue = Boolean(value);     
    const strValue = String(value);     

    console.log(`Index ${i} → Original: ${value}, Number: ${numValue}, Boolean: ${boolValue}, String: '${strValue}'`);

    if (!isNaN(numValue) && value !== " " && value !== "" && value !== "NaN" && !String(value).includes("px")) {
        validNumbers.push(numValue);
    } else {
        invalidNumbers.push(value);
    }
}


console.log("\n--- Final Parsed Data Report ---");
console.log("Valid Numeric Values:", validNumbers);
console.log("Invalid Numeric Values:", invalidNumbers);

console.log("\nDetailed Formatting Report:");

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];
    const numValue = Number(value);

    if (validNumbers.includes(numValue)) {
        console.log(`VALUE: ${value} → VALID NUMBER → ${numValue}`);
    } else {
        console.log(`VALUE: ${value} → INVALID NUMBER ❌`);
    }
}
