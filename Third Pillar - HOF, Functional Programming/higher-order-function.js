// higher order function
// There are functions which take another function as arguments

function f(x, fn) {
  // x is a number
  // fn is a function
  console.log(x);
  fn();
}

f(10, function exec() {
  console.log("I am an expression passed to a HOF");
});
