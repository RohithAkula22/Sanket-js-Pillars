/*

TODO : Going to register multiple functionality handlers for Promises
? Whats the use of microTask Queue
*/

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

console.log("Starting...");
const p = createPromiseWithATimeOut();
console.log("We are now waiting for the Promise to complete");
console.log("Currently my promise object is like ....", p);

// * registering two callbacks for the Promise
p.then(
  function fulfillHandler1(value) {
    console.log("Inside fulfill handler 1 with value", value);
    console.log("Promise after fulfillment ...", p);
  },
  function rejection_handler1(value) {
    console.log("Inside rejection handler 1 with value", value);
    console.log("Promise after rejection ...", p);
  }
);

console.log("Going to register my 2nd set of handlers");

p.then(
  function fulfillhandler2(value) {
    console.log("Inside fulfill handler 2 with value", value);
    console.log("Promise after fulfillment ...", p);
  },
  function rejectionHandler2(value) {
    console.log("Inside rejection handler 2 with value", value);
    console.log("Promise after rejection ...", p);
  }
);

console.log("Ending");

// ? Microtask Queue
// * When the Promise if fulfilled these onFulfillment = [fulfillHandler(), fulfillHandler2()], onRejection = [rejectionHandler(), rejectionHandler2()] go inside the MicroTask Queue
