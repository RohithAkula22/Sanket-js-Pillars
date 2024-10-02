Promise.resolve("foo") //* This is a resolved promise
  .then(function p1(string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        string += "bar";
        resolve(string);
      }, 10000);
    });
  })
  .then(function p2(string) {
    setTimeout(() => {
      string += "baz";
      console.log(string); // foobarbaz
    }, 1);
    return string; //foobar
  })
  .then(function p3(string) {
    console.log(string); // foobar
  });

/*
Promise.resolve("foo")
*/
// {
//   value: foo;
//   state: fulfilled;
//   onFulfillment: [p1];
//   onRejection: [];
// }

//  Here this 2nd .then returns you another Promise Object
// {
//   value: undefined;
//   state: pending;
//   onFulfillment: [p2];
//   onRejection: [];
// }

// {
//   value: undefined;
//   value: undefined;
//   state: pending;
//   onFulfillment: [p3];
//   onRejection: [];
// }

// * p1 starts its execution as its Promise is fulfilled and p1 returns a new Promise, not returning a primitive value where primitive means that Promise already fulfilled

// * Inside the new Promise we start a timer for 10 seconds

// * string += 'bar' => foobar

// * resolve(foobar) --> here we are resolving the new Promise

// * The p2 was waiting for the above Promise to be fulfilled

// * You would run the p2, sees a setTimeout timer and move on
// * return string; (sting here is foobar), Promise is resolved, so p3 is executed

// * foobar is printed

// * p2 setTimeout timer is done, string += "baz"; console.log(string); // foobarbaz
