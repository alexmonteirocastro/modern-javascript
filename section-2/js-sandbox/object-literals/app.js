const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function() {
        return 2018 - this.age; //value inside this object but in another property
    }
};

let val;

val = person;

console.log(val);

//Get specific value
val = person.firstName;
console.log(val);
val = person['lastName'];
console.log(val);
val = person.age;
console.log(val);
val = person.hobbies[1];
console.log(val);
val = person.address;
console.log(val);
val = person.address.state;
console.log(val);
val = person.address['city'];
console.log(val);
val = person.getBirthYear();
console.log(val);

const people = [
    { name: 'John', age: 32 },
    { name: 'Mike', age: 27 }
];

for (let index = 0; index < people.length; index++) {
    console.log(people[index].age);
}

console.clear();