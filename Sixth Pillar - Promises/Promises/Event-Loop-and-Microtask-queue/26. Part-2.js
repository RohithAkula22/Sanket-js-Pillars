function download(url) {
  console.log("Started downloading from", url);
  return new Promise(function exec(resolve, reject) {
    setTimeout(function p() {
      console.log("Completed downloading data in 5 seconds");
      const content = "ABCDEF";
      resolve(content);
    }, 5000);
  });
}

download("www.xyz.com").then(function fulfillHandler(value) {
  console.log("Content dowloaded is", value);
});

// ! You yourself are responsible for calling the callback, what if they don't call we know that the Promise would be in Pending state
// ? What if you want to call your callback twice ---> We have a solution in next parts
