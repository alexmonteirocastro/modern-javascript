//Elements
const fill = document.querySelector('.filled');
const empties = document.querySelectorAll('.empty');

//Event listeners for the filled
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

//Loop through empties and call drag events
for(const empty of empties){
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

//Fill drag functions
function dragStart(){
    //Add the hold class
    this.classList.add('hold');

    //Add the invisible class after dragging
    setTimeout(() => {this.className = 'invisible'}, 0);
}

function dragEnd(){
    this.className = "filled";
}

function dragOver(e){
    //So it can call the Drop Function
    e.preventDefault();

}

function dragEnter(e){
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave(){
    this.className = 'empty';    
}

function dragDrop(){
    this.className = 'empty';
    this.append(fill);
}

