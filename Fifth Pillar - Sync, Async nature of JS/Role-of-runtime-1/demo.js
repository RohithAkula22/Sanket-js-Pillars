function timeConsumingByLoop() {
  console.log("loop starts");
  for (let i = 0; i < 1000000; i++) {
    // some task
  }
  console.log("loop ends");
}

function timeConsumingByRunTimeFeature() {
  console.log("Starting timer");
  setTimeout(function exec() {
    console.log("Completed the timer");
  }, 5000);
}

console.log("Hi");

timeConsumingByLoop();
timeConsumingByRunTimeFeature();
timeConsumingByLoop();

console.log("Bye");
