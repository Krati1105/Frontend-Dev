let count = 0;

function increment() {
    function updateCount() {
        count++;
        console.log("Count after increment:", count);
    }
    updateCount();
}

function decrement() {
    function updateCount() {
        count--;
        console.log("Count after decrement:", count);
    }
    updateCount();
}

console.log("------ Event-Based Counter Simulation ------");
increment();
increment();
decrement();
increment();
decrement();
decrement();
console.log("---------------------------------------------");
