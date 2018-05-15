/* const sayHello = function(){
    console.log('hello');
} */

//arrow function with braces
/* const sayHello = () => {
    console.log('hello');
} */

//One line function does not need braces
const sayHello = () => console.log('hello');

//One line returns
//const sayGoodbye = () => 'goodbye';

//To return objects, wrap literals literals in parentesis
const sayGoodbye = () => ({msg: 'goodbye'});

//Simple param does not need parentesis
const screech = name => console.log(`reeeeeee ${name}`);

//more params do need parentesis
const withHer = (name, eman) => console.log(`I'm with ${name}...${eman}`);

const users = ['Nathan', 'John', 'William'];

//very short map function
const nameLengths = users.map((name) => name.length);

sayHello();
console.log(sayGoodbye());
screech('pepe');
withHer('har','ambe');
console.log(nameLengths);
