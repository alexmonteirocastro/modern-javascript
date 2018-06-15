//create element 
const li = document.createElement('li');

//Add class
li.className = 'collection-item';

//Add id
li.id = 'new-item';

//Add attribute
li.setAttribute('title', 'New Item');

//Create text node and append
li.appendChild(document.createTextNode('This is a new element'));

//Create new link element
const link = document.createElement('a');
//Add classes to link
link.className = 'delete-item secondary-content';
//Add inner HTML to link - the font-awesome icon
link.innerHTML = '<i class="fa fa-remove"></i>';

//Append link as a child to li elements
li.appendChild(link);

//Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(link);