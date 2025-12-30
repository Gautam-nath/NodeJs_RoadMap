// STEP 1: Define the function
// This function accepts a callback
function nextTickTask(callback) {

  // STEP 3: This runs immediately when the function is called
  console.log("Function start");

  // STEP 4: process.nextTick callback is registered
  // It will run AFTER current synchronous code
  // but BEFORE Promise and other async tasks
  process.nextTick(() => {

    // STEP 7: This runs from the nextTick queue
    callback("process.nextTick callback ");
  });

  // STEP 5: This runs immediately (still synchronous)
  console.log("Function end");
}

// STEP 2: Execution starts here
// nextTickTask is called with a callback function
nextTickTask((msg) => {

  // STEP 8: This runs when callback() is executed
  console.log(msg);
});
