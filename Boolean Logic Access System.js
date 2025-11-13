let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

let isSecure = isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside;

console.log("------ Boolean Logic Access System ------");
console.log(`Door Locked: ${isDoorLocked}`);
console.log(`Window Closed: ${isWindowClosed}`);
console.log(`Alarm On: ${isAlarmOn}`);
console.log(`Owner Inside: ${isOwnerInside}`);
console.log(isSecure ? "Status: Secure ✅" : "Status: Unsafe ❌");
console.log("----------------------------------------");

isOwnerInside = false;
isSecure = isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside;

console.log("\n-- After Changing Conditions --");
console.log(`Owner Inside: ${isOwnerInside}`);
console.log(isSecure ? "Status: Secure ✅" : "Status: Unsafe ❌");
