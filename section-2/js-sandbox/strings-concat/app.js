const firstName = 'William';
const lastName = 'Johnson';
const age = 40;
const str = 'Hello there, my name is John';
const tags = 'web design,web development,programming'

let val;

//Concatenation

val = firstName + ' ' + lastName;


console.log(val);

//Append

val = 'Alex';
val += ' Jones';

console.log(val);

val = 'Hello, my name is ' + firstName + '  and I am ' + age;
console.log(val);

//Escaping
val = 'That\'s awasome I can\'t wait!';
console.log(val);

//Length
val = firstName.length;
console.log(val);

//concat()
val = firstName.concat(' ', lastName);
console.log(val);

//Change case 
val = firstName.toUpperCase();
console.log(val);
val = lastName.toLowerCase();
console.log(val);

//Read only arrays
val = firstName[0];
console.log(val);

//Find Index of 
val = firstName.indexOf('a');
console.log(val);
val = firstName.lastIndexOf('l');
console.log(val);

console.clear();

//charAt()
val = firstName.charAt('4');
console.log(val);

//Get last char 
val = firstName.charAt(firstName.length - 1);
console.log(val);

//Substrings
val = firstName.substring(1, 5);
console.log(val);

console.clear();

//Slice()
val = firstName.slice(0, 3);
console.log(val);

val = firstName.slice(-2);
console.log(val);

//Split
val = str.split(' ');
console.log(val);
val = tags.split(',');
console.log(val);

//replace
val = str.replace('John', 'Chad');
console.log(val);

//includes
val = str.includes('my frame');
console.log(val);