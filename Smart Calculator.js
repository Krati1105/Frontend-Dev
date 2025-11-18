"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

console.log("\n--- Smart Calculator Report ---\n");

class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

function calculate(op, a, b) {
    try {
        let result;

        switch (op) {
            case "add":
                result = a + b;
                break;

            case "subtract":
                result = a - b;
                break;

            case "divide":
                if (b === 0) throw new Error("Cannot divide by 0");
                result = a / b;
                break;

            case "power":
                result = a ** b;
                break;

            case "root":
                if (a < 0) throw new Error("Cannot take square root of negative number");
                result = Math.sqrt(a);
                break;

            default:
                throw new InvalidOperationError(`Unknown operation: ${op}`);
        }

        console.log(`Operation: ${op}\nInput: (${a}, ${b})\nResult: ${result}\n---------------------`);

    } catch (error) {
        console.log(`Operation: ${op}\nInput: (${a}, ${b})\nERROR → ${error.name}: ${error.message}\n---------------------`);
    }
}


for (let op of operations) {
    calculate(op, num1, num2);
}