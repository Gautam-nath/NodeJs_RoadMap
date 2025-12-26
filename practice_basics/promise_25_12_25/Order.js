console.log("1. Start");        // synchronous

process.nextTick(() => {
  console.log("2. nextTick");
});

Promise.resolve().then(() => {
  console.log("3. Promise then");
});

setImmediate(() => {
  console.log("4. setImmediate");
});

setTimeout(() => {
  console.log("5. setTimeout 0");
}, 0);
