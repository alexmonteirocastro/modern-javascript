//FOR loops
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        console.log(i + ' is a magic number!');
        continue;
    } else if (i === 5) {
        console.log('Stop the loop!');
        break;
    }
    console.log('Number is ' + i);
}

//WHILE loop
let i = 0;
while (i < 7) {
    console.log('Index: ' + i);
    i += 1;
}

//DO WHILE loop
i = 0;
do {
    console.log('Do this :' + i);
    i++;
}
while (i < 8);

i = 100;
do {
    console.log('Do this :' + i); //This runs anyway - this is the big difference between this and the others!
    i++;
}
while (i < 8);

console.clear();

//LOOP THROUGH ARRAYS
const cars = ['Ford', 'Mazda', 'Skoda', 'Opel'];

//With a FOR
for (let index = 0; index < cars.length; index++) {
    console.log(cars[index]);
}

//With a FOR EACH - better alternative when trying to loop through an array - much cleaner
cars.forEach(function(car) {
    console.log(car);
});

console.clear();

cars.forEach(function(car, index, array) {
    console.log(`${index} : ${car}`);
    console.log(array);
});

//MAP
const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Sarah' },
    { id: 3, name: 'Karen' }
];

const ids = users.map(function(user) {
    return user.id;
});

console.log(ids);
console.log(typeof ids);

console.clear();

//FOR IN LOOP
const user = {
    firstName: 'Edward',
    lastName: 'Snowden',
    age: 45
}

//Loop through each property of the object
for (let x in user) {
    //console.log(x);
    console.log(`${x} : ${user[x]}`) //key + value pairs
}