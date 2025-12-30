// STEP 1: Define the function
// This function accepts a callback
function immediateTask(callback) {

  // STEP 3: This runs immediately when the function is called
  console.log("Start");

  // STEP 4: setImmediate callback is registered
  // It will run in the "check" phase of the Node.js event loop
  setImmediate(() => {

    // STEP 7: This runs when the event loop reaches the check phase
    callback("setImmediate callback executed ⚡");
  });

  // STEP 5: This runs immediately (still synchronous code)
  console.log("End");
}

// STEP 2: Execution starts here
// immediateTask is called with a callback function
immediateTask((msg) => {

  // STEP 8: This runs when callback() is executed
  console.log(msg);
});
