console.log("Start of the file");

setTimeout(function timer1() {
  console.log("Timer 1 done");
}, 0);

for (let i = 0; i < 10000000000; i++) {
  // something
}

// function f() {
//   return new Promise(function exec(res, rej) {
//     res("sanket's promise");
//   });
// } // this also resolves the Promise but with function

// ! This is the Short hand rule to resolve the Promise immediately
let x = Promise.resolve("Sanket's promise"); // Gives you a already resolved Promise

x.then(function processPromise(value) {
  console.log("Whose promise ? ", value);
});

setTimeout(function timer2() {
  console.log("Timer 2 done");
}, 0);

console.log("End of the file");

/*
Start of the file
End of the file
Whose promise ?  Sanket's promise
Timer 1 done
Timer 2 done
*/
