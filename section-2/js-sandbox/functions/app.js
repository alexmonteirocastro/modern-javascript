//FUNCTION DECLARATIONS

function greet(firstName, lastName) {
    if (typeof firstName === 'undefined') { firstName = 'Normy' }
    if (typeof lastName === 'undefined') { lastName = 'Mac Norms' }
    return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet());

//With ES6
function greet(firstName = 'John', lastName = 'Doe') {
    return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet());

console.clear();

//FUNCTION EXPRESSIONS
const square = function(x = 3) {
    return x * x;
}

console.log(square());

//Immediately invocable functions - IIFEs
(function(name) {
    console.log('Hello ' + name);
})('Brad');

console.clear();

//PROPERTY METHODS
//wHEN A FUNCTION IS INSIDE OF AN OBJECT (AS A PROPERTY), IT'S CALLED A "METHOD"
const todo = {
    add: function() {
        console.log('Add todo...');
    },
    edit: function(id) {
        console.log(`Edit todo ${id}`);
    }
}

//We can also define methods from outside of the objects
todo.delete = function() {
    console.log('Delete todo...')
}

todo.add();
todo.edit(44);
todo.delete();