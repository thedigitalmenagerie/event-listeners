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

 const newObject = { 
   username: 'Honey-Rae',
    sayHello: function () { // anonymous function
    console.log(`${this.username} says Hello!`);
   }
 }

// newObject.username = 'Aja'; // reassign value 
// newObject.sayHello(); // how to call a function in an object 

// iterate over an object

// for in loop

const userTwo = {
  username: 'trinity.christiana',
  password: 'xyz0987',
  lovesJavascript: true,
  favoriteNumber: 12,
}

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



// the DOM

// event-listeners

// methods on the DOM
