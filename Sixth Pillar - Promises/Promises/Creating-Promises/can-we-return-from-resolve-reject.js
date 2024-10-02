function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createPromiseWithALoop() {
  return new Promise(function executor(resolve, reject) {
    for (let i = 0; i < 1000000000; i++) {} //Promise has synchronous code here - so it waits here
    let num = getRandomInt(10);
    if (num % 2 == 0) {
      // if the random number is even we fulfill the promise
      console.log("fulfilling");
      return num;
    } else {
      // if the random number is odd then we reject the promise
      console.log("rejecting");
      return num;
    }
  });
}

let i = createPromiseWithALoop();
console.log(i);

/*
 *rejecting;
 *Promise { <state>: "pending" } - it never changes Promises state without calling resolve, reject
 */

//  ? What if we have a piece of code after calling resolve(num) - it executes that piece of code also

// ? What if I do resolve two times - once you resolve/reject, the Promise object state will be changed and it can't be changed again so it doesn't show any effect
