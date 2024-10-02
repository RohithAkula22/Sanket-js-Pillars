function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createPromiseWithALoop() {
  return new Promise(function executor(resolve, reject) {
    for (let i = 0; i < 1000000000; i++) {} //Promise has synchronous code here - so it waits here
    let num = getRandomInt(10);
    if (num % 2 == 0) {
      // if the random number is even we fulfill the promise
      resolve(num);
    } else {
      // if the random number is odd then we reject the promise
      reject(num);
    }
  });
}

let x = createPromiseWithALoop();
console.log(x);

// *Promise { <state>: "fulfilled", <value>: 4 } - it waits till it completes the for loop, value parameter = 4

// Now let us see an example of Promise with Asynchronous piece of code
function createPromiseWithTimeOut() {
  return new Promise(function executor(resolve, reject) {
    setTimeout(function () {
      //asynchronous code here in Promsie
      let num = getRandomInt(10);
      if (num % 2 == 0) {
        // if the random number is even we fulfill the promise
        resolve(num);
      } else {
        // if the random number is odd then we reject the promise
        reject(num);
      }
    }, 5000);
  });
}

let y = createPromiseWithTimeOut();
console.log(y);

// *Promise { <state>: "pending" } - immediately it returns the Promise where Placeholder has the Promise in Pending state as Timer is running in the background

//  * After 5secs - Promise gets resolved --> Promise { <state>: "fulfilled", <value>: 4 }
