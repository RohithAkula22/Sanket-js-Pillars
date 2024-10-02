const newArr = [9, 8, 7, 6, 5];

function print(element, idx) {
    return `Element at index ${idx} is ${element}`;
}

function customMapper(arr, func) {
    let result = []; // One by one element will be pushed here
    for (let i = 0; i < arr.length; i++) { // Looping over the array
        result.push(func(arr[i], i)); // Correctly calling func with element and index
    }
    return result; // Return the result array
}

const value = customMapper(newArr, print);
console.log(value);
