function DO(task) {
  // task is local to DO
  setTimeout(function exec() {
    console.log(task);
  }, 2000);
}

DO();
console.log(end);

/*
 * exec() will be executing out off DO, but it still remembers the task variable due to closures
 * remembers its lexical scope
 * and we are not snapshotting the value but remembering it
 */
