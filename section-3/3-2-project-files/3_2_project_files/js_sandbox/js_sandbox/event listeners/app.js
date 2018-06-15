/*
document.querySelector('.clear-tasks').addEventListener('click',
    function(e) {
        console.log('Seig Heil!');
        e.preventDefault();
    });
    */

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
    //console.log('lampShades');

    let oyVey;
    oyVey = e;
    console.log(oyVey.type);
    oyVey.target.innerText = 'Oy gevalt!'
        //type of event
    console.log(oyVey.type);
    //timestamp
    console.log(oyVey.timeStamp);
    //coords relative to the window
    console.log(oyVey.clientY);
    console.log(oyVey.clientX);
    //coords relative to the element
    console.log(oyVey.offsetY);
    console.log(oyVey.offsetX);


}