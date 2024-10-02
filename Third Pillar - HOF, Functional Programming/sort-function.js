
let arr = [1, 10, 9, 100, 1000, 11, 12, 13, 14, 2, 3];

arr.sort(); //* it sorts the given array --> [expectation] --> this might arrange elements in increasing order
// TODO - Definition : But default implementatin of arr.sort() is going to sort the array in lexicographical order

/*
* 0 --> A
* 1 --> B
* 2 --> C
* 3 --> D
* 4 --> E
* 5 --> F
* 6 --> G
* 7 --> H
* 8 --> I
* 9 --> J


* arr = [B, BA, J, BAA, BAAA, BB, BC, BD, BE, C, D ]
* arr.sort() = [B, BA, BAA, BAAA, BB, BC, BD, ...] -- Dictionary order wise
*/

// ? How to make it increasing order sorting


let b = [1, 10, 9, 100, 1000, 11, 12, 13, 14, 2, 3];

// TODO : Now we want to sort b in increasing order

// sort is a HOF, takes another function as an argument, here it is taking comparator funciton as argument
b.sort(function (a, b) {
    return a - b;
    // * if a < b --> a - b will be negative
    // * if a > b --> a - b will be positive
    // * if comparator function gives negative then a is placed before b (a>b)
    // * if comparator function gives positive then b is placed before a (b<a)

});

console.log(arr)

console.log(b);