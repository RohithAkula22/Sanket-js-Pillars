console.log("Hello World");
setTimeout(function exec() {
  console.log("Timer done");
}, 0);
for (let i = 0; i < 100000000000; i++) {
  // Some Task
}
console.log("End");

//  * Output will be same as Problem 1, as JS doesnot hamper the JS native code
