//PRIMITIVE TYPES

//String
const name = 'John Doe';
console.log(typeof name);

//Number
const age = 45;
console.log(typeof age);

//Boolean
const hasKids = true;
console.log(typeof hasKids);

//Null
const car = null;
console.log(typeof car); //object -> bogus (it used to be an object with the pointer "NULL")

//Undefined
let test;
console.log(typeof test);

//Symbol
const sym = Symbol();
console.log(typeof sym);

//REFERENCE TYPES - Objects

//Array
const hobbies = ['movies', 'music', ];
console.log(typeof hobbies);

//Object Literal
const address = {
    city: 'London',
    country: 'England'
};
console.log(typeof address);

//Date
const today = new Date();
console.log(today + ' ' + typeof today);