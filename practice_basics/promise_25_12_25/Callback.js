// STEP 1: Define the fetchData function
// This function takes another function (callback) as an argument
// It does NOT run yet
function fetchData(callback) {

  // STEP 4: setTimeout is registered when fetchData() is called
  // JavaScript schedules this function to run after 2 seconds
  setTimeout(() => {

    // STEP 7: This line executes after 2 seconds
    console.log("STEP 7: Data fetched from server");

    // STEP 8: Call the callback function
    // Here, callback refers to processData
    callback();

  }, 2000); // STEP 5: Timer starts (2 seconds)
}

// STEP 2: Define the processData function
// This function does NOT run yet
function processData() {

  // STEP 9: This executes when callback() is called
  console.log("STEP 9: Processing data...");
}

// STEP 3: Execution starts here
// fetchData is called and processData is passed as a callback
fetchData(processData);
