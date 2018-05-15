//Part of the ES7 (2016)
/* 
async function myFunc(){
    //return 'Hello World';

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello earth'), 1000)
    });

    const error = false;

    if(!error){
        const res = await promise; //Wait until promise is resolved
        return res;
    } else {
        await Promise.reject(new Error('something went wrong'));
    }
}

myFunc()
    .then(res => console.log(res))
    .catch(err => console.error(err)); */


async function getUsers(){
    //await the response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    //Only proceed once its resolved
    const data = await response.json();

    //only proceed second promise is resolved
    return data;
}

getUsers().then(users => console.log(users));