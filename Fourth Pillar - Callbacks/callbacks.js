// This concept technically exist in every language
// You would be using daily in your programming career from now on - heavily used in programming

/*
* fun is a Higher Order function --> It takes fn(which is a function) as argument

* x --> number
* fn --> function
*/

function fun(x, fn) {
  for (let i = 0; i < x; i++) {
    console.log(i);
  }
  fn();
}

fun(10, function exec() {
  //callback
  console.log("I am also executed");
});

// ? exec() here is a callback funtion where we can pass it to the HOFs
/*
0
1
2
3
4
5
6
7
8
9
I am also executed
*/
