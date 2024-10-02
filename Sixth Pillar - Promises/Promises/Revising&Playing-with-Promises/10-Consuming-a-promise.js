/*

  * Assume let p = fetech("   "); --> assume this function fetch returns a Promise, P is the Placeholder
  * The best part of the Promises is that we can associate some handlers, some functions that can be triggered once the Promise is fulfilled or rejected
  * setTimeout(function exec(){console.log}, 3000) ; here you are mentioning what we to do after 3 seconds immediately 
  * With Promises, what to do when the Promise is rejected or fulfilled that to do you can mention it after sometime, not neccessarily immediately
  
  * Attaching the functionality that we need to execute once Promise is fulfilled, this is the interesting part 
  
  ? How to attach this functionality

  * With your Promise object their is function called as p.then(fulfillment_handler, rejection_handler)
  * fulfillment_handler, rejection_handler --> these are handler functions, that we have to implement ourselves, what piece of code should be executed when the Promise is fulfilled and rejected

  


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

console.log("Starting");
const p = createPromiseWithATimeOut();
console.log("We are now waiting for the Promise to complete");
console.log("Currently my promise object is like ....", p);

// * registering two callbacks for the Promise
p.then(
  function fulfillHandler(value) {
    console.log("Inside fulfill handler with value", value);
  },
  function rejection_handler() {
    console.log("Inside rejection handler with value", value);
  }
);
