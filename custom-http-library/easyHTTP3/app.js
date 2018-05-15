const http = new EasyHTTP;

//Get users
/* http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(err => console.error(err)); */

//User data
const data = {
    name: 'Alex Jones',
    username: 'alexjones',
    email: 'alexjones@infowars.com'
}

//Create user
/* http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.error(err)); */

//Update user
http.put('https://jsonplaceholder.typicode.com/users/2', data)
    .then(data => console.log(data))
    .catch(err => console.error(err));

//Delete user
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.error(err));