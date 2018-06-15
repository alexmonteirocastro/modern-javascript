const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

taskInput.value = '';

//form.addEventListener('submit', runEvent);

//Key down event
//taskInput.addEventListener('keydown', runEvent);
//Key up event
//taskInput.addEventListener('keyup', runEvent);
//Focus events
//taskInput.addEventListener('focus', runEvent);
//Blur events - opposite of focus
//taskInput.addEventListener('blur', runEvent);
//Cut events - same for paste 
//taskInput.addEventListener('cut', runEvent);
//Input events  
//taskInput.addEventListener('input', runEvent);
//Change events - is for 'select items' when using the drop-down

function runEvent(e) {
    console.log(`Event type: ${e.type}`);
    //console.log(taskInput.value);
    //e.preventDefault();
    //console.log(e.target.value);
    //heading.innerText = e.target.value;
}