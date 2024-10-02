function* fetchNextElement() {
  //this is a generator function
  console.log("Inside generator");
  const x = 10;
  yield 11;
  console.log("Entering after a yield");
  const y = x + (yield 30);
  console.log("Value of y is", y);
}

console.log("Start");
const iter = fetchNextElement(); //calling the function - immediately return iterator
console.log("Called generator");

console.log("first", iter.next()); // you will go inside the function, x = 10, yield 11 --> first 11
// console.log("second", iter.next())
console.log("second", iter.next()); // entering after a yield, y = x + yield 30, here yield is a part of expression, yield keyword is extremely powerful, value of y is still undefined here as we will return and         print second 30

console.log("third", iter.next(17)); //you will back to same position where you yielded 30, it will continue from the postion where you last yielded - (yield 30 with 13) y = 10 + 17 = 27
