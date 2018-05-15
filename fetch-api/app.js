//UI
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const outputArea = document.getElementById('output');

//Event listeners
button1.addEventListener('click', getText);
button2.addEventListener('click', getJSON);
button3.addEventListener('click', getExternal);


//Functions

//to get plain text
function getText(){
    //Fetch returns a promise
    fetch('test.txt')
        .then(res => res.text())
        .then(data => {
            console.log(data);
            outputArea.innerText = data; 
        })
        .catch(err => console.log(err));
}

//to get JSON
function getJSON(){
    //Fetch returns a promise
    fetch('posts.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let output = '';
            data.forEach(post =>{
                output += `<li>${post.title} - ${post.body}</li>`;
            });
            outputArea.innerHTML = output;
        })
        .catch(err => console.log(err));
}

//to get data from external API
function getExternal(){
    //Fetch returns a promise
    fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let output = '';
            data.forEach(user => {output += `<li>${user.login}</li>`});
            outputArea.innerHTML = output;
        })
        .catch(err => console.log(err));
}