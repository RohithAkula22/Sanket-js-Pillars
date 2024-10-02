// TODO : Avoiding the Imperative, Make like a Pseudo Declarative, Writing a custom iterator

function fetchNextElement(array) {
  let idx = 0;
  function next() {
    if (idx == array.length) {
      return { value: undefined, done: true };
    }
    const nextElement = array[idx];
    idx++;
    return { value: nextElement, done: false };
  }
  return { next };
}

// Somewhere we consume it

const automaticFetcher = fetchNextElement([99, 11, 15, 35, 487, 48, 187, 857]); // inside automaticFetcher variable we can store next function
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());

/*
99
11
15
35
*/

// * we have iterators in C++ and also in JAVA, everywhere this kind off functionalities exist
// * Opening the tap and getting the DATA
