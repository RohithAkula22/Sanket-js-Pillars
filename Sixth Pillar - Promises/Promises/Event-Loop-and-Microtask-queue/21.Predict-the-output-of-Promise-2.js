function fetchData(url) {
  return new Promise(function (resolve, reject) {
    console.log("Started downloading from ", url);
    setTimeout(function processDownloading() {
      let data = "Dummy Data";
      resolve(data);
      console.log("Download completed"); // this is still in callstack, so after this microtask queue functions are executed
    }, 7000);
  });
}

console.log("Start");
let promiseObj = fetchData("adjiafif");
promiseObj.then(function A(value) {
  console.log("Value is ", value);
});

console.log("end");
