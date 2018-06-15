//var, let and const
/*
var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

//Init var
var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);
*/
//We can change methods inside objects that are constant and also change arrays
const person = {
    name: 'John',
    age: 30
}
console.log(person);
person.name = 'Tony';
person.age = 27;
console.log(person);

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.push(6); //adds one extra value tpo the array - 6
console.log(numbers);