"use strict";

console.log("\n Original Version ");

function outer() {
    debugger; 

    console.log("Outer count before declaration:", count); // undefined

    var count = 5;
    console.log("Outer count after declaration:", count); // 5

    function inner() {
        debugger; 
        console.log("Inner count before declaration:", count); // undefined

        var count = 10;
        console.log("Inner count after declaration:", count); // 10
    }

    inner();
}

outer();


console.log("\n Arrow Function Version ");

function outerArrow() {
    debugger;
    console.log("Outer count before declaration:", count); // undefined

    var count = 5;

    const inner = () => {
        debugger;
        console.log("Inner count before declaration:", count); // undefined
        var count = 20;
        console.log("Inner count after declaration:", count); // 20
    };

    inner();
}

outerArrow();

/*
OUTPUT PREDICTION

Original:
Outer count before declaration → undefined
Outer count after declaration  → 5
Inner count before declaration → undefined
Inner count after declaration  → 10

Arrow version:
Outer count before declaration → undefined
Inner count before declaration → undefined
Inner count after declaration  → 20

WHY?

Hoisting rules:
- Each function creates a separate memory context.
- All `var` declarations are hoisted to the top of their function with value `undefined`.
- Therefore inner() has its OWN 'count', shadowing the outer one.

DEBUG NOTES:

Use VS Code:
1. Set breakpoint at both debugger statements.
2. Observe call stack: outer() → inner().
3. Check 'count' in Scope window: inner has its own 'count' separate from outer.
*/