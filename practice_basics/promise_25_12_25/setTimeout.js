function fetchData(callback) {
  console.log("Fetching data...");

  setTimeout(() => {
    callback("Data received after 2 sec");
  }, 2000);
}

fetchData((result) => {
  console.log("Callback executed:", result);
});
