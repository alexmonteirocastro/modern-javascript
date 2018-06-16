//Sets - Store unique values of any type

const set1 = new Set();

//Add values to set
set1.add(100);
set1.add('A string');
set1.add({name: 'John'});
set1.add(true);
set1.add(100);

const set2 = new Set([1, true, 'string']);

//console.log(set1);
//console.log(set2);

//Get count
//console.log(set1.size);

//Check for values
/*
console.log(set1.has(100)); //primitive value, hence true
console.log(set1.has(50+50));
console.log(set1.has({name: 'John'}));

console.log({name: 'John'} === {name: 'John'}); // false (reference value) - because it points to a different location in memory
*/

//Delete from the set
set1.delete(100);

//console.log(set1);

//Iterating through sets

//For...of
/*
for(let item of set1){ //same with 'values' and 'keys' 
    console.log(item);
}
*/

/*
for(let item of set1.entries()){  
    console.log(item);
}
*/

//forEach
/*
set1.forEach((value) => {
    console.log(value);
});
*/

//convert sets into arrays
const setArr = Array.from(set1);
console.log(setArr);
