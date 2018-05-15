//String

const name1 = 'Jeff';
const name2 = new String('Jeff');

name2.bar = 'foo';

console.log(name1, name2);
console.log(typeof name1, typeof name2);

function ifador(nome){
    if (nome === 'Jeff') {
        console.log('yes');
    } else {
        console.log('no');
        
    }
}

ifador(name1);
ifador(name2);

//Numbers
const num1 = 5;
const num2 = new Number(5);

console.log(num1, num2);
console.log(typeof num1, typeof num2);

//Boolean
const bool1 = true;
const bool2 = new Boolean(true);

console.log(bool1, bool2);
console.log(typeof bool1, typeof bool2);

//Functions
const function1 = function(x,y){
    return x+y;
}
const function2 = new Function('x', 'y', 'return x+y')

console.log(function1(1,2), function2(1,2));
console.log(typeof function1, typeof function2);

//Objects
const john = {name: 'John'};
const shlomo = new Object({name: 'Shlomo'});

console.log(john, shlomo);
console.log(typeof john, typeof shlomo);

//Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

console.log(arr1, arr2);
console.log(typeof arr1, typeof arr2);

//Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re1, re2);
console.log(typeof re1, typeof re2);