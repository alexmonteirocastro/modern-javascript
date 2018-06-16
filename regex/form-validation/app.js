//Create blur event listeners for the input fields
const nameField = document.getElementById('name');
const zipField = document.getElementById('zip');
const emailField = document.getElementById('email');
const phoneField = document.getElementById('phone');

nameField.addEventListener('blur', validateName);
zipField.addEventListener('blur', validateZip);
emailField.addEventListener('blur', validateEmail);
phoneField.addEventListener('blur', validatePhone);


function validateName(){
    const re = /^[a-zA-Z]{2,10}$/;

    if (!re.test(nameField.value)) {
        nameField.classList.add('is-invalid');
    } else {
        nameField.classList.remove('is-invalid');
        
    }
}

function validateZip(){
    const re = /^6[0-9]{2}\s[0-9]{2}$/;
    

    if (!re.test(zipField.value)) {
        zipField.classList.add('is-invalid');
    } else {
        zipField.classList.remove('is-invalid');
        
    }
}

function validateEmail(){
    const re = /^([a-zA-Z0-9\-\.]+)@([a-zA-Z0-9\-\.]+)\.([a-zA-Z]{2,5})$/;

    if (!re.test(emailField.value)) {
        emailField.classList.add('is-invalid');
    } else {
        emailField.classList.remove('is-invalid');
        
    }
}

function validatePhone(){
    const re = /^(\(?\+?(\d{3})?\)?)\s?\d{9}$/;

    if (!re.test(phoneField.value)) {
        phoneField.classList.add('is-invalid');
    } else {
        phoneField.classList.remove('is-invalid');
        
    }
}