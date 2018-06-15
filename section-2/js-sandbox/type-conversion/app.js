let val;

//Number to String
val = String(5);

//Output
console.log(val);
console.log(typeof val);
console.log(val.length);

val = String(4 + 4);

//Output
console.log(val);
console.log(typeof val);
console.log(val.length);

//Boolean to String
val = String(true);

//Output
console.log(val);
console.log(typeof val);
console.log(val.length);

//Date to String
val = String(new Date());

//Output
console.log(val);
console.log(typeof val);
console.log(val.length);

//Array to String
val = String([1, 2, 3, 4, 'five']);

//Output
console.log(val);
console.log(typeof val);
console.log(val.length);

//toString()
val = (5).toString();
//Output
console.log(val);
console.log(typeof val);
console.log(val.length);

val = (true).toString();
//Output
console.log(val);
console.log(typeof val);
console.log(val.length);

console.clear();

//String to Number
val = Number('5');

//Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

console.clear();

//Boolean to Number
val = Number(true);

//Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

//false
val = Number(false);

//Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

console.clear();

//Null to Number
val = Number(null);

//Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

console.clear();

//Not a number (NaN)
val = Number('Hello');

//Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

console.clear();

//Array
val = Number([1, 2, 3, 4]);

//Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

console.clear();

//ParseInt function
val = parseInt('100');

//Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

//ParseInt for decimals
val = parseInt('100.04');

//Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

//must use ParseFloat
val = parseFloat('100.04');

//Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

console.clear();

//adding vs concatenating

const val1 = 5;
const val2 = 6;
const val3 = String(7);
const sum1 = val1 + val2;
const sum2 = val2 + val3;

console.log(sum1);
console.log(typeof sum1);

console.log(sum2);
console.log(typeof sum2);