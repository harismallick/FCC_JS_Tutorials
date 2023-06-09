// Tutorial source: https://www.youtube.com/watch?v=EfAl9bwzVZk&t=83s //
// Documentation for key JS concepts and useful functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/

"use strict";

let myNum = 45;
let myString = "worWORworWOR";
let sum = myNum + myString;
console.log(typeof(sum));

// In JS, you can concatenate numbers to strings without type conversion!
// The result is a string.

/*** Common string operations ***/

// charAt() gives the element at a given index position in the string.
console.log(myString.charAt(3));

// indexOf() gives the index position of the first occurrence of a given string.
// lastIndexOf() is a variation that gives the index of the last occurrence of the given pattern in a string.
console.log(myString.length);
console.log(myString.indexOf("wor"));
console.log(myString.lastIndexOf("wor"));

// Slicing strings --> need to use the slice() function to do this, unlike Python where you can give the start and end index for slice in [] brackets.
// The start index is inclusive, while the end index is exclusive for the slice range.

console.log(myString.slice(0,3));

// making all elements upper or lowercase:

const myStringUpper = myString.toUpperCase();
const myStringLower = myString.toLowerCase();
console.log(myStringLower, myStringUpper);

// Check if a pattern is present in the given string with includes("pattern"). This will return a boolean.

console.log(myString.includes("wor"));

// Splitting strings --> with split("pattern"). Give the pattern at which you want the string to be split into separate elements output to an array.
// The pattern used to splitting is not included in the array.

const myStringSplit = myString.split("o");
console.log(myStringSplit);

/* 
All string operations that can be performed in JS:

String length
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String charAt()
String charCodeAt()
String split()

*/

/*** Working with numbers in JS ***/

// Integers and floats are treated at the same datatype in JS.
// Decimal points will only by shown in JS is a value other than zero follows after.

const myNum1 = 42;
const myFloat1 = 42.00;
const num1String = "42";

console.log(myNum1, myFloat1, num1String);
// Number datatypes will by output in a unique colour (based on your IDE settings).
// Numbers in string datatype will be output in white!

// Convert string to number --> Use the Number() function!
// If the string contains letters, using this function will output NaN.
// Boolean can also be converted to numbers: True = 1; False = 0;

// Convert number to string --> Use the String() function!

console.log(myNum1 === num1String);
// False as data types are different.

console.log(myNum1 === Number(num1String));
// True as the data type for the string was changed!

console.log(String(myNum1) === num1String);
// True as the data type of the number was changed to string!

// What if the string to be converted to a number has letter elements in it? //

// Use the parseInt() and parseFloat() functions!
// They parse the string to find the number.

const num2String = "45def";
const num3String = "45.7467def";

const num2 = parseInt(num2String);
const num3 = parseFloat(num3String);
const num3_2sf = num3.toFixed(2);
// toFixed() is like round() in Python; rounds to given amount of significant figures.
// BUT toFixed() outputs a string!

console.log(num2, num3, num3_2sf);

/***  The Math package in JS  ***/

console.log(Math.PI);
// Returns the value of Pi
console.log(Math.trunc(Math.PI));
// Truncates the float from the decimal point. Only returns the integer.
console.log(Math.round(Math.PI));
// Rounds the float to the nearest integer.
console.log(Math.ceil(Math.PI));
// Rounds up! Even if the decimal is < 0.5. Ceil is short for Ceiling.
console.log(Math.floor(Math.PI));
//Rounds down, even if the decimal is > 0.5.
console.log("\n");

const array1 = [1,2,3,4,5];
console.log(Math.min(...array1));
console.log(Math.max(...array1));
// Need to use the spread operator to use the min max math functions on an array.

// Generating random numbers --> use Math.random()
// This method can only generate a random number between 0 and 1.
// So, to generate a random number that is larger, you have to use an expression like below:

// Generate an integer between 0 and 10:
console.log(Math.floor((Math.random() * 10) + 1));
console.log(Math.floor((Math.random() * 10) + 1));
console.log(Math.floor((Math.random() * 10) + 1));

function randLetterFromName(first, last) {
    let name = first.concat(last);
    // console.log(name);
    let randNum = Math.floor((Math.random() * name.length));
    let randLetter = name[randNum];

    return randLetter;
}
console.log(randLetterFromName("John", "Doe"));
console.log(randLetterFromName("John", "Doe"));
console.log(randLetterFromName("John", "Doe"));

// Syntax of ternary operator //

// condition ? ifTrue: ifFalse;
// Can nest ternary operators.

let soup = "Tomato soup";
let isCustomerBanned = false;

let soupAccess = isCustomerBanned ? "No soup for you!" : soup ? `Soup of the day is ${soup}` : "No soup today.";

console.log(soupAccess);

///////////////////////////////////////////////////////////////////////

/*** User Input Data in JS ***/
// alert("Hello World");
// Alert displays a message on top of the webpage. Only an 'OK' button to dismiss.

// let myBool = confirm("OK === True\nCancel === False");
// confirm creates two buttons: OK and Cancel. The response can be set to a boolean.
// console.log(`Response to the confirm box was: ${myBool}`);

// let nameInput = prompt("Enter your name:");

// Node.js does not work with browser-only commands/functions.
// Trying to use them will cause an error. To test them, use 'go live' plug-in or open on web browser directly.

// slicing names from emails //

function namesFromEmail(email) {
    return email.slice(0, email.indexOf("@"));
}
console.log(namesFromEmail("johndoe@email.com"));

////////////////////////////////////////////////////////////////////////

/*** Working with arrays ***/

/***
    Methods that mutate the original array

    copyWithin()
    fill()
    pop() --> Remove element from the end of array
    push() --> Add element to the end of the array
    reverse() --> Reverse the list element index positions
    shift() --> Remove first element from the array
    sort() --> Sort list from min to max.
    splice() --> Add or remove elements at defined index positions
    unshift() --> Add element to index position 0.
    slice() --> Slices out part of the array based on the start and end indices given. If only one argument given, that will be the start position and will slice till the end of the array.

 ***/

/*** 
    Objects (Dictionaries) in JS

    - Objects store key:value pairs.
    - The value can be any data type or data structure.
    - In JS, even functions can be stored in objects.
    - You can use one object as a template to create/instantiate another object.
    - This uses the OOP principle of inheritance.
    - keys(), values() returns an array of keys and values respectively.
    - hasOwnProperty("property") returns a boolean for if the property exists in object.
***/

const vehicle = {
    type: "car",
    wheels: 4,
    features: ["satnav", "parking sensors", "heated seats"],
    engine: function () {return "vroom!";}
}
console.log(vehicle.engine());

const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.features);

// Even though the truck object has inherited attributes from the vehicle object, when using console log, only the attributes unique to 'truck' object are displayed.

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function() {return "vtec kicked in yo!";};

console.log(car.engine(), car.wheels);

const tesla = Object.create(car);
tesla.engine = function() {return "silent!";};
// creating a child object from another child object.
// It will inherit all the unique features of object 'Car', then features of object 'vehicle'.

console.log(tesla.doors, tesla.features, tesla.engine());

// Destructuring Objects

const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "Jogn Bonham"
};
const { vocals : a, guitar : b } = band;
console.log(a,b);
// Method 1 of destructuring if you want to define own variable names to store values.

const { vocals, guitar } = band;
console.log(vocals, guitar);
// If you want to use key-names as destructured variable names, do this.

function getBandPlayer({ vocals }) {
    return `${vocals} is the singer.`;
}
console.log(getBandPlayer(band));
// If args for function placed inside {}, the object keys will be parsed directly.


//////////////////////////////////////////////////////////////////////////////////

// Classes in JS //

// Use the 'class' reserved word to define a class in JS.
// constructor() is like the __init__ of Python to instantiate an object instance.
// Attributes can be placed inside the constructor.
// static and other functions can be defined without using the 'function' key word.
// attributes need to be defined using the 'this' keyword, which is like 'self' in Python.
// To instantiate a class object, the 'new' keyword must be used!

class Pizza {
    #size;
    #toppings;
    #crust;
    constructor(pizzaType, pizzaSize, pizzaCrust) {
        this.type = pizzaType;
        this.#size = pizzaSize;
        this.#crust = pizzaCrust;
        this.#toppings = [];
    }
    get crustType() {
        return this.#crust;
    }
    set crustType(newCrust) {
        this.#crust = newCrust;
    }
    getSize() {
        return this.#size;
    }
    setSize(newSize) {
        this.#size = newSize;
    }
    getToppings() {
        return this.#toppings;
    }
    setToppings(...args) {
        for (let item of args) {
            this.#toppings.push(item);
        }
    }

    bake() {
        console.log(`Baking a ${this.#size} ${this.type} ${this.#crust} crust pizza with ${this.#toppings} toppings.`);
    }
}

const myPizza = new Pizza("chicken tikka", "large", "stuffed");
myPizza.bake();

// console.log(myPizza.#crust);
// Trying to access a private variable outside of the class will result in an error.
// Trying to access it without the '#' will output undefined.

// Attributes can be accessed using dot notation followed by attribute name.
// However, this is not desirable, as the attribute value can also be changed this way.
// Should use getters and setters.
// Make the attributes private by placing an '#' before the attribute name.
// Then only getters and setter will be used to access the attributes.

console.log(myPizza.crustType);
// console.log(myPizza.crustType("thin"));
myPizza.crustType = "thin";
console.log(myPizza.crustType);

// Rather than using getters and setters, you can define functions with semantically appropriate names to achieve the same function.

console.log(myPizza.getSize());
myPizza.setSize("medium");
console.log(myPizza.getSize());

myPizza.setToppings("chicken", "onions", "olives", "jalapenos");
console.log(myPizza.getToppings());
myPizza.bake();

class SpecialtyPizza extends Pizza {
    constructor(pizzaType, pizzaSize, pizzaCrust, shape) {
        super(pizzaType, pizzaSize, pizzaCrust)
        this.shape = shape;
    }
    getShape() {
        return this.shape;
    }
    setShape(newShape) {
        this.shape = newShape;
    }
}

const newPizza = new SpecialtyPizza("pepperoni", "large", "stuffed", "square");
console.log(newPizza.getShape());
console.log(newPizza.crustType);

// Use the super() function to pass arguments from the child class to the parent class to instantiate attributes for the object. 

////////////////////////////////////////////////////////////////////////////

// JSON: Javascript Object Notation Format //

// It is currently the most popular format for sharing data over the web.
// JSON is language independent and can be parsed or generated using any programming language.
// It is a collection of key:value pairs, where the keys are ALWAYS in double quotes.
// In JS, there's no need to write object keys in quotes. But, for json, its a must.
// In JS, you can add functions to objects. These cannot be converted to json format, and will be ignored during the conversion.

const myObj = {
    name: "John Doe",
    hobbies: ["eat", "sleep", "code"],
    hello() { console.log("Hello World")}
}
myObj.hello();
console.log(myObj.name);
console.log(Object.keys(myObj));
// You can see that 'hello' is clearly a key with the value of a function.
// But this key wont be converted to json.
// Convert object to JSON using the following methods:

const myObjJson = JSON.stringify(myObj);
console.log(myObjJson);
console.log(typeof myObjJson);

const myObjJsonConvert = JSON.parse(myObjJson);
console.log(myObjJsonConvert);
console.log(typeof myObjJsonConvert);

// JSON is a string datatype. In order to parse through it using object notations, it must be converted to an object first. This is achieved using the JSON.parse() method.

/////////////////////////////////////////////////////////////////////////////

// Error handling in JS //

// To avoid typing errors and mismanaged variable names, add "use strict"; to the top of the script. This tells JS to apply strict typing to variables. Either const or let needs to be used to declare and define variables.
// Like most languages, use try-catch blocks to deal with errors if they are expected.
// With any error, you can choose to display three attributes: err.name, err.message and/or err.stack.

function makeError() {
    try {
        // const name = "John";
        // name = "Doe";
        // // Should throw error as name declared with const.
        throw new customError("This is a custom error.");
    }
    catch (err) {
        // console.log(err);
        // console.warn(err);
        console.error(err.name);
        console.table(err);

    }
}
makeError();
// The different console methods only look different in the browser. 
// In the terminal with node.js, they all look the same.
console.log("\nStatement after try catch block to see if downstream code executes.");

// Can create custom errors to catch:

function customError(message) {
    this.message = message;
    this.name = "Custom Error";
    this.stack = `${this.name}: ${this.message}`;
}

function tryCatchFinally() {
    let i = 1;

    while (i <= 5) {
        try {
            if (i % 2 !== 0) {
                throw new Error("Odd Number");
            }
            console.log("Even Number"); // This line of code will only execute if no error thrown in the code above in the try block. If an error occurs, all downstream code in the try block is ignored.
        }
        catch (err) {
            console.error(err.name);
        }
        finally {
            i++;
            console.log("...finally");
        }
    }
}
tryCatchFinally();

/////////////////////////////////////////////////////////////////////////////////////

// Document Object Model (DOM) //

const view1 = document.getElementById("view1");
console.log(view1);
const view2 = document.querySelector("#view2");
console.log(view2);
// Two different ways of obtaining html elements by using their id.
// When using the querySelector() method, need to place a '#' before the id, to tell JS that its a class name.

view1.style.display = "flex";
view2.style.display = "flex"; // try "none". This display is removed.

const views = document.getElementsByClassName("view");
console.log(views);

const views2 = document.querySelectorAll(".view");
// Just like '#' is used in querySelector to signify an id, '.' signifies a class. Query selector will look for a class with the name that follows the dot.
console.log(views2);

const divs = document.getElementsByTagName("div");
console.log(divs);

const divs2 = document.querySelectorAll("div");
// To search for particular tags, just write the tag name. No special characters needed.
console.log(divs2);

// getElements methods output an html collection, while using the query selector outputs a list of nodes.
// Every element in an html page is a node.

// Once you've isolated the html elements you want, you can modify them using JS as well.

const evenDivs = document.querySelectorAll("div:nth-of-type(2n");
console.log(evenDivs);

for (let div of evenDivs) {
    div.style.backgroundColor = "darkblue";
}

// Changing the text //

const navText = document.querySelector("nav h1");
console.log(navText);

navText.textContent = "Hello world";

const navbar = document.querySelector("nav");
navbar.innerHTML = `<h1>Hello!</h1> <p>This should align right</p>`;
navbar.style.justifyContent = "space-between";
console.log(navbar);

// Navigating the HTML DOM by using different methods, shown below.
// From just one node, you can navigate the entire DOM tree by accessing adjacent or parent elements.

console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].parentElement.nextSibling);
console.log(evenDivs[0].parentElement.previousSibling);
console.log(evenDivs[0].parentElement.previousElementSibling);

view1.style.display = "none";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";

// Removing elements from html page:

while (view2.lastChild) {
    view2.lastChild.remove();
}

// Creating a new element in HTML using JS:

function createDivs(parent, iter) {
    const newDiv = document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.backgroundColor = "#000";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    parent.append(newDiv);

}
// Using function to create one element:
// createDivs(view2, 10);

// Creating multiple new elements using the same function with loops:

for (let i = 1; i <= 12; i++) {
    createDivs(view2, i);
}

const testH2 = document.createElement("h2");
// const testHeader = document.testDiv.createElement("h2");
testH2.textContent = "Second Page";
view2.append(testH2);

//////////////////////////////////////////////////////////////////////////////////////

// Event Listeners on HTML with JS //

console.log(view2);

// This document element linked to id will only be accessed by a linked JS script if the execution of the script tag is set to 'defer'. This will enable the entire html page to be parsed before the script is run.

// Event listeners are a way to track user activity on the html page, at to execute particular tasks based on the event.

function initApp() {
    const div = view2.querySelector("div");
    const h2 = view2.querySelector("h2");

    // Syntax: addEventListener(event, function, useCapture);

    const doSomething = () => {
        alert("You clicked something.");
    }
    h2.addEventListener("click", doSomething, false);
    h2.removeEventListener("click", doSomething, false);

    // Event listeners can be removed using the removeEventListener method.
    // However, this method does not work on anonymous functions as shown below:
    view2.addEventListener("click", (event) => {
        view2.style.backgroundColor = "purple";
        // view2.classList.toggle("purple");
        // view2.classList.toggle("darkblue");
        // Will only work if css classes defined.
        console.log("background-color changed")
    });
    h2.addEventListener("click", (event) => {
        event.stopPropagation();
        console.log(event.target);
        const myText = event.target.textContent;
        myText === "Second Page" ? (event.target.textContent = "Clicked it") : (event.target.textContent = "Second Page");
        localStorage.clear();
        // See storage API below -- any local data will be deleted on click.
    });
    const nav = document.querySelector("nav");
    nav.addEventListener("mouseover", (event) => {
        nav.style.height = "100px";
    })
    nav.addEventListener("mouseout", () => {
        nav.style.height = "48px";
    })
    // Many different event types can be triggered on html pages. Read documentation for more info.
}
// You can see that when event listeners are linked to layered elements on the html page, one event listener can initiate another (clicking h2 causes view2 color to change).
// This is known an event bubbling.
// To prevent this from happening, use the event.stopPropagation() method.

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("ReadyState: complete");
        initApp();
    }
})

// Having an event listener for ready state means you can ensure the html page is fully loaded before you activate other event listeners for the user to interact with.

////////////////////////////////////////////////////////////////

// Web storage API //

// When making a web based application, data might need to be stored for each session or for multiple sessions.
// To achieve this, the sessionStorage and localStorage functions are used. 
// Data stored per session will be lost every time the webpage is refreshed or closed.
// Local data will be available even when the web page has been closed.

const testArray = ["eat", "sleep", "code"];

sessionStorage.setItem("sessionData", JSON.stringify(testArray));
const sessionData = JSON.parse(sessionStorage.getItem("sessionData"));

localStorage.setItem("localData", JSON.stringify(testArray));
const localData = JSON.parse(localStorage.getItem("sessionData"));

// The web storage API saves data in strings ONLY.
// So the JSON class can be used to convert data between string and the expected data type.

////////////////////////////////////////////////////////////////////

// Importing modules/packages in JS //

// <script type="module" src="js_tutorial_2.js"></script>
// When you will be importing functions from other JS files into the source JS file linked to an html page, type="module" is needed.
// It applies the 'defer' attribute by default, so no need to write it.
// "use strict"; is also applied by default when using modules.
// For the functions that you wish to export into the current JS file, make sure 'export' is added in front of the function definition.
// One default export function can be created by adding 'default' to the definition.
// See the module.js file for example.

import playGuitar from "./module.js";
import { shredding, plucking as picking } from "./module.js";
import { nameEmail } from "./module.js";
// You can rename a function before using it in your script, in case you have created functions in your script with the same name.
// Can import classes the same way.

console.log(playGuitar());
console.log(shredding());
console.log(picking());

const newUser = new nameEmail("John Doe", "email@email.com");
console.log(newUser.greeting());


///////////////////////////////////////////////////////////////////

// Higher order functions in JS //

// These are functions that do one of the following:
// Take one or more functions as an argument
// Returns a function as a result.

// There are three higher order functions:
// - map()
// - filter()
// - reduce()

// Test data acquired from https://jsonplaceholder.typicode.com/posts

import dataObjects from "./data.json" assert { type: 'json'};

console.log(dataObjects);

const dataFiltered = dataObjects.filter(filterByUser);

function filterByUser(data) {
    if (data["userId"] === 1) {
        return data;
    }
}
console.log(dataFiltered);

const dataFilteredMapped = dataFiltered.map((data) => {
    return data["id"] * 10;
});
console.log(dataFilteredMapped);

const filteredMappedReduced = dataFilteredMapped.reduce((sum, data) => {
    return sum + data;
});

console.log(filteredMappedReduced);


// Aync await functions in JS //

// Web scraping and other applications that invovle using http requests require waiting on the data from the request, then executing lines of code to process the data downstream.
// In Python, the interpreter will not move to the next line of code, until the initial line of code is fully resolved.
// But in JS, the next lines of code will get executed, even if the previous get request is not fully resolved.
// No data will be present for using the downstream lines of code.
// To avoid this from happening, the follwing three concepts are used:
// - Promises
// - then() method
// - Async/Await functions

// Promises have three states: resolved (fulfilled), rejected and pending.
// Since JS does not wait for code to complete execution before moving on to next line, need to use then() dot method to force JS into waiting for promise to be fulfilled before moving on to next line of code.

const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if (!error) {
        resolve("Yes, promise resolved");
    }
    else {
        reject("No, promise rejected");
    }
});

console.log(myPromise);

// myPromise.then(value => {
//     return value + 1;
// }).then(newValue => {
//     console.log(newValue);
// }).catch(error => {
//     console.error(error);
// })

const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve("myNextPromise resolved!");
    }, 3000);
});

myNextPromise.then(value => {console.log(value);});

myPromise.then(value => {console.log(value);});

// You can see that even though we called the 'nextPromise' first in the script, 'myPromise' was logged to the console before it.
// JS did not wait for the 3 second timeout, it moved on to the next line of code.

const apiUsers = fetch("https://jsonplaceholder.typicode.com/users");

console.log(apiUsers);
// Rather than logging the data, Promise {<pending>} was logged in the console.

apiUsers.then(response => {
    // console.log(response); // This will output data as readable stream
    return response.json();
}).then(data => {
    console.log(data);
});

// This method of resolving promises can result in a long chain of then() callbacks, which can make the code hard to read and follow.
// This is resolved using asyn and await.

const myUsers = {
    userList: []
};

async function coolFunc() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await response.json();
    return jsonData;
}

async function coolFunc2() {
    const data = await coolFunc();
    myUsers.userList = data;
    console.log(myUsers.userList);
}

coolFunc2();
console.log(myUsers.userList);
// This log function will return an empty array, as its not 'awaiting' the output of the async function.
// The log function in the async function is waiting, so it output the data into the array.


// Regex in JS //

/** 
    Regex cheat sheet can be found here:
    https://www.rexegg.com/regex-quickstart.html
**/


function regexTest(input) {
    const regex = /[()-. ]/g;
    const newText = input.replaceAll(regex, "");
    return newText;
}

console.log(`If the regex worked, all numbers printed together: ${regexTest("(555) 678-1234.000")}`);
