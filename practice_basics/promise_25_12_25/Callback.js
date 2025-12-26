function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched from server");
    callback();
  }, 2000);
}

function processData() {
  console.log("Processing data...");
}

fetchData(processData);

