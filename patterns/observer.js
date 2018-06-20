//Angular js relies heavily on this pattern through event management within the scope

function EventObserver() {
    this.observers = [];
}

EventObserver.prototype = {
    subscribe: function(fn){
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
    },
    unsubscribe: function(fn){

    //Filter out from the list whatever matches the callback function. 
    //If there is no match, the callback gets to stay on the list.
    //The filter returns a new list and reassigns the list of observers.

        this.observers = this.observers.filter(function(item){
            if(item !== fn){
                return item;
            }
        });
        console.log(`You have unsubscribed from ${fn.name}`);
    },
    fire: function(){
       this.observers.forEach(function(item) {
            item.call();
       }) 
    }
}

const click = new EventObserver();

//Event Listeners
document.querySelector('.sub-ms').addEventListener('click', function(){
    click.subscribe(getCurMiliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function(){
    click.unsubscribe(getCurMiliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function(){
    click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function(){
    click.unsubscribe(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click', function(){
    click.fire();
});

//Click handlers
const getCurMiliseconds = function(){
    console.log(`Current Miliseconds: ${new Date().getMilliseconds()}`);
}

const getCurSeconds = function(){
    console.log(`Current Seconds: ${new Date().getSeconds()}`);
}