
console.log('\n--- WITHOUT strict mode (for comparison) ---');
function demoLoose(a, a) { 
    total = 10;            
    console.log('total before delete:', total);

    let delStatus = delete total; 
    console.log('delete total (loose mode):', delStatus);
}

demoLoose(5, 10);


console.log('\n--- WITH strict mode: show each error separately ---');

try {
    eval('"use strict"; function demoDup(a,a) { /* body */ }');
} catch (err) {
    console.log('Duplicate params error ->', err.name + ':', err.message);
}

try {
    eval('"use strict"; implicitGlobal = 42;');
} catch (err) {
    console.log('Implicit global error ->', err.name + ':', err.message);
}

try {
    eval('"use strict"; let x = 5; delete x;');
} catch (err) {
    console.log('Illegal delete error ->', err.name + ':', err.message);
}

try {
    eval(`"use strict";
        // The following line causes a SyntaxError at parse time (duplicate params)
        function demoCombined(a,a) {
            implicitGlobal = 1; // would have caused ReferenceError if reached
        }
        demoCombined(1,2);
    `);
} catch (err) {
    console.log('Combined eval parse-time error ->', err.name + ':', err.message);
}


console.log('\n--- Correct ES6 Version (strict mode enabled) ---');

"use strict"; 
function demoFixed(x, y) {
    let total = 10;
    console.log('Total =', total);
    return total;
}

demoFixed(5, 10);


console.log('\n--- Summary ---');
console.log('- Duplicate parameter names are rejected by strict mode at parse-time (SyntaxError).');
console.log('- Assigning to an undeclared identifier throws ReferenceError in strict mode.');
console.log('- Deleting a direct variable binding is illegal in strict mode.');
console.log('- Test each restriction in isolation (as shown) to observe precise errors.');
