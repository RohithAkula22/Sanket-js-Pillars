// TODO : TASKS : Only use Promises
// * 1. Write a function to download data from a URL
// * 2. Write a function to save that downloaded data in a file and return the filename
// * 3. Write a function to upload the file written in previous step to a new URL

function download(url) {
  console.log("Started downloading from", url);
  return new Promise(function exec(resolve, reject) {
    setTimeout(function () {
      console.log("Download Completed");
      let content = "ABCDEF";
      resolve(content);
    }, 2000);
  });
}

let x = download("www.xyz.com");

x.then(function writeFile(content) {
  console.log("Downloaded data with following value", content);
  console.log("Started writing the file with the given data");
  return new Promise(function exec(resolve, reject) {
    setTimeout(function () {
      console.log("Completed writing the file with the given data");
      let filename = "file.txt";
      console.log("We have downloaded and written the file, now will upload");
      resolve(filename);
    }, 2000);
  });
}).then(function uploadData(file_name) {
  console.log("Started uploading", file_name);
  setTimeout(function () {
    console.log("Upload Completed successfully");
  }, 2000);
});
