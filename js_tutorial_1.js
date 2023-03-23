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

// In JS, declaring and assigning a variable are two separate things.
// Declaring a variable:
var aa; // Default value is undefined
console.log(aa);
aa = 25;
console.log(aa);
// Assigning a variable is giving it a value with the '=' operator:
var bb = 5;

// Declaring and initialising a variable -- Declare it using var, const or let; initialise it with '= (value)'
// Variable names are case sensitive in JS. Use camel case.
// Mathematical operators for the different operations are: '+', '-', '*', '/', '**', '%'
// For floor divide, use the Math.floor() function. No designated operator for floor divide in JS.

var sum = 5 + 5;
var diff = 5 - 5;
var multiply = 5 * 5;
var divide = 5 / 5;
var power = 5 ** 5;
var modulus = 5 % 5;
var floor = Math.floor(5/5);

console.log(`Operations on (5, 5): Sum = ${sum}, Difference = ${diff}, Product = ${multiply}, Quotient = ${divide}, Exponent = ${power}, Remainder = ${modulus}, Floor Divide = ${floor}`)

// Incrementing/ decrementing numbers by 1 in JS: Write '++' or '--' after the variable name.
// Equivalent to '+=' and '-=' in Python. These operators used in JS too to increment/decrement by more than 1.
// '*=' and '/=' are also used in JS.

sum++;
diff--;

console.log(sum, diff);

var float = 2.0 * 2.5;

console.log(float);
// In Python, multiplying two floats would've provided the answer to one decimal place minimum.
// In JS, if no decimals need to be displayed, then the answer is displayed as an int.

var float_2 = 3.5/2.7;
console.log(float_2);

//////////////////////////////////////////////////////////////////////////////////////////

// Working with strings

// Assigning strings to variables in JS -- Similar to Python, JS is not strict with "". Single quotes can be used as well. Fstrings equivalent in JS is ``, with variables written in ${}.

var quotes = "This is how you \"use quotes\" within a string literal in JS";
// Use the backslash escape character before the quotes to use it as a character in the string.
console.log(quotes);

var quotes_2 = 'This is another way to "use quotes" within a string literal in JS';
// Use single quotes on the outside, then you can use double quotes inside.
console.log(quotes_2);

var quotes_3 = `"Backticks offer another way 'use quotes' "within" a string literal in JS"`;
// Use the backslash escape character before the quotes to use it as a character in the string.
console.log(quotes_3);

var testStr = "First line\n\t\\Second line\nThird line";
console.log(testStr);

//Different escape characters in JS: \', \", \\, \n, \t, \r, \b (backspace), \f (form feed)

// Concatenating strings in JS //
var firstName = 'John';
var secondName = 'Doe';
var fullName = firstName + secondName;

console.log("Hi" + " My name is" + " " + firstName + ` ${secondName}`);
// Summary of all the different ways strings can be concatenated in JS.

// String manipulation functions in JS //

var fullNameLength = fullName.length;
console.log(fullNameLength);

for (let i=0; i < fullNameLength; i++) {
    console.log(fullName[i]);
};

console.log(`Last letter of full name is: ${fullName[fullName.length-1]}`);

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += 'The ' + myAdjective + ` ${myNoun} ${myVerb}` + " to the store " + myAdverb + ".";
    return result;
}

console.log(wordBlanks('dog', 'big', 'ran', 'quickly'));

////////////////////////////////////////////////////////////////////////////////////////////

// Working with arrays

// Arrays are defined with [] brackets.
// Each element in the array is separated by a comma.
// Can create nested arrays.

var firstArray = [1,2,3,4,5,6];
// A unique element can be accessed using its index.

console.log(firstArray[2]);

firstArray[3] = 25;
console.log(firstArray);
// Specific element in the array can be changed by accessing it using its index.

var nestedArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11],12,13]];
// An element in a nested array can be accessed using its outer array and inner array indices.
console.log(nestedArray[2][1]);
// should output 8
console.log(nestedArray[3][0][1]);
// should output 11

// push() --> python equivalent of append()

nestedArray.push([14,15,16]);
console.log(nestedArray);

// pop() --> works the same as in Python. Removes the last element in an array.

var poppedElement = nestedArray.pop();
console.log(`${poppedElement} removed from ${nestedArray}`);

// shift() --> Its the opposite of pop(); removes the first element from the array.

var shiftedElement = nestedArray.shift();
console.log(`${shiftedElement} removed from ${nestedArray}`);
