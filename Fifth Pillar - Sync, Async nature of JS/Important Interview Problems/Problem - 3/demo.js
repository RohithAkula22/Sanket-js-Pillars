console.log("Hello World");
for (let i = 0; i < 3; i++) {
  setTimeout(function exec() {
    console.log("Timer done");
  }, 10);
}

console.log("End");

// * We are going to start 3 different timers:
/*

* My output :
* Hello World
* End
* Timer done
* Timer done
* Timer done

*/
