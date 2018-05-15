
//Object literals - key, value pairs goof when dealing with 1 object/instance
/*
const brad = {
  name: 'Brad',
  age: 30
}

console.log(brad, brad.name, brad.age);
*/
/////////////////////////////////////////

//For ultiple instances of a certain object a constructor is more suitable

//Person constructor

function Person(name, dob){
  this.name = name; //refers to the current instance of the object (in this case it's the person)
  //this.age= age;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  console.log(this);
}

/*
console.log(this);//Inside the global scope, we get the window object
this.alert("It's da Joos!")
*/


//Instanciate an object
const brad = new Person('Brad', '9-10-1981'); //aberigan formad xDDDD
const john = new Person('John', '8-24-1978');

console.log(brad.calculateAge(), john.calculateAge());