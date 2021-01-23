// console.log('connected');// arrays

// //objects

// // curly brackets key value pairs which must be seperated by a comma make an object 
// // can be empty

// const firstObj = {};

// const user = {
//   username: 'biz.markie',
//   password: 'abc123',
//   lovesJavaScript: true,
//   favoriteNumber: 42, // trailing comma is optional some places require for last element in an object
// }

// // access elements in an object with ot notation

// console.log(user.lovesJavascript);

// console.log(user.username);

// // bracket notation with dot notation or bracket notation but that must be a string inside the brackets

// console.log(user['password']);
// console.log(user['favoriteNumber']);
// console.log(user.favoriteNumber);

// //assigning values after object is defined/ with dot or bracket notation

// const newUser = {
//   isNew: true,
// }

// newUser.userName = 'fresh.prince'; // dot
// newUser['password'] = 'abcd1234'; // bracket

// console.log(newUser);  // notice these are logging in alphabetical order so you should code them that way

// methods are functions as values in an object which are mutable data types

//  const newObject = { 
//    username: 'Honey-Rae',
//     sayHello: function () { // anonymous function
//     console.log(`${this.username} says Hello!`);
//    }
//  }

// newObject.username = 'Aja'; // reassign value 
// newObject.sayHello(); // how to call a function in an object 

// iterate over an object

// for in loop

// const userTwo = {
//   username: 'trinity.christiana',
//   password: 'xyz0987',
//   lovesJavascript: true,
//   favoriteNumber: 12,
// }

// for (let key in userTwo) { // gives keys inside object 
//   console.log(key);
// }

// for (let key in userTwo) {
//   console.log(userTwo[key]);
// }

// for (let key in userTwo) { // dot notation does not work here
//   console.log(userTwo.key);
// }
// invoke a function with values inside the object

// the DOM -- document object model -- where the structure appears a model of the html css and js -- 
// doc has methods that we can work on outside of the html css and js it contains 
// the browser
// callbacks are calling a function based on what the user is doing or user interaction
// event listeners are what happens on the dom 
// bootstrap is a css library allows us to piggyback off of html and css elements that are built in
// documents is js running on a webpage has access to a global object call document
// looking at two selctors -- 



// const div = document.getElementById('divId'); // grabbing from html to js to add functionality 
// const getVariable = document.getElementById('main-btn');
// console.log(getVariable);

// document.querySelector

// const div = document.querySelector('#divId'); // classes or ids are targeted here new way of doing get element by id # for id and . for class
// only returns the first on class and should only be one id
// don't even bother targeting class in js only in css to style multiple elements and id is for js

// const newVariable = document.querySelector('#main-btn');
// console.log(newVariable);

// CALLBACKS

// the ability to pass a function as an argument to another function
// convention is to use the 'cb' argument it is a taco

// function saysHelloToUser(user) {
//   return `Hello ${user}!`;
// }

// function saysGoodbyeToUser(user) {
//   return `Goodbye ${user}!`;
// }

// function createGreeting(user, cb) {
//   return cb(user);
// }

// createGreeting('Dan', saysHelloToUser); // 'Hello Dan!'
// createGreeeting('Dan', saysGoodbyeToUser); // 'Goodbye Dan!'


// event-listeners


// methods on the DOM
