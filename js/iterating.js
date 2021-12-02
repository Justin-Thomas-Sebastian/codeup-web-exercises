"use strict";

/**
 * TODO:
 * Create an array of 4 people's names and store it in a variable called
 * 'names'.
 */

let names = ["Justin", "Thomas", "John", "Sebastian", "Kevin"];

/**
 * TODO:
 * Create a log statement that will log the number of elements in the names
 * array.
 */

console.log("Number of elements in names array: " + names.length);

/**
 * TODO:
 * Create log statements that will print each of the names individually by
 * accessing each element's index.
 */

console.log("Printing names[] using multiple log statements: ");
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);

console.log(" ");

/**
 * TODO:
 * Write some code that uses a for loop to log every item in the names
 * array.
 */

console.log("Printing names[] using for loop: ");
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}

console.log(" ");

/**
 * TODO:
 * Refactor your above code to use a `forEach` loop
 */

console.log("Printing names[] using forEach: ");
names.forEach(function(name){
   console.log(name);
});

console.log(" ");

/**
 * TODO:
 * Create the following three functions, each will accept an array and
 * return an an element from it
 * - first: returns the first item in the array
 * - second: returns the second item in the array
 * - last: returns the last item in the array
 *
 * Example:
 *  > first([1, 2, 3, 4, 5]) // returns 1
 *  > second([1, 2, 3, 4, 5]) // returns 2
 *  > last([1, 2, 3, 4, 5]) // return 5
 */

function first(arr){
    return arr[0];
}

function second(arr){
    return arr[1];
}

function last(arr){
    return arr[arr.length - 1];
}

// TEST CASES
let testArr = [1, 2, 3, 4, 5];
console.log("Test Array: [1, 2, 3, 4, 5]");
console.log("First Element: " + first(testArr));
console.log("Second Element: " + second(testArr));
console.log("Last Element: " + last(testArr));