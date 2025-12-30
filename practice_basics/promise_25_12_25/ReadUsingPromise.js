// STEP 1: Import the built-in file system module
const fs = require("fs");

// STEP 2: Create a function that returns a Promise
function readFilePromise() {

  // STEP 3: Promise constructor is executed immediately
  return new Promise((resolve, reject) => {

    // STEP 4: fs.readFile is an asynchronous I/O operation
    // It is delegated to the Node.js thread pool
    fs.readFile("promise.js", "utf-8", (err, data) => {

      // STEP 7: This callback runs after file reading is completed
      if (err) {
        // STEP 8 (error case): Reject the Promise
        reject("File read error ");
      } else {
        // STEP 8 (success case): Resolve the Promise with file data
        resolve(data);
      }
    });
  });
}

// STEP 5: Call the function (execution starts here)
readFilePromise()

  // STEP 6: Attach then() to handle successful Promise resolution
  .then((data) => {

    // STEP 10: Runs when resolve() is called
    console.log("File Data:", data);
  })

  // STEP 6 (continued): Attach catch() to handle Promise rejection
  .catch((err) => {

    // STEP 10 (error case): Runs when reject() is called
    console.log(err);
  });
