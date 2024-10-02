// To create an object in JS {x : 10, y : 11}
// *With new keyword also we can create an Object, more indepth discussion later

/*
  * Creating a Promise
  * new Promise() - Creates a Promise Object
  * () - this constructor expects a callback - (f)
  ? What type of callback should we pass

  * new Promise(function(resolve, reject){
  *  Inside this function we can write our time consuming task
  * Time consuming could be anything - downloading data or we can write non-consuming tasks also
  * }) 
  * with two paramaters in the callback function, you can name them anything
  * callback function can be anonymous or named
  

  *Whenever in the implementation of executor callback you call the resolve function, the promise goes to a fulfilled state

  *Whenever in the implementation of executor callback you call the reject function, the promise goes to a rejected state

  *If you do not call anything promise remains in the pending state
  
  ? resolve()
  * the moment you call resolve funtion the Promise from "Pending" state goes into the "fulfilled" state

  ? reject()
  * the Promise goes into "rejected" state

  *Apart from state property, Promise has value property
  * pending , value = undefined
  * fulfilled, value gets updated with argument that you pass into the resolve function, i.e resolve(x), here the value of x
  * rejected, value gets updated with argument that you pass into the reject function, i.e reject(y), here the value of y
*/
