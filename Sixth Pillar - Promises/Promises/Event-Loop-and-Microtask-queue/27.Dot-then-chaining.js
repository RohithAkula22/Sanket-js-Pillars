/*
 * Dot then chaining
 */

function download(url) {
  console.log("Started downloading from", url);
  return new Promise(function exec(resolve, reject) {
    setTimeout(function p() {
      console.log("Completed downloading data in 5 seconds");
      const content = "ABCDEF";
      resolve(content);
    }, 5000);
  });
}

// * To register your handlers you use .then
// * Executing callback two times
let x = download("www.xyz.com"); //This is a Promise

// x.then gives you a new Promise object and for that Promise Object the value will get resolved when the upper promise Object will be resolved

x.then(
  function fulfillHandler1(value) {
    console.log("Content dowloaded is1", value);
    return "New Promise String";
  },

  function rejectHandler1(value) {
    console.log("Rejected with", value);
  }
).then(function newFulFillhandler(value) {
  console.log("Value from chained then Promise", value);
});

// * .then returns something
// * .then also returns a Promise
/*
 * y = x.then(function fulfillHandler1(value) {
 * console.log("Content dowloaded is1", value);
 *  });
 
 * Here y is also a PROMISE, i.e .then also returns a PROMISE

 * .then can take two handlers (fulfill and rejection)
 * .then function returns a new Promise Object
 * the time x gets fulfilled y will also be fulfilled
 
 * If you don't return anything from a JS function, then the value will be undefined
 * value = undefined
 
! This is how you chain a bunch of things in JS
 */
