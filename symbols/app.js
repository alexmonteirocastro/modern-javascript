//Create a symbol

//const sym1 = Symbol();
//const sym2 = Symbol('sym2');

//console.log(typeof sym1, typeof sym2);

//console.log(Symbol('123') === Symbol('123'));
//console.log(`Hello ${String(sym1)}`);

//Unique object keys

const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop 3';
myObj.key4 = 'Prop 4';


//console.log(myObj[KEY1]);
//console.log(myObj[KEY2]);

//Symbols are not enumerable inf for...in
/*
for(let i in myObj){
    console.log(`${i}: ${myObj[i]}`);
}
*/

//Symbols are ignored by JSON.stringify
console.log(JSON.stringify({key: 'prop'}));
console.log(JSON.stringify({[Symbol('Sym1')]: 'propa'}));

