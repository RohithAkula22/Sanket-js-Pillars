function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createPromiseWithATimeOut() {
  return new Promise(function executor(resolve, reject) {
    console.log("Entering the executor callback in the promise constructor");
    setTimeout(function () {
      let num = getRandomInt(10);
      if (num % 2 == 0) {
        // if the random number is even we fulfill the promise
        resolve(num);
      } else {
        // if the random number is odd then we reject the promise
        reject(num);
      }
    }, 10000);
    console.log("Exiting the executor callback in the Promise constructor");
  });
}

console.log("Starting");
const p = createPromiseWithATimeOut();
console.log("We are now waiting for the Promise to complete");
console.log("Currently my promise object is like ....", p);

// * registering two callbacks for the Promise
p.then(
  function fulfillHandler(value) {
    console.log("Inside fulfill handler with value", value);
    console.log("Promise after fulfillment ...", p);
  },
  function rejection_handler() {
    console.log("Inside rejection handler with value", value);
    console.log("Promise after rejection ...", p);
  }
);
