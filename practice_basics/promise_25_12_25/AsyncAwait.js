function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data mil gaya");
    }, 2000);
  });
}

async function fetchData() {
  try {
    const result = await getData();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
