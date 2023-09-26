// docker run -it node
// docker run -v ./:/app --rm --name nodeapp -it node node /app/index.js
// docker build -t demo1:1.0 .
console.log("Hey");

const main = async () => {
  console.log("Running..");
};

// Run the main function in an infinite loop
const runLoop = async () => {
  while (true) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await main();
  }
};

runLoop();
