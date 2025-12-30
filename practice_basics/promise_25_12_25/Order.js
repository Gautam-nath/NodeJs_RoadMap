// STEP 1: This runs immediately (synchronous code)
console.log("1. Start");

// STEP 2: process.nextTick callback is registered
// It will run AFTER current synchronous code
// but BEFORE Promises and other async phases
process.nextTick(() => {
  console.log("2. nextTick");
});

// STEP 3: Promise.then callback is registered
// It goes into the Microtask Queue
Promise.resolve().then(() => {
  console.log("3. Promise then");
});

// STEP 4: setImmediate is registered
// It runs in the "check phase" of the event loop
setImmediate(() => {
  console.log("4. setImmediate");
});

// STEP 5: setTimeout with 0ms delay is registered
// It runs in the "timers phase" after minimum delay
setTimeout(() => {
  console.log("5. setTimeout 0");
}, 0);
