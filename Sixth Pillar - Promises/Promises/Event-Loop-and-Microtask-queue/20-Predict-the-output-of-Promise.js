function fetchData(url) {
  return new Promise(function (resolve, reject) {
    console.log("Started downloading from ", url);
    setTimeout(function processDownloading() {
      let data = "Dummy Data";
      console.log("Download completed");
      resolve(data);
    }, 7000);
  });
}

console.log("Start");
let promiseObj = fetchData("adjiafif");
promiseObj.then(function A(value) {
  console.log("Value is ", value);
});

console.log("end");

/*

  TODO : MY FLOW

  * 1. Start
  * 2. Started download from adjiafif
  * setTimeOut starts a timer of 7 seconds
  * fulfillment handlers are registered on Promise Object [A]
  * 3. End
  * Timer is done, callback is in callback queue
  * 4. Download Completed
  * 5. Value is Dummy Data
  * Callback in callback queue is executed and Promise is resolved(data) and fulfillment handlers are pushed into the microtask queue
  * Event loop checks if callstack is empty and then pushes handlers into callstack
  * 


*/

/*
Start
Started downloading from  adjiafif
end
Download completed
Value is  Dummy Data
*/
