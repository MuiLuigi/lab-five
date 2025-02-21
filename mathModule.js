// mathModule.js
export function add(a, b) { /* Your code here */
    return (`The sum of ${a} and ${b} is: ${a + b}`);
 }
export function subtract(a, b) { /* Your code here */
    return (`The difference of ${a} and ${b} is: ${a - b}`);
 }

export default function multiply(a, b) { /* Your code here */
    return (`The product of ${a} and ${b} is: ${a*b}`);
 }
 

// mathModule.js
import { toUpperCase } from './stringModule.js';
 
export function addAndLogUpper(a, b) {
    const result = add(a, b);
    console.log(toUpperCase(result.toString()));
}