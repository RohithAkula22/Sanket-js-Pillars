function downloader(url) {
  return new Promise((resolve) => {
    console.log("Downloading from", url);
    setTimeout(function () {
      console.log("Downloading Done");
      const content = "ABCDEF";
      resolve(content);
    }, 4000);
  });
}

function writeFile(data) {
  return new Promise((resolve) => {
    console.log("Started writing the file with the given data", data);
    setTimeout(function () {
      console.log("Completed writing the data in file");
      const filename = "file.txt";
      resolve(filename);
    }, 5000);
  });
}

function upload(url, file) {
  return new Promise((resolve) => {
    console.log("Started uploading", file, "on", url);
    setTimeout(function () {
      console.log("Upload completed");
      const response = "SUCCESS";
      resolve(response);
    }, 2000);
  });
}

// Using the Promises
downloader("www.xyz.com")
  .then((content) => {
    console.log("We are now going to process the downloaded data");
    return writeFile(content);
  })
  .then((filename) => {
    console.log("We have downloaded and written the file, now will upload");
    return upload("www.upload.com", filename);
  })
  .then((response) => {
    console.log("We have uploaded with", response);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
