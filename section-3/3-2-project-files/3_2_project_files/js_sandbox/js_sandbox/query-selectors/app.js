/*
let val;

val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

console.log(val);
*/

//Change styling
document.getElementById('task-title').style.background = '#333';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '5px';
document.getElementById('task-title').style.textTransform = 'uppercase';


//Change content
document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innerText = 'My Tasks';

//Query Selector
/*
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red'; //Single element selector
document.querySelector('ul li').style.color = 'blue';
document.querySelector('ul li:last-child').style.color = 'green';
document.querySelector('ul li:nth-child(3)').style.color = 'purple'; //pseudo class - CSS3
document.querySelector('ul li:nth-child(4)').innerText = 'Hello World';
document.querySelector('ul li:nth-child(odd)').style.background = '#ccc'; //Only the first odd because this is a single elemnt selector
*/

/*
//get elements by tag 
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);

//Convert HTML collection into array
lis = Array.from(lis);
lis.reverse();
lis.forEach(function(li) {
    console.log(li.className);
})
console.log(lis);
*/

//Query selector all

const items = document.querySelectorAll('ul.collection li.collection-item');
console.log(items);
items.forEach(function(item, index) {
        item.textContent = `${index+1}: Hello`;
    })
    //console.log(items);

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index) {
    li.style.background = '#ccc';
})

for (let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = '#f4f4f4';

}