//Angular js relies heavily on this pattern through event management within the scope

class EventObserver {
    constructor(){
        this.observers = [];
    }

    subscribe(fn){
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
    }

    unsubscribe(fn){
        this.observers = this.observers.filter(function(item){
            if(item !== fn){
                return item;
            }
        });
        console.log(`You have unsubscribed from ${fn.name}`);
    }

    fire(){
        this.observers.forEach(function(item) {
            item.call();
       }) 
    }
} //Get rid of the prototyping


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