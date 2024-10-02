function process() {
  let i = 0;
  let j = [1, 2, 3];
  let k = 10;
  function innerProcess() {
    i += 1;
    console.log(j);
    return i;
  }
  return innerProcess;
}

let x = process();

let obj = { func: x };

// See the obj here in BROWSER
// * IT only remembers i, j in the CLOSURES as we are not using k, JS does some kind off optimization to remove unnecessary things
