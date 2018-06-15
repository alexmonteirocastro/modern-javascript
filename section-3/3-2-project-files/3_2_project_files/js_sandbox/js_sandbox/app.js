//set local storage item
//localStorage.setItem('name', 'John');
//localStorage.setItem('age', '42');


//set session storage item
//sessionStorage.setItem("name", "bett");

//remove from storage
//localStorage.removeItem('Name')

//get from storage
//const name = localStorage.getItem('name');
//const age = localStorage.getItem('age');

//clear local storage
//localStorage.clear();

//console.log(`Name is ${name} and is ${age} years old.`)

document.querySelector('form').addEventListener('submit',
    function(e) {
        const task = document.getElementById('task').value;
        //console.log(task);
        let tasks;

        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        tasks.push(task)

        localStorage.setItem('tasks', JSON.stringify(tasks));

        e.preventDefault();
    });

const taks = JSON.parse(localStorage.getItem('tasks'));
//console.log(tasks);
taks.forEach(function(task) {
    console.log(task);
});