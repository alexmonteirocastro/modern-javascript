const clearBTN = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');


//Click
//clearBTN.addEventListener('click', runEvent)
//Double Click
//clearBTN.addEventListener('dblclick', runEvent);
//MouseDown
//clearBTN.addEventListener('mousedown', runEvent);
//Mouse-Up
//clearBTN.addEventListener('mouseup', runEvent);
//Mouse-Enter
//clearBTN.addEventListener('mouseenter', runEvent);
//Mouse enter and leave are relative to the main element. Mouse ouver and mouse out fire when we go into another child element
//Mouse-Move
card.addEventListener('mousemove', runEvent);

//Event handler
function runEvent(e) {
    e.preventDefault();
    console.log(`EVENT TYPE: ${e.type}`);
    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}