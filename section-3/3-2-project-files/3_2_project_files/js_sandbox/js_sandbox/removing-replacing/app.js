//REPLACE ELEMENT

//Create Element
const newHeading = document.createElement('h5');

//Add id
newHeading.id = 'task-title';

//New text node
newHeading.appendChild(document.createTextNode('New Heading for the List!'));
//console.log(newHeading);


//Get the old heading
const oldHeading = document.getElementById('task-title');
//console.log(oldHeading);

//Parent
//console.log(oldHeading.parentElement);
const cardAction = document.querySelector('.card-action');
//console.log(cardAction);
cardAction.replaceChild(newHeading, oldHeading);

//REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');


//Remove list item
lis[0].remove();

//Remove child
list.removeChild(lis[3]);

//CLASSES & ATR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

//Classes
val = link.className;
val = link.classList;
link.classList.add('test');
//link.classList.remove('test');
link.classList.toggle('test');
//console.log(link);

//Cross out list item -> lis[1].style.textDecoration = 'line-through';

//Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'https://www.smartlook.com');
val = link.hasAttribute('href');
link.removeAttribute('href');
console.log(link);