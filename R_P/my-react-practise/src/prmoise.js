function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true;
        if (success) {
          resolve("Data fetched successfully!");
        } else {
          reject(new Error("Failed to fetch data"));
        }
      }, 2000);
    });
  }
   
  // Using the promise
  fetchData()
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error.message));