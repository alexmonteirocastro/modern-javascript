let val;

const today = new Date(); //Today - as of now
const birthday = new Date('9-10-1981 11:25:13'); //define date
let birthday2 = new Date('September 10 1981');

val = today;

console.log(val);
console.log(typeof val);

val = today.toString();

console.log(val);
console.log(typeof val);

val = today.toDateString();

console.log(val);
console.log(typeof val);

val = today.toTimeString();

console.log(val);
console.log(typeof val);

console.clear();

///New date that we defined
val = birthday;

console.log(val);
console.log(val.toDateString());
console.log(val.toTimeString());

console.clear();

val = birthday2;

console.log(val);

birthday2 = new Date('9 / 10 / 1981');
val = birthday2;

console.log(val);

console.clear();

console.log(today.getDate()); //Day of the Month
console.log(today.getMonth() + 1);
console.log(today.getDay()); //day of the Week
console.log(today.getFullYear());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());