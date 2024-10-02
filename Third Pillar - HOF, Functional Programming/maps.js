// ?When to Use Maps
// * In any situation when we have to do an operation on every element of the array and store the result of each operation
// * map can be a good option

/* 
*Ex : Array of product objects
* For each product object, we have to get the product name
* fetching object name for all the products
* so we have list of product names 
*/

const newArr = [9, 8, 7, 6, 5];

// * If the function that we are passing in map takes two arguments
// * then first element will be accessing the actual value
// * second argument will be accessing index of that value

function print(element, idx) {
    return `Element at index ${idx} is ${element}`;
}

// ? What is map doing here
/*
* Here map is looping over every element and then passing element, index in function print
*/
const result2 = newArr.map(print);
console.log(result2)