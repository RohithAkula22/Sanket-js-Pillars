// Arrays are also custom objects in JS
// index of the element is the key and element it self is the value
// ["abc", "def", "ghi"] --> {0: "abc", 1: "def", 2: "ghi"}

// HOF --> These are function that depend and operate on other function
// HOF take another function as argument or return a function and then execute the logic

/*
funtion gun(){}
function fun(gun()){
...
...
gun();
}

fun is here HOF
*/

// *Custom Inbuilt HOFs
// *Map is HOF available with arrays
// *It takes function as a argument --> f
// *it returns an array in which every value is actually populated by calling function f with
// *original array element as argument

/*
TODO :Every element of the original array is passed by one by one in the argument function f --> Map internally iterates/loops over every element of the original array and pass that element in the argument function f and then store the returned value inside the array
*/

function square(el) {
  return el * el; //return square
}

function isEvenOrOdd(x) {
  if (x % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

const arr = [1, 2, 3, 4, 5];

const result = arr.map(square); // square is function passed as an argument

console.log(result);

const evenOddArr = arr.map(isEvenOrOdd);
console.log(evenOddArr);

/*
Every element of the original array is passed by one by one in the argument function f 
*/
