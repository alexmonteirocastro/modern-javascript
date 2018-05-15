class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;        
    }

    greeting(){
        return `Bom dia ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership){
       super(firstName, lastName); //calls the parent class constructor
       this.phone = phone;
       this.membership = membership;
    }

    static getMembershipCost(){
        return 666; 
    }
}

const brad = new Customer('Brad', 'Traversy', '5555-555-5555', 'Premium');

console.log(brad.greeting());
console.log(Customer.getMembershipCost());
