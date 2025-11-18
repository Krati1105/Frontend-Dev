"use strict";


const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("\n--- Employee Bonus Calculator Report ---\n");

for (let i = 0; i < employees.length; i++) {
    try {
        const emp = employees[i];

        if (!emp.name || emp.salary === undefined || emp.years === undefined) {
            throw new Error(`Missing property in employee entry at index ${i}`);
        }

        const salary = Number(emp.salary);
        const years = Number(emp.years);

        if (isNaN(salary) || isNaN(years)) {
            throw new Error(`Invalid numeric conversion for employee: ${emp.name}`);
        }

        const bonus = years > 3 ? salary * 0.1 : salary * 0.05;

        console.log(`Employee: ${emp.name}\nSalary: ₹${salary}\nYears: ${years}\nBonus Earned: ₹${bonus.toFixed(2)}\n-------------------------`);

    } catch (error) {
        console.log(`Error processing employee at index ${i}: ${error.message}`);
    }
}