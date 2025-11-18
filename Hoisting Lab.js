"use strict";



/*

1. console.log(score);
   - 'score' is declared with var, so it is hoisted.
   - Memory state: score = undefined (not assigned yet)
   - Output → undefined

2. announce();
   - Function declarations are fully hoisted.
   - announce() executes normally → "Game started"

3. var score = 50;
   - Assignment happens here.

4. function announce(){}
   - Already hoisted at top before execution.

5. let status = "ready";
   - 'status' is hoisted but placed in Temporal Dead Zone (TDZ) until definition.
   - Accessing it BEFORE this point throws ReferenceError.

6. startGame();
   - Function startGame() is hoisted.
   - But inside it, we access 'status' BEFORE its initialization → ReferenceError.

So the error comes from calling startGame() before defining 'status'.
*/

console.log("--- Fixed Version ---\n");

function announce() { console.log("Game started"); }
function startGame() { console.log(status); }

console.log(score); 
announce();

var score = 50;      
let status = "ready"; 
startGame();