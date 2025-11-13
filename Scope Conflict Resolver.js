let bonus = 5000;
function calculateSalary() {
    let salary = 40000;         
    let isPermanent = true;     

    if (isPermanent) {
        let totalSalary = salary + bonus;
        console.log("Employee Status: Permanent");
        console.log("Total Salary (with bonus):", totalSalary);
    } else {
        let totalSalary = salary;
        console.log("Employee Status: Temporary");
        console.log("Total Salary (without bonus):", totalSalary);
    }

    console.log("Inside function → isPermanent =", isPermanent);
}


console.log("---- First Calculation ----");
calculateSalary();

console.log("\nChanging global variable 'bonus'...");
bonus = 8000; 

console.log("\n---- Second Calculation (after bonus change) ----");
calculateSalary();


console.log("\nTrying to access 'isPermanent' outside function:");
try {
    console.log(isPermanent); 
} catch (error) {
    console.log("Error:", error.message);
}
