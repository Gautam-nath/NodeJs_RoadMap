// This function returns a Promise
function getData() {
  return new Promise((resolve, reject) => {

    // setTimeout is used to simulate async operation (like API call)(4)
    setTimeout(() => {

      // Promise is resolved after 2 seconds(5)
      resolve("Data mil gaya");

    }, 2000);
  });
}

// Async function to fetch data(2nd)
async function fetchData() {
  try {

    // await pauses execution until getData() Promise resolves(3rd)
    const result = await getData();

    // Print the resolved value(6)
    console.log(result);

  } catch (error) {

    // Handle error if Promise gets rejected
    console.log(error);
  }
}

// Function call (1st)
fetchData();
