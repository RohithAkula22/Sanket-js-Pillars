/*
 * Reduce is a higher order function available for arrays
 * reduce also take a function f as an argument ,
 * what reduce does is, it one by one goes to every element of the array,
 * say the current element is arr[i]
 * reduce will pass this element to the function f and accumulate the result of further function calls
 * with this particular result
 */

const arr = [1, 2, 3, 4, 5, 6];

function sum(prevResult, currValue) {
  return prevResult + currValue;
}

const result = arr.reduce(sum);
console.log(result);

/*
 * Real-life application
 * Cart -> [iphone {price: 100000}, name: "iPhone"}, case{price: 500, name: "backcover"}, tempered_glass {price: 300, name: "roxie tempered glass"}]
 */

// Total amount user has to pay

let cart = [
  { price: 100000, name: "iPhone" },
  { price: 500, name: "backcover" },
  { price: 300, name: "roxie tempered glass" },
];

function addPrices(prevResult, currValue) {
  console.log(prevResult, currValue);
  let newPrice = prevResult.price + currValue.price;
  return { price: newPrice };
}

const totalPrice = cart.reduce(addPrices); // Total Price here is an object
console.log(totalPrice.price);
