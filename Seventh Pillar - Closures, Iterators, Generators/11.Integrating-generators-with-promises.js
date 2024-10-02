function download(url) {
  return new Promise(function exec(resolve, reject) {
    console.log("Starting to download data from", url);
    setTimeout(function down() {
      console.log("Downloading completed");
      const content = "ABCDEF"; //assume dummy download content
      resolve(content);
    }, 6000);
  });
}

function writeFile(data) {
  return new Promise(function exec(resolve, reject) {
    console.log("Started writing a file with", data);
    setTimeout(function write() {
      console.log("Completed writing the data in a file");
      const filename = "file.txt";
      resolve(filename);
    }, 5000);
  });
}

function uploadData(file, url) {
  return new Promise(function exec(resolve, reject) {
    console.log("Started uploading", file, "on", url);
    setTimeout(function up() {
      console.log("Upload completed");
      const response = "SUCCESS";
      resolve(response);
    }, 2000);
  });
}

// All the above 3 function are promise based functions, they take something and return something when they are resolved

function doAfterReceiving(value) {
  //going to take your global iterator and call next function
  let future = iter.next(value);
  console.log("future is", future);
  if (future.done) return;
  future.value.then(doAfterReceiving);
}

function* steps() {
  const downloadedData = yield download("www.xyz.com");
  console.log("Data downloaded is", downloadedData);
  const fileWritten = yield writeFile(downloadedData);
  console.log("file written is", fileWritten);
  const uploadResponse = yield uploadData(fileWritten, "www.drive.google.com");
  console.log("Upload response is", uploadResponse);
}

const iter = steps();
const future = iter.next();
future.value.then(doAfterReceiving);

// SUMMARY : All the .then code here looks like PROCEDURAL CODE here and its not like it blocks anything
// * The generators are here are asynchronous generators

// * We have async/await which handles this beautifully
