export const person = {
    name: 'John Snow', 
    location: 'Westeros',
    age: 22
}

//exporting makes the object available to other files

export function sayHello(name, age, location){
    return `Hello ${name}, ${age} years old from ${location}`;
}