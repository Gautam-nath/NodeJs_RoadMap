function checkOrderStatus(callback) {
  let count = 0;

  const intervalId = setInterval(() => {
    count++;
    callback(`Checking order status... ${count}`);

    if (count === 3) {
      clearInterval(intervalId);
      console.log("Order delivered");
    }
  }, 1000);
}

checkOrderStatus((msg) => {
  console.log(msg);
});
