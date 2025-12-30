// Listen for the "orderPlaced" event
// First listener: sends confirmation email
myEmitter.on("orderPlaced", () => {
  console.log("Send confirmation email");
});

// Second listener for the same event
// This updates the inventory after order is placed
myEmitter.on("orderPlaced", () => {
  console.log("Update inventory");
});

// Emit (trigger) the "orderPlaced" event
// This will execute all listeners attached to "orderPlaced"
myEmitter.emit("orderPlaced");
