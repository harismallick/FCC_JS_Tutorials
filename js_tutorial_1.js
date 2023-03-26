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
console.log(`${poppedElement} removed to make ${nestedArray}`);

// shift() --> Its the opposite of pop(); removes the first element from the array.

var shiftedElement = nestedArray.shift();
console.log(`${shiftedElement} removed to make ${nestedArray}`);

// unshift() --> Its the opposite of push(); adds an element to the front of the array.

var unshiftedElement = [1,2,3];
nestedArray.unshift(unshiftedElement)
console.log(`${unshiftedElement} added to make ${nestedArray}`);

// Using backticks outputs an array differently in to console to a normal output.

var shoppingList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]];

/////////////////////////////////////////////////////////////////////////////////

/* Functions in JS */

// Define a code snippet that can be executed anytime it is called.
// A function is initialised using the 'function' reserved word. 'def' in Python.
// name the function and follow with parentheses (). args and kwargs for function written in them.
// Then open a pair of curly brackets {}. The code to be executed is written in here. Each line of code in here should be followed up with semicolon. No need to add semicolon after the closing curly bracket.
// Variables defined outside of functions have global scope; can be accessed anywhere in the code.
// Variables defined with 'var', 'const' or 'let' within a function have local scope to that function. Cannot be accessed outside it.
// However, if you define a variable without using the above 3 reserved words in a function, it WILL have global scope. This is not considered good practice though.
// If a local variable and a global variable have the same name, the local variable takes precedence within the function.
// The return output from a function can be stored in variables.

function exampleFunction() {
    console.log("Hello world");
}

exampleFunction();

function funcWithArgs(num1, num2, operator) {
    if (operator == "+") {
        console.log(num1 + num2);
    }
    else if (operator == "-") {
        console.log(num1 - num2);
    }
    else {
        console.log("Invalid operator given");
    }
    
}

funcWithArgs(10, 8, "+");
funcWithArgs(10, 8, "-");
funcWithArgs(10, 8, "*");

// Testing precedence of local scope vs global scope in a function:

var outerWear = "T-shirt";
function myOutfit() {
    var outerWear = "Sweater";
    return outerWear;
}
console.log(myOutfit());
console.log(outerWear);

function returnTest(num1, num2) {
    sum = num1 + num2;
    diff = num1 - num2;
    return sum, diff; //this syntax does not work in JS! Only the last element will be returned. Must return multiple values as either an array or an object!
}

var addition, subtraction = returnTest(10, 5);
console.log(`Result of sum is ${addition} and of subtraction is ${subtraction}`);
// addition variable is undefined when trying to implement Python syntax.

function returnTest2(num1, num2) {
    sum = num1 + num2;
    diff = num1 - num2;
    return [sum, diff]; //this syntax does not work in JS! Only the last element will be returned. Must return multiple values as either an array or an object!
}

var [addition2, subtraction2] = returnTest2(10, 5);
console.log(`Result of sum is ${addition2} and of subtraction is ${subtraction2}`);
// This is the correct syntax for JS.

//////////////////////////////////////////////////////////////////////////////////

// Equality operators, boolean and if-else statements in JS //

// The equality operator is '=='. No type checking is done with this operator.
// There is also a strict equality operator, which is '==='. This one type checks, so 3 and '3' will not be identical when using this operator.
// '!=' is the inequality operator, and '!==' is the strict inequality operator.
// Other comparison operators are: <, <=, >, >=.
// If multiple conditions to be tested, use the '&&' operator to combine them into one if statement.
// For using the 'or' logic in JS, its two pipes '||'.

function equalityOpCheck(num, string) {
    if (num == string) {
        console.log(`Using the '==' operator, number ${num} is the same as string ${string}.`);
    }
    if (num === string) {
        console.log(`Using the '===' operator, ${num} is the same as ${string}.`);
    }
    else {
        console.log(`Using '===', number ${num} is different to string ${string}`);
    }
}
equalityOpCheck(3, "3");

function gtLtOperators(num) {
    if (num >= 5 && num <= 10) {
        console.log(num**2);
    }
    else if (num < 0 || num > 50) {
        console.log("Can use negatives or very large numbers.");
    }
    else {
        console.log("Number is not in the expected range.");
    }
}
gtLtOperators(7);
gtLtOperators(3);
gtLtOperators(-25);
gtLtOperators(60);

function golfScore(par, strokes) {
    const scoreChart = {
        "0": "Par",
        "1": "Bogey",
        "2": "Double Bogey",
        "3": "Go home!",
        "-1": "Birdie",
        "-2": "Eagle",
        "-3": "Albatross" 
    }
    var result = strokes - par;
    if (strokes == 1) {console.log("Hole-in-one!");}
    else {
        console.log(`${scoreChart[result]}`);
    }
}
golfScore(4, 4);
golfScore(4, 1);
golfScore(4, 3);
golfScore(4, 2);
golfScore(5, 2);
golfScore(4, 5);
golfScore(4, 6);

// Switch Case statements //

// Rather than chaining multiple if and else if statements together, it might be better to use switch case statements.
// A break statement is needed between cases if you don't want multiple cases to be checked after one is achieved.

function usingSwitchCase(num) {
    var answer = "";
    switch(num) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default:
            answer = "Invalid number given.";
            break;
    }
    return answer;
}

console.log(usingSwitchCase(3));
console.log(usingSwitchCase(7));

// Returning a boolean for an operation in JS //
// You can return the actual operation and the data stored will either be true or false.

function boolTest(num1, num2) {
    return num1 < num2;
}
console.log(boolTest(15, 10));

/////////////////////////////////////////////////////////////

// Objects (dictionaries) in JS //

// You can use dot notation to store the value of a key:value pair in a variable.
// Can access value by using bracket notation as well, similar to Python.

var testObject = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObject.hat;
var shirtValue = testObject["shirt"];
var shoeKey = "shoes";
console.log(hatValue, shirtValue, testObject[shoeKey]);

// All three ways to access values of dictionary elements in JS.
// New key:value pairs can be added using these different methods as well.

testObject["pants"] = "cargo";
testObject.overall = "coat";

console.log(testObject);

delete testObject.overall;
console.log(testObject);

// This is how you delete a key:value pair from a dict in JS.

// To check if a dict have a particular key, use the dot function ".hasOwnProperty"

if (testObject.hasOwnProperty("overall")) {
    console.log(testObject.overall);
}
else {
    console.log("Not found");
}

// Working with complex objects in JS //

var myMusic = {
    rock: {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": ["cd", "8T", "LP"],
        "gold": true
        },
    hiphop: {
        "artist": "John Doe",
        "title": "Cereal Man",
        "release_year": 2003,
        "formats": ["YouTube"],
        "gold": false
        }
};

console.log(myMusic.rock.artist);
// Nested objects:
// They can be accessed using dot notation to get to the desired object and attribute stored inside it.

////////////////////////////////////////////////////////

// While and for loops in JS

var whileList = [];
var i = 0;

while (i < 5) {
    whileList.push(i);
    i++;
}

var forList = [];

for (var j = 0; j < 5; j++) {
    forList.push(j);
}

console.log(whileList, forList);

for (var k = 0; k < forList.length; k++) {
    num = forList[k];
    console.log(`${num} x 10 = ${num * 10}`);
}
// The '.length' function is the same is len() in Python.

var doWhileList = [];
l = 10;
do {
    doWhileList.push(l);
    l++;
} while (l < 5)

console.log(l, doWhileList);
// a do-while loop always executes once, as the condition is checked at the end of the first loop.

