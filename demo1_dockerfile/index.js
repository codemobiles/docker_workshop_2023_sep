// docker run -it node
// docker run -v ./:/app --rm --name nodeapp -it node node /app/index.js
// docker build -t demo1:1.0 .
// docker build -t demo1:3.0 .
// docker run --rm demo1:1.0
// docker run --rm -v ./config:/usr/src/app/config  demo1:3.0
console.log("Hey v2");

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
