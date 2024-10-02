// * While custom iterators are a useful tool, their creation requires a careful programming due to the need to explicitly maintain their internal state. i = 1, i++ 1 = 2

// * Generator functions provide a powerful alternative they allow you to define an iterative algorithm by writing a single function whose exection is not continuous.

// * Whose execution can break in between meaning it can break in 3rd line and and continue from where it left off! - Not context switching (context switching is bw processes)

// * --> Not break or something, Remember it uses function with a *

// TODO : These Are written using the function* syntax

// * When called generator functions do not intially execute their code. Instead, they return a special type of iterator, called a Generator. When a value is consumed by calling the generator's [next] method, the generator function executes until it encounters the [yield] keyword.

// !Always returns you a iterator - called a Generator

// TODO : Lets see the generator demo

function* fetchNextElement() {
  // this is a generator function
  console.log("I am inside the generator function");
  yield 1;
  yield 2;
  console.log("Somewhere in the middle");
  yield 3;
  yield 4;
}

const iter = fetchNextElement(); // this iter has yout whole fetchNextElement function - you can see it in the object - [[Generator Function]]

// * Generator function doesn't start executing as soon as you call it. Meaning it doesnit start execution at the time of calling

// *What Happens? --> it returns you an iterator, you can see the whole object all together

// TODO : Seeing iter : You can see an whole object all together
/*
fetchNextElement {<suspended>}
[[GeneratorLocation]]
: 
VM80:1
[[Prototype]]
: 
Generator
[[GeneratorState]]
: 
"suspended"
[[GeneratorFunction]]
: 
ƒ* fetchNextElement()
[[GeneratorReceiver]]
: 
Window
[[Scopes]]
: 
Scopes[3]

*/

// *iter now acts as a iterator
// *the moment we do iter.next() and press enter --> I am inside the generator function --> sees yield 1, it stops the execution their and it doesn't execute anything beyond it!

// calling iter.next(); here in the console
// *Output : I am inside the generator function
// *You get yield 1 - in the line 2 - here the generator function sees the yield - so it stops the execution here - and return the value that you give with the yield which is 1 here and returns done : false as there are still code left

// ! yield is similar to return but not a return

console.log("1st", iter.next());
console.log("2nd", iter.next());
console.log("3rd", iter.next());
console.log("4th", iter.next());
console.log("5th", iter.next());
console.log("6th", iter.next());

// ! What if you return in middle of yields - return 10 - return will act as final yield
// The value : 10, done : true - function ends here - it abids by the function rules

// * KEY TAKE AWAYS:
// * Generator functions are different from normal functions
// * The moment you call them they don't start the exection immediately
// * When you call the next() function thats when you start the execution and you momentarily halt the execution on the yield keyword
// * If you put return keyword the function ends their with done: true
