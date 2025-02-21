/*
// app.js
import { add, subtract } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
 
// Call the functions and log results (your choice of arguments)
console.log('Add: ', add(5, 3));  // Test your add function
console.log('Uppercase: ', toUpperCase('hello'));  // Test string manipulation
*/



// app.js
import multiply, { add, subtract } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';

console.log('Add: ', add(5, 3));  // Test your add function
console.log('Subtract: ', subtract(5, 3));  // Test your subtract function

console.log('Lowercase: ', toLowerCase('HELLO'));  // Test string manipulation
console.log('Uppercase: ', toUpperCase('hello'));  // Test string manipulation

console.log('Multiply: ', multiply(4, 5));  // Test the default export
 
console.log('Max: ', findMax([1, 2, 3, 4, 5]));  // Test findMax
console.log('Reversed: ', reverseArray([1, 2, 3]));  // Test reverseArray


// app.js
import { addAndLogUpper } from './mathModule.js';
 
addAndLogUpper(10, 20);  // Test the new function
addAndLogUpper("hello", "professor");