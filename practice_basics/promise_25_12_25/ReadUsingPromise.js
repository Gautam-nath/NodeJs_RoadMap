const fs = require("fs");

function readFilePromise() {
  return new Promise((resolve, reject) => {
    fs.readFile("promise.js", "utf-8", (err, data) => {
      if (err) {
        reject("File read error ");
      } else {
        resolve(data);
      }
    });
  });
}

readFilePromise()
  .then((data) => {
    console.log("File Data:", data);
  })
  .catch((err) => {
    console.log(err);
  });
