function createPromise() {
  return new Promise(function exec(resolve, reject) {
    console.log("resolving the promise");
    resolve("Done");
  });
}

// *Goes into the callback queue
setTimeout(function process() {
  console.log("Timer completed");
}, 0);

let p = createPromise();

// ! Here the Promise is fulfilled but the .then Promise handlers wouldn't immediately execute them but they would push them into the microtask queue and waits for event loop to signal when the callstack is empty and the global execution is completed, then they would be pushed into the callstack and executed

p.then(
  function fulfillHandler(value) {
    console.log("we fulfilled with a value ", value);
  },
  function rejectionHandler() {}
);

for (let i = 0; i < 1000000000; i++) {}

console.log("Ending");

// * Now their is nothing in the callstack and global execution context

// ? Now Event loop has two choices there is the callback queue and microtask queue, which one to prioritize?
// ! Answer : Micro/Macro task queue, it always gives preference to Microtask queue

/*
resolving the promise
Ending
we fulfilled with a value  Done
Timer completed
*/
