Promise.resolve("foo")
  // 1. Receive "foo", concatenate "bar" to it, and resolve that to the next then
  .then(
    // * Registering a new Promise
    (string) =>
      new Promise((resolve, reject) => {
        //* Here we are returning a new Promise again, in the previous example we returned a String and the next .then would consider it as a resolved Promise and take that string as value, here we are returning a new Promise and this will be resolved in 10 secs
        setTimeout(() => {
          string += "bar";
          resolve(string); // ! Here after 10 secs we are finally resolving the Promise, and value = foobar and the next fulfillment handler wi;; be executed
        }, 1);
      })
  )
  // 2. receive "foobar", register a callback function to work on that string
  // and print it to the console, but not before returning the unworked on
  // string to the next then
  .then((string) => {
    //* so this .then also waits as the above Promsie is not fulfilled and a timer of 10seconds is running
    // ! Now the above Promise is fulfilled, now this executes, sees timer and starts a timer and moves on
    setTimeout(() => {
      // * Another Timer
      string += "baz";
      console.log(string); //* foobarbaz - after 1ms then string would get foobarbaz
    }, 1);
    return string; // * foobar
    // ! We are here returning a normal string and not a Promise hence this .then Promise is Resolved and moves to the next ff handler
  })
  // 3. print helpful messages about how the code in this section will be run
  // before the string is actually processed by the mocked asynchronous code in the
  // previous then block.
  .then((string) => {
    //* so this .then also waits
    console.log(
      "Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising"
    );

    // Note that `string` will not have the 'baz' bit of it at this point. This
    // is because we mocked that to happen asynchronously with a setTimeout function
    console.log(string); // foobar
  });

// Logs, in order:
// Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising
// foobar
// foobarbaz
