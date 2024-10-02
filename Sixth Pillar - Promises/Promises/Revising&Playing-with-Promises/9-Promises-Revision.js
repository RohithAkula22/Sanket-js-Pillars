/*
* Revising
* We talked about Promsise Constructor - which helps us to create a new Promise Object
* Our Promises has got two properties - value = undefined, state = Pending, by default

* In your Promise constructor, it expects a executor callback - using this function only we can change the state of Promise
* new Promise(function (resolve, reject){
  * you can write here anything sync/async code
  * if you call resolve(param) --> Promise gets fulfilled, value is assigned the parameter value
  * if you call reject() --> Promise gets rejected, value is assigned the parameter value
*})

  * Executor logic is executed instantly after creating the new Promise

  * Refer MDN Promise MDN Documentation - their is dedicated article for Promise()

*/
