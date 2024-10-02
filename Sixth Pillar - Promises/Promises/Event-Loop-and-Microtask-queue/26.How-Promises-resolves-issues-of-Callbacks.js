// Dummy downloader function

function download(url, cb) {
  console.log("Started downloading from url", url);
  setTimeout(function exex() {
    console.log("Completed downloading after 5 seconds");
    const content = "ABCDEF";
    cb(content);
  }, 5000);
}

download("www.xyx.com", function processDownload(data) {
  console.log("downloaded data is", data);
});

// ! The problem here is what if they call your callback twice or maybe they never call your callback
// ! Other function is deciding how to call your callback, this is the problem of Inversion of Control

// * Lets do this with Promises
