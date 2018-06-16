// Destructuring Assignment

let a, b;
[a, b] = [100, 200];

//Rest pattern
[a, b, c, ...rest] = [100, 200, 300, 400, 500]; //'...' is a spread operator


//console.log(rest);

({a, b} = {a: 100, b: 200, c: 300, d: 400, e: 500});
({a, b, ...rest} = {a: 100, b: 200, c: 300, d: 400, e: 500});


//console.log(a, b);
//console.log(rest);

//Array destructuring
/*
const people = ['Mike', 'Strike', 'Jayoh'];

const [person1, person2, person3] = people;
console.log(person1, person2, person3);
*/

//Parse array returned from function
/*
function getPeople(){
    return ['Mike', 'Strike', 'Jayoh'];
}

let person1, person2, person3;

[person1, person2, person3] = getPeople();

console.log(person1, person2, person3);
*/

//Object destructuring

const person = {
    name: 'Hirschel Goldberg',
    age: 65,
    city: 'Miami',
    gender: 'Male',
    sayShalom: function(){
        console.log('Shabbat Shalom');
    }
}

//Old ES5 way

/*
const name = person.name,
      age = person.age,
      city = person.city,
      gender = person.gender;
*/

//New ES6 way of Destructuring
const {name, age, city, gender, sayShalom} = person;

console.log(name, age, city);

sayShalom();