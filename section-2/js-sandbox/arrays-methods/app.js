//Create some arrays
const numbers = [43, 56, 33, 27, 44, 14, 88];
const numbers2 = new Array(22, 45, 33, 76, 54);
const numbers3 = [100, 23, 36, 43, 44, 5, 56];
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 2 }, new Date()];

let val;

console.log(numbers);


//Get array length
val = numbers.length;
console.log(val);

//Check if it is array
val = Array.isArray(numbers2);
console.log(val);

//Get a single value
val = numbers2[3];
console.log(val);

//Insert into array
numbers[2] = 666;
console.log(numbers);

//Find the Index of a value
val = numbers.indexOf(14);
console.log(val);


console.clear();

//Mutating arrays

//Add to the end
numbers.push(250);
console.log(numbers);

//Add to beginning
numbers.unshift(2015);
console.log(numbers);

//Remove from end 
numbers.pop();
console.log(numbers);

//Remove from beginning (front)
numbers.shift();
console.log(numbers);

console.clear();

//Splice values
numbers.splice(1, 3);
console.log(numbers);

//Reverse
numbers.reverse();
console.log(numbers);

//Concatenate arrays
val = numbers.concat(numbers2);
console.log(val);

//Sorting arrays
fruit.sort();
console.log(fruit);
numbers2.sort();
console.log(numbers2);
numbers.sort();
console.log(numbers);
val = numbers3.sort();
console.log(val);

//Use the compare function
val = numbers3.sort(function(x, y) {
    return x - y;
});
console.log(val);

//Reverse Sort
val = numbers3.sort(function(x, y) {
    return y - x;
});
console.log(val);

console.clear();

//Find
function under50(num) {
    return num < 50;
}

function over50(num) {
    return num > 50;
}

val = numbers3.find(under50); // first number under 50
console.log(val);
val = numbers3.find(over50); // first number over 50
console.log(val);