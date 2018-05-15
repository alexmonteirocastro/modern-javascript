//Object.prototype
//Person.prototype

//Person constructor

function Person(firstName, lastName, dob){
    this.firstName = firstName; 
    this.lastName = lastName; 
    this.birthday = new Date(dob);
    /*this.calculateAge = function(){
      const diff = Date.now() - this.birthday.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }*/
    console.log(this);
  }

  //Calculate age
  Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  //Get full name
  Person.prototype.fullName = function(){
      return `${this.firstName} ${this.lastName}`;
  }

  //Getting renamed
  Person.prototype.rename = function(newLastName){
    this.lastName = newLastName;
  }

  //Instanciating the objects

  const john = new Person('John', 'Doe', '2-1-1984');
  const brad = new Person('Brad', 'Traversy', '9-10-1981');
  const anthony = new Person('Anthony', 'Hill', '7-7-1982');

  console.log(john.calculateAge(), brad.calculateAge(), anthony.calculateAge());
  console.log(john.fullName(), brad.fullName(), anthony.fullName());
  john.rename('Jones');
  brad.rename('Williams');
  anthony.rename('Hopkins');
  console.log(john.fullName(), brad.fullName(), anthony.fullName());
  console.log(john.hasOwnProperty('firstName'), brad.hasOwnProperty('fullName'), anthony.hasOwnProperty('firstName'));
  
  