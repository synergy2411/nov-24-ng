// var x = 101;

// x = "Hello World!";

// function mystry() {
//   var chooseNumber = function () {
//     return 12;
//   };

//   var chooseNumber = function () {
//     return 7;
//   };

//   return chooseNumber;
// }

// const nestedFn = mystry();

// console.log(nestedFn()); // ?

// function mystry() {
//   let x = 4;
//   return () => {
//     return ++x;
//   };
// }

// console.log(mystry()); // ?

// const nestedFn = mystry();

// console.log(nestedFn()); // 5
// console.log(nestedFn()); //
// console.log(nestedFn()); //

// console.log("START");

// setTimeout(() => {
//   console.log("TIMER 1");
// }, 0);

// setTimeout(() => {
//   console.log("TIMER 2");
// }, 0);

// Promise.resolve().then(() => console.log("PROMISE"));

// console.log("END");

// START -> PROMISE -> END -> TIMER
// START -> END -> PROMISE -> TIMER
// START -> END  -> TIMER -> PROMISE

// Arrow Function: () => {}

// let marks = [99, 98, 96, 93];

// const increasedMarks = marks.map((value) => value + 1);
// console.log(increasedMarks);

// REST / SPREAD (...)

// function demo(email, ...args) {
//   console.log(args[0]); // []
// }

// // demo("test@test.com")
// // demo("test@test.com", 32)
// demo("test@test.com", 32, true);

// let arr1 = [1, 2, 3];
// let arr2 = [...arr1, 4, 5, 6];

// console.log(arr2[0]); // []

// let arr = [
//   "Hello there",
//   { name: "Sumit K" },
//   () => {
//     console.log("Hellow World");
//   },
//   101,
//   true,
// ];

// arr[2]();
// console.log(arr[3]);

// let x = "10";
// let y = 5;

// console.log(typeof (x + y)); // 105
// console.log(typeof (y - x)); // 5

// DESTRUCTURING : Array / Objects

// let friends = ["Monica", "Joey", "Rachel"];
// let [f1, f2, f3] = friends;
// console.log(f3); // ?

// let user = {
//   name: "Chandler",
//   age: 23
// }

// let { name, age } = user

// console.log(name, age);

// TEMPLATE LITERALS
// let username = "John Doe";
// let age = 32;

// let greet = `
//   Hello from ${username},

//   I'm ${age} years old!
//   `;

// console.log(greet);

// BLOCK SCOPING :
// let
// const

// function demo(arr) {
//   if (arr.length > 2) {
//     let LOADING = "LOADING...";
//     console.log(FLASHING);
//   } else {
//     let FLASHING = "FLASHING...";
//   }
// }
// demo([1, 2, 3, 4]);

// const username;

// username = "Jenny Doe";

// const user = { name: "John" };

// user.name = "Jenny";

// console.log(user.name); // "Jenny"

// user = { name: "Jack" }; // ERROR

// class Animal {
//   constructor(legs, species) {
//     this.legs = legs;
//     this.species = species;
//   }

//   getDetails() {
//     return `${this.species} does have ${this.legs} legs!`;
//   }
// }

// let tiger = new Animal(4, "Cat");
// console.log(tiger.getDetails());

console.log("10" === 10);
