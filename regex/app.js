let re;

re = /hello/;
re = /hello/i; //i = case insensitive
//re = /hello/g; // Global search - all instances

//console.log(re);
//console.log(re.source);
/*
//exec() - Return result in an array or null
const result = re.exec('hello world');

console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);
*/

/*
//test() - returns true or false
const result = re.test('Hello');
console.log(result);
*/

/*
//match() - return result array or null
const str = 'Hello There';
const result = str.match(re);
console.log(result);
*/

/*
//search() - return index of first match, if not found returns -1
const str = 'Hello There';
const result = str.search(re);
console.log(result);
*/

/*
//replace() - return a new string with all matches of a pattern
const str = 'Hello There';
const newStr = str.replace(re, 'Hi'); 
console.log(newStr);
*/