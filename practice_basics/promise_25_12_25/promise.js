// STEP 1: Create a new Promise object
// The executor function runs IMMEDIATELY
const myPromise = new Promise((resolve, reject) => {

  // STEP 2: success flag is set
  let success = true;

  // STEP 3: setTimeout is registered (asynchronous task)
  // It will execute after 2 seconds
  setTimeout(() => {

    // STEP 6: This code runs after 2 seconds
    if (success) {
      // STEP 7: Promise is fulfilled (resolved)
      resolve("Data successfully received");
    } else {
      // STEP 7 (alternate): Promise is rejected
      reject("Something went wrong");
    }

  }, 2000);
});

// STEP 4: then() is attached to the Promise
// It runs when the Promise is resolved
myPromise
  .then((result) => {

    // STEP 9: This runs when resolve() is called
    console.log(result);
  })

  // STEP 5: catch() is attached to handle rejection
  .catch((error) => {

    // STEP 9 (alternate): This runs if reject() is called
    console.log(error);
  });
