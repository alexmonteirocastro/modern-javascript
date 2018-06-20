//Basic structure

/*
(function(){
    //declare private vars and functions

    return{
        //Declare public var and functions
    }
})();
*/

//Standard module pattern
/*
const UICtrl = (function(){
    let text = 'Hello world';

    const changeText = function(){
        const element = document.querySelector('h1');
        element.innerText = text;
        //console.log(element);
    }

    return{ //public
        callChangeText: function(){
            changeText();
            console.log(text);
        }
    }
})();

UICtrl.callChangeText();
//UICtrl.changeText(); - Nejde

//console.log(UICtrl.text); - returns undefined
*/

//Revealing module pattern

const itemCtrl = (function(){
    let data = [];

    function add(item){
        data.push(item);
        console.log('Item added...');
    }

    function get(id){
        return data.find(item => {
            return item.id === id;
        });
    }

    return {
        add: add,
        get: get //revelas the get method 
    }
})();

itemCtrl.add({id: 1488, name: 'John'});
itemCtrl.add({id: 56, name: 'Mark'});
console.log(itemCtrl.get(1488), itemCtrl.get(56));