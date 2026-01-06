// Q6: Employee Management System (Classes + Object Methods)
// Employee class with id, name, department, salary.
// Methods: getAnnualSalary(), applyBonus(percent).
// Create 5 employees, calculate annual salary, use reduce for total payout.

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    // Get annual salary (assuming monthly salary)
    getAnnualSalary() {
        return this.salary * 12;
    }

    // Apply bonus
    applyBonus(percent) {
        this.salary += (this.salary * percent) / 100;
    }
}

// Create 5 employee objects
const employees = [
    new Employee(1, 'Alice', 'HR', 5000),
    new Employee(2, 'Bob', 'IT', 6000),
    new Employee(3, 'Charlie', 'Finance', 5500),
    new Employee(4, 'Diana', 'Marketing', 4500),
    new Employee(5, 'Eve', 'Sales', 4800)
];

// Calculate annual salary for each and display
console.log('Employee Annual Salaries:');
employees.forEach(emp => {
    console.log(`${emp.name}: $${emp.getAnnualSalary()}`);
});

// Calculate total annual payout using reduce
const totalPayout = employees.reduce((total, emp) => total + emp.getAnnualSalary(), 0);
console.log(`Total Annual Payout: $${totalPayout}`);
