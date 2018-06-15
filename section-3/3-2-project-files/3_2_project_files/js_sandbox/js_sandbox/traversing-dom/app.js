let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

//Get child nodes
/*
val = list.childNodes;
val = list.childNodes[0];
console.log(val);
val = list.childNodes[0].nodeName;
console.log(val);
val = list.childNodes[0].nodeType;
console.log(val);
*/
/* NODE TYPES
1 - Element
2 - Attribute (deprecated)
3 - Text node
8 - Comment
9 - Document itself
10 - Doctype
*/

//Get children element nodes
//val = list.children;

//console.log(val);

//Children of children
/*
let f = 2;
val = list.children[3].children;
list.children[3].children[0].id = 'test-link-' + f;
*/

//First/Last Child - gives the node
//First/Last ElementChild - gives the actual element

//Count child elements
//val = list.childElementCount;

//Get parent Node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;
console.log(val);



//Get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val);

//TRAVERSING THE DOM MEANS GOING UP AND DOWN THE DOM