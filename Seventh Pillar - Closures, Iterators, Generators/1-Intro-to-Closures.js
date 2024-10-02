function process() {
  let i = 0;
  function innerProcess() {
    i += 1;
    return i;
  }
  return innerProcess; // we are not calling the function, we are just returning
}

let res = process(); //We get a function here and process is removes from the callstack

// i += 1;
// return i;

console.log(res);

console.log("first time calling res", res());
console.log("second time calling res", res());
console.log("third time calling res", res());

/*
* When we call the res() here it goes inside and sees i += 1, what the hell is i here, process() is removed from the memory

! Heres where JS starts its game :
* JS : Things are not straight forward in my game 

* res() gives answer 1, it somehow is accessing the variable i 

first time calling res 1
second time calling res 2
third time calling res 3

* But how the hell is it persisting the previous values again and again, it is not only accessing but saving it in the memory

Try this in browser

x = process();
let obj = {func: x}. // * assigning the x function to the func in obj

Expand the func: f

* You can see SCOPES 
* Expand the Scopes
* You can see a property called Closure {i : 0}, which how has access to key i with value '0'

? What is this Closure

* JS knows that this i is coming from the process() scope at the parsing phase only

* when we return innerProcess function we feel like only this function is returned, not only the definition but any function that you return in JS, [[Scopes]] property exist. Closures property is attached to the function, where it remembers all the variables that are getting accessed inside your function whose SCOPE might be inside or outside of your function, these variables are remembered and makes them a persistent editable memory storage.

* CLOSURE - Closing over the variables, not snapshotting, but remembering the value

! Closure means that when a function remembers its lexical scope even when a function is executed outside the lexical scope
*/
