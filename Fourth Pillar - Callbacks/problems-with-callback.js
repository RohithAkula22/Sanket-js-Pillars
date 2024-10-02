/*

* We have callback hell
? Whats the solution for this
* We have promises for that 
* But we also have promise hell 

* Some say async/await can help you
* But you also have async/await hell

* Mainly we have readability problem 
* But we have a bigger problem which is inversion of control

*/

/*
TODO : Let us see Problems with callback!

* 1. Inversion of Control
* 2. Callback hell (It is a 2nd level problem) - visit callbackhell.com

* Callback inside a callback inside a callback, were your code get pyramid like orientation 
* It becomes hard for us to understand the code, it doesn't hamper your logic but it makes us hard to read and debug the code
* 1-2 level of callbacks is fine for readability

TODO : Now let us see the Inversion Of Control Problem

*/

let arr = [1, 10, 1000, 9, 2, 3, 11];

arr.sort(function cmp(a, b) {
  return a - b;
});

console.log(arr);

/*
 * I am passing this callback(cmp) inside sort, is their a sureity that sort will always call it
 * Technically sort is a internal function so you can go and check it in the documentation
 */

/*
 * In real-life assume you have 2 developer teams
 * Team A - functions for some tasks
 */

// * TEAM A

function doTask(fn, x) {
  // TODO : This whole implementation is done by Team A, where is calls function with x*x

  fn(x * x); // ? calling my callback with square of x
  fn(x * x);
}

// TODO: Team B tries to use the doTask off Team A

doTask(function exec(num) {
  // Due to callback, I am passing control of how exec should be called to doTask
  console.log("Woah num is ", num);
}, x); // Expecting square of 9 * 9 is 81

// ? A intern came and removed/deleted the doTask or changed the implementaion and now we faces issues, by mistake they are calling it twice
// * We don't know how our exec(num) function is handled inside doTask
// * So control of our exec() function is passed on how it should be called to doTask

// * If it is a payment operation and we are charging the user twice or it isn't even charging, this causes a lot off damage
// * Swiggy - Razorpay
// * We are using RazorPay libraries inside Swiggy and assume due to latest updates to their APIs and libraries they did a mistake like this
// ! Swiggy will be the one who is going to suffering due to their mistake
//  ! Extremely a bad problem to have if you are working in a scale, that's why this is a higher priority problem that exists with the callbacks
