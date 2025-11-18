"use strict";


const userLimit = (() => {
    const arg = (typeof process !== 'undefined' && process.argv && process.argv[2]) ? process.argv[2] : undefined;
    const parsed = Number(arg);
    return (arg !== undefined && !isNaN(parsed) && parsed > 0) ? parsed : 5;
})();

console.log(`\n--- Pyramid Pattern Generator (limit = ${userLimit}) ---\n`);

function pyramidUsingLet(limit = userLimit) {
    console.log("Using let (recommended):");
    for (let i = 1; i <= limit; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row.trim());
    }
}

function pyramidUsingVar(limit = userLimit) {
    console.log("\nUsing var (observe potential re-use of variables):");
    for (var i = 1; i <= limit; i++) {
        var row = '';
        for (var j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row.trim());
    }

    console.log(`\nAfter loops (var): i = ${i}, j = ${j}`);
}

function debugDemo(limit = userLimit) {
    console.log('\nDebugging demo: place a breakpoint on the next line to inspect loop variables (use VS Code).');

    for (let i = 1; i <= limit; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(`[debug] i=${i}, row='${row.trim()}'`);
    }
}


pyramidUsingLet();
pyramidUsingVar();
debugDemo();
