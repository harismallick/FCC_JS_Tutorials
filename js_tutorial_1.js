// Source of tutorial: https://www.youtube.com/watch?v=PkZNo7MFNFg&t=360s

/* The basics of JS */

console.log("hello world");
const a = 5;
const b = 4;
const c = a + b;
console.log(`The answer is ${c}`);
// document.body.innerHTML += `Answer to ${a} + ${b} is ${c}`

// Comments are made in JS with double forward slashes
// Need to install nodejs to execute js files in the terminal.
// Alternatively, you can execute js files in the browser by importing into a html file.
// The equivalent of print() from Python is console.log(). This will print the output in the terminal.
// However, console.log() does not print the output on an html page.
// Need to use document.body.innerHTML or document.getElementById.innerHTML

/*
Data types in JS:
undefined, null, boolean, string, symbol, number and object
*/

// undefined is any variable that has no value. To add value, use the '=' operator.
// null means the variable has been set to contain nothing.
// boolean - True or False
// string - a collection of characters enclosed in double quotes.
// symbol - an immutable value
// number - integers and floats stored in this variable class
// object - this is the Python equivalent of a dictionary

// Three different reserved words allow you to declare a variable:
// var - The variable declared with this can be used across the entire js file.
// let - The variable declared using let will exist within the scope of where it was declared, ie, the function.
// const - Used to declare a variable, whose value will not change.
// Camel case is acceptable naming convention in JS. 
var myName = "John Doe";
myName = 55;
console.log(myName);

// myName was typed as containing a string. But its value can be changed to contain anything downstream in the code.

let country = "England";
country = 2023;
console.log(country);
 // Similar to var, variables declared with 'let' are mutable.

 const pi = 3.14;
//  pi = "hello"
 console.log(pi);
// This variable's value is immutable. Trying to change it will cause an error.

// In JS, declaring and defining a variable are two separate things.
// Declaring a variable:
var aa;

// Defining a variable is assigning it a value with the '=' operator:
var bb = 5;

