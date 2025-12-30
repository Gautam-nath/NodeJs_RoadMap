// STEP 1: Define the fetchData function
// This function accepts a callback function
function fetchData(callback) {

  // STEP 3: This line runs immediately when fetchData() is called
  console.log("Fetching data...");

  // STEP 4: setTimeout is registered
  // JavaScript schedules this callback to run after 2 seconds
  setTimeout(() => {

    // STEP 7: This runs after 2 seconds
    // Callback function is called with the result
    callback("Data received after 2 sec");

  }, 2000);
}

// STEP 2: Execution starts here
// fetchData is called with a callback function
fetchData((result) => {

  // STEP 8: This runs when callback() is executed
  console.log("Callback executed:", result);
});
