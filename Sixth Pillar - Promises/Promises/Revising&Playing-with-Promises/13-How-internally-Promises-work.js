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
  function fulfillHandler(value) {
    console.log("Inside fulfill handler with value", value);
    console.log("Promise after fulfillment ...", p);
  },
  function rejection_handler() {
    console.log("Inside rejection handler with value", value);
    console.log("Promise after rejection ...", p);
  }
);

/*
  * We have a call stack

  * We have a callback queue

  * We have a Event Loop that keeps on checking the call stack and event queue and pushes events from queue to call stack when its empty

  * The callback events are pushed into callback queue after completing the timer 

  TODO - NEW : We have Microtask queue or Job Queue

  * With Value and State Properties for a Promise we have two more things

  TODO : OnFulfillment and OnRejection, OnFullfilment and OnTejection are both arrays, Inside these arrays we have multiple functions and they are executed Basesd on the Promise is fulfilled or Rejected.

  * We only know .then to attach function handlers to Promises

  * Expected Output 
  * 1. Starting...
  * createPromiseWithTimeOut goes into the call stack
  * 2. Entering the executor callback in the promise constructor
  * setTimeOut function is run in the timer (RunTime)(10 secs)
  * 3. Exiting the executor callback in the promise constructor
  * p is for now Pending, Undefined (value), [] - empty array, this array has function
  * 4. We are now waiting the for the promise to complete
  * 5. Current my Promise object is like .... Promise (p) Object
  
  * p.then registers handlers for your Promise Objects, just registering the functions, these functions will be executed when the state of the promise changes ---> onFulfillment = [fulfillHandler()], onRejection = [rejectionHandler()], 2 arrays, just registered on Promise Object, This is array because you can register multiple functions

  * Timer is still going on 
  * 3....2.....1
  
  * function Present in setTimeOut is pushed into the callback queue

  * Event loop checks their is nothing in the callstack and then pushed that function from callback queue into callstack

  * This function generates a random number, assume 6

  * Promise is fulfilled with the value 6

  * Now onFulfillment = [fulfillHandler()]  will start its execution

  * 6. "Inside fulfill handler with value 6"
   
  * 7. "Promise after fulfillment ...Promise Object --> [fulfilled, 6]"


*/
