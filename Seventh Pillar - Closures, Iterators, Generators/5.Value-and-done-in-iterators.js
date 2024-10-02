// * Iterator has two properties : value and done property
/*
 * Value is the next value in the iterator sequence
 * done : This is true if you consumed all of the data, (if the last value in the sequence has already been consumed)
 * next()
 
 * Once created, an iterator object can be iterated explicitly by the next() function

 * In the array PROTOTPYE you have (Symbol.iterator)

  * arr = [1,2,3,4,5,6]
  * iterator = arr[Symbol.iterator]();
  * iterator.next() --> value : 1, done : false
  * iterator.next() --> value : 2, done : false
  * iterator.next() --> value : 3, done : false
  * iterator.next() --> value : 4, done : false
  * iterator.next() --> value : 5, done : false
  * iterator.next() --> value : 6, done : false
  * iterator.next() --> value : undefined, done : true
  
  * iterator() --> next() --> calling this will fetch data for you {value:, done:(tells whether you consumed all the data or not)}

  * You can have custom iterators like we wrote or we can use inbuilt iterators in JS

 */
