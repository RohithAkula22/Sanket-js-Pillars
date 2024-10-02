// TODO : TASKS : Don't Use Promises only use callbacks
// * 1. Write a function to download data from a URL
// * 2. Write a function to save that downloaded data in a file and return the filename
// * 3. Write a function to upload the file written in previous step to a new URL

function downloader(url, cb) {
  // * Downloads data from the given URL
  console.log("Downloading from the", url);
  setTimeout(function () {
    console.log("Downloading Done");
    const content = "ABCDEF";
    cb(content);
  }, 4000);
}

function writeFile(data, cb) {
  // * writes the given data into a new File
  console.log("Started writing the file with the given data");
  setTimeout(function write() {
    console.log("Completed writing the data in file");
    const filename = "file.txt";
    cb(filename);
  }, 5000);
}

function upload(url, file, cb) {
  // * uploads the data from a file to a given url
  console.log("Started uploading", file, "on", url);
  setTimeout(function up() {
    console.log("Upload completed");
    const response = "SUCCESS";
    cb(response);
  }, 2000);
}

downloader("www.xyz.com", function processDownload(content) {
  console.log("We are now going to process the downloaded data");
  writeFile(content, function processWrite(filename) {
    console.log("We have downloaded and written the file, now will upload");
    upload("www.upload.com", filename, function processupload(response) {
      console.log("we have uploaded with", response);
    });
  });
});
