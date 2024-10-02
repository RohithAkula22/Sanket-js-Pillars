function createPromise() {
  return new Promise(function exec(resolve, reject) {
    setTimeout(function () {
      console.log("rejecting the promise");
      reject("Done");
    }, 1000);
  });
}

let p = createPromise();

p.then(
  function fulfillHandler(value) {
    console.log("we fulfilled 1 with a value ", value);
  },
  function rejectionHandler(value) {
    console.log("we rejected 1 with a value ", value);
  }
);
p.then(
  function fulfillHandler2(value) {
    console.log("we fulfilled 2 with a value ", value);
  },
  function rejectionHandler2(value) {
    console.log("we rejected 2 with a value ", value);
  }
);

for (let i = 0; i < 100000000; i++) {}

console.log("Ending");

/*
Ending
rejecting the promise
we rejected 1 with a value  Done
we rejected 2 with a value  Done

*/

/*
 * Timer 1 second
 * Rejects two fulfillment handlers, two rejection handlers
 * for loop goes for some time
 * setTimeout is done, and the call back waits in the callback queue
 * 1. Ending
 * Anything in microtask - NO
 * Anything in callback queue - Yes - Execute it
 * Promise is rejected and the rejection handlers are pushed into the microtask queue
 * Checks microtask, rejection handlers are present and are executed
 */
