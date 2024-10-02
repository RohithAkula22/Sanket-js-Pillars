function blocking_for_loop() {
  for (let i = 0; i < 10000000000; i++) {
    // something
  }
}

console.log("Start of the file");

setTimeout(function timer1() {
  console.log("Timer 1 done");
}, 0);

blocking_for_loop();

let x = Promise.resolve("Sanket's promise1");
x.then(function processPromise(value) {
  console.log("Whose promise ? ", value);
  blocking_for_loop();
});

let y = Promise.resolve("Sanket's promise2");
y.then(function processPromise(value) {
  console.log("Whose promise ? ", value);
  setTimeout(function () {
    console.log("ok done");
  }, 0);
});

let z = Promise.resolve("Sanket's promise3");
z.then(function processPromise(value) {
  console.log("Whose promise ? ", value);
});

setTimeout(function timer2() {
  console.log("Timer 2 done");
}, 0);

console.log("End of the file");

/*
  * 1. Start of the file
  * timer1 - 0 Sec
  * blocking for loop
  * x = resolved 
  * .then registers promises handlers and pushes them into microtask queue --> Sanket's Promise (value)
  * y is resolved .then registers promises handlers and pushes them into microtask queue --> Sanket's Promise (value)
  * z is resolved .then registers promises handlers and pushes them into microtask queue --> Sanket's Promise (value)
  * timer2 - 0 sec is pushed into  
  * 2. End of the file
  * 3. Whose promsie? Sanket's promise1
  * 4. Whose promsie? Sanket's promise2
  * setTimeout starts a timer - 0secs
  * 5. Whose promsie? Sanket's promise3
  * 6. Timer 1 done
  * 7. Timer 2 done
  * 


*/
