//mimic a server and database
const posts = [
    {
      title: 'Post One',
      body: 'This is muh first post'  
    },
    {
        title: 'Post Two',
        body: 'This is muh second post'  
    }
];

//resolve, we call when we are done with what we're doing
//reject if there is some kind of error we want to throw

function createPost(post){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            posts.push(post);

            const error = false;

            if(!error){
                resolve();            
            } else {
                reject('Error: Something went wrong');                
            }
        }, 2000);
    })
}

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
          output += `<li>${post.title}</li>`;  
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post Three', body: 'In the year 3000...'})
    .then(getPosts)
    .catch(function(err){
        console.error(err);
        console.log(err);
        
    });