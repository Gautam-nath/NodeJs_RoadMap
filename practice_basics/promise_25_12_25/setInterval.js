// STEP 1: Define the function
// This function accepts a callback
function checkOrderStatus(callback) {

  // STEP 2: Initialize a counter
  let count = 0;

  // STEP 3: setInterval is registered
  // This function will run every 1 second
  const intervalId = setInterval(() => {

    // STEP 6: This runs every 1 second
    count++;

    // STEP 7: Call the callback with the current status
    callback(`Checking order status... ${count}`);

    // STEP 8: Check if count reached 3
    if (count === 3) {

      // STEP 9: Stop the interval
      clearInterval(intervalId);

      // STEP 10: Final synchronous log
      console.log("Order delivered");
    }

  }, 1000); // STEP 4: Interval time = 1 second
}

// STEP 5: Execution starts here
// checkOrderStatus is called with a callback function
checkOrderStatus((msg) => {

  // STEP 11: This runs whenever callback() is called
  console.log(msg);
});
