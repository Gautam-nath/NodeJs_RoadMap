function nextTickTask(callback) {
  console.log("Function start");

  process.nextTick(() => {
    callback("process.nextTick callback ");
  });

  console.log("Function end");
}

nextTickTask((msg) => {
  console.log(msg);
});
