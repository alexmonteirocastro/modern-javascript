//Person constructor

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

//Greeting
Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}!`;
}

const person1 = new Person('John', 'Doe');
//console.log(person1.greeting());

//Customer constructor
function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName); //call allows us to call another function from somewhere else in the current context
    //the first arguments were inherited
    this.phone = phone;
    this.membership = membership;
}

//Inherit the Person prototype methods 
Customer.prototype = Object.create(Person.prototype);

//Make customer prototype return customer()
Customer.prototype.constructor = Customer;

//Create a customer
const customer1 = new Customer('Tom', 'Petty', '606363028', 'Standard');

console.log(customer1);

//Customer greeting
Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}, our beloved customer with a ${this.membership} membership and whose phone number is ${this.phone}!`;
}

console.log(customer1.greeting());
