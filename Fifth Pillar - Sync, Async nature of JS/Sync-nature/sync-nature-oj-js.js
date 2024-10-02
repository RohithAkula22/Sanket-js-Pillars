// TODO Class : Sync and Async Programming with JavaScript
/*
 * Terms to keep in our minds are
 * JS is sync in nature
 * JS is single threaded
 */

// 5 lines of code
// Lets say you are in first line, JS is going to go to the second line is when the first line is fully processed which is syncronous in nature
// Gives 1st line how much time is needed for its execution
// ? All of this applicable if we execute valid ECMAScript code which is given by the standards
/*
 * For Example
 */

console.log("Hi we are starting");

for (let i = 0; i < 10000000000; i++) {
  // Some task - takes some time and JS waits here and moves ahead after completion
}

console.log("Done");

// TODO : Second thing that you need to keep in mind is JS is single threaded

// * Assume you click a like button in a web application and that like button would make a request to the server and you would see the like button blue in color, If it is JAVA the whole UI runs on a separate thread and you initiate a new thread out off it to make that call which is time consuming (going to server), persists the data in db and comeback
// * You never hamper the main thread because if you hamper it the code would be blocked, you cannot scroll in the UI

// *But with JS you cannot do multi threading, you have single thread on JS and you have to manage with that particular thread only

// ? But how is JS able to handle asynchronous programming that we see in the Web Applications
// * Their is a mechanism where JS can handle async code as well

console.log("hi");
setTimeout(function () {
  console.log("time done");
}, 5000);
console.log("bye");
