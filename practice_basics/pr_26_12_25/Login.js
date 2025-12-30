const EventEmitter = require("events");
// Import the built-in EventEmitter class from Node.js

const emitter = new EventEmitter();
// Create an EventEmitter instance (object)

// First listener for "userLogin" event
// This listener receives username as data
emitter.on("userLogin", (username) => {
  console.log(`${username} logged in`);
});

// Second listener for the same "userLogin" event
// This listener does not need any data
emitter.on("userLogin", () => {
  console.log("Update last login time");
});

// Emit (trigger) the "userLogin" event
// "Gautam" is passed as data to the listeners
emitter.emit("userLogin", "Gautam");
