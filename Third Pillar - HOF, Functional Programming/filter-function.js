/*
 * Filter funciton
 * Filter is also a higher order function
 * Filter also loops over the array element
 * there is a one special thing about the filter, i.e argument function f which we have to pass inside the filter
 * should always return a [boolean], otherwise output will be converted to a boolean
 * 
 TODO: Filter loops over every element, passed that element in the argument function and then if the output of this function call is true, then is stores the original element in a new array otherwise doesn't add this element to the array
 */

function oddOrEven(x) {
  return x % 2 == 0; //returning a boolean
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = arr.filter(oddOrEven);

console.log(result);
