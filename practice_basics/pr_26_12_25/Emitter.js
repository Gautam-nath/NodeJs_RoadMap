const EventEmitter = require("events"); 
// Import the built-in EventEmitter class from Node.js

const myEmitter = new EventEmitter(); 
// Create an instance (object) of EventEmitter

// Register an event listener
// This code runs when "orderPlaced" event is triggered
myEmitter.on("orderPlaced", () => {
    console.log("Order received");
});

// Emit (trigger) the event
// This will call all listeners attached to "orderPlaced"
myEmitter.emit("orderPlaced");
