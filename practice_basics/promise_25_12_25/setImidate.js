function immediateTask(callback) {
  console.log("Start");

  setImmediate(() => {
    callback("setImmediate callback executed ⚡");
  });

  console.log("End");
}

immediateTask((msg) => {
  console.log(msg);
});
