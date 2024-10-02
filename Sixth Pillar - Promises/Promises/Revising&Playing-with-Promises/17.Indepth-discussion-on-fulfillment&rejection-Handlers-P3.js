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
    setTimeout(function t() {
      console.log("Ended 0s timer");
    });
    console.log("Exiting the fulfill handler 1");
  },
  function rejection_handler1(value) {
    console.log("Inside rejection handler 1 with value", value);
    console.log("Promise after rejection ...", p);
    setTimeout(function t() {
      console.log("Ended 0s timer");
    }, 0);
    console.log("Exiting the rejection handler 1");
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
setTimeout(function () {
  console.log("Global timer of 1 second");
}, 1000);

/*
Starting...
Entering the executor callback in the promise constructor
Exiting the executor callback in the Promise constructor
We are now waiting for the Promise to complete
Currently my promise object is like .... Promise { <pending> }
Going to register my 2nd set of handlers
Ending
Global timer of 0seconds
Inside fulfill handler 1 with value 8
Promise after fulfillment ... Promise { 8 }
Exiting the fulfill handler 1
Inside fulfill handler 2 with value 8
Promise after fulfillment ... Promise { 8 }
Ended 0s timer
*/

// setTimeout(function () {
//   console.log("Global timer of 1 second");
// }, 1000);
