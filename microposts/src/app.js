import {http} from './http';
import {ui} from './ui';

//Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

//Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

//Listen for delete
document.querySelector('#posts').addEventListener('click', deletePost);

//Listen for Edit State
document.querySelector('#posts').addEventListener('click', enableEdit);

//Listen for cancel 
document.querySelector('.card-form').addEventListener('click' , cancelEdit);


//Get posts
function getPosts(){
    http.get('http://localhost:3000/posts') //makes a promise
        .then(data => ui.showPosts(data))
        .catch(err => console.log(err));
}

//Submit Post
function submitPost(){
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;
    const id = document.querySelector('#id').value;

    const data = {
        title,
        body
    }

    //Validates the inputs
    if (title === '' || body === '') { //one of the fields is empty
        if (title === '' && body !== '') { //title field is empty
            ui.showAlert('Please add a title to your post!', 'alert alert-danger');
        } else if (title !== '' && body === '') { //body field is empty
            ui.showAlert('Please write something in the body of your post!', 'alert alert-danger');            
        } else if (title === '' && body === '') { //both fields empty
            ui.showAlert('Cannot post an empty post!', 'alert alert-danger');            
        }
    } else { //fields are filled
        //Check for ID
        if (id === '') {
            //Create post
            http.post('http://localhost:3000/posts', data)
                .then(data => {
                    ui.showAlert('Post added', 'alert alert-success');
                    ui.clearFields();
                    getPosts();  
                })
                .catch(err => console.log(err));
        } else {
            //Update the post
            http.put(`http://localhost:3000/posts/${id}`, data)
                .then(data => {
                    ui.showAlert('Post updated', 'alert alert-success');
                    ui.changeFormState('add');
                    getPosts();  
                })
                .catch(err => console.log(err));
        }

    }   
    
}

//Delete post
function deletePost(e){
    if(e.target.parentElement.classList.contains('delete')){
        const id = e.target.parentElement.dataset.id;

        if (confirm('Are you sure?')) {
            http.delete(`http://localhost:3000/posts/${id}`)
                .then(data => {
                    ui.showAlert('Post removed', 'alert alert-success');
                    getPosts();
                })
                .catch(err => console.log(err));
        }
    }

    e.preventDefault();
}

//Enable Edit State
function enableEdit(e){
    if (e.target.parentElement.classList.contains('edit')) {
        const id =  e.target.parentElement.dataset.id;
        const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        const body = e.target.parentElement.previousElementSibling.textContent; 
        
        const data = {
           id, 
           title,
           body
        }

        //Fill the form with the current post
        ui.fillForm(data);
    }

    e.preventDefault();
}

//Cancel the edit state and change the state back to 'add'
function cancelEdit(e){
    if(e.target.classList.contains('post-cancel')){
        ui.changeFormState('add');
    }

    e.preventDefault();
}