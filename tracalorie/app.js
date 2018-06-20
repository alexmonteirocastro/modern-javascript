//Storage Controller
const Storagectrl = (function(){
    
    //Public methods
    return {
        storeItem: function(item){
            let items;

            //Check if any items exist in LS
            if (localStorage.getItem('items') === null) { //no titems set
                items = [];
                //Push new item
                items.push(item);
                //Set local storage
                localStorage.setItem('items', JSON.stringify(items));
            } else {
                //Get what is already in the LS
                items = JSON.parse(localStorage.getItem('items'));

                //Push new item
                items.push(item);

                //Re set LS
                localStorage.setItem('items', JSON.stringify(items));
                
            }
        },
        getItemsFtomStorage: function(){
            let items;
            
            //Check if any items exist in LS
            if (localStorage.getItem('items') === null) {
                items = [];
            } else {
                //Get what is already in the LS
                items = JSON.parse(localStorage.getItem('items'));
            }

            return items;
        },
        updateItemStorage: function(updatedItem){

            //Get items from the LS
            let items = JSON.parse(localStorage.getItem('items'));

            //Loop through the items
            items.forEach(function(item, index){
                if (updatedItem.id === item.id) {
                    items.splice(index, 1, updatedItem); //delete the item and replace with updated item
                }
            });
            localStorage.setItem('items', JSON.stringify(items));
            
        },
        deleteItemFromStorage: function(id){
            //Get items from the LS
            let items = JSON.parse(localStorage.getItem('items'));

            //Loop through the items
            items.forEach(function(item, index){
                if (id === item.id) {
                    items.splice(index, 1); //delete the item
                }
            });
            localStorage.setItem('items', JSON.stringify(items));
        },
        clearItemsFromStorage: function(){
            localStorage.removeItem('items');
        }
    }
})();

//Item Controller
const ItemCtrl = (function(){
    //Item constructor
    const item = function(id, name, calories){
        this.id = id;
        this.name= name;
        this.calories = calories;
    }

    //Data structure (AKA State)
    const data = {
        /*items: [
            {id: 0, name: 'Steak', calories: 400},
            {id: 1, name: 'Cookies', calories: 600},
            {id: 2, name: 'Rice', calories: 550}, 
        ],*/
        items: Storagectrl.getItemsFtomStorage(),
        currentItem: null,
        totalCalories: 0
    }

    //Public methods
    return{
        getItems: function(){
            return data.items;
        },
        addItem: function(name, calories){
            let ID;

            //Create ID
            if (data.items.length > 0) {
                ID = data.items[data.items.length - 1].id + 1;
            } else {
                ID = 0;
            }

            //Calories to number
            calories = parseInt(calories);

            //Create a new item
            newItem = new item(ID, name, calories);

            //Add to items array
            data.items.push(newItem);

            return newItem;
        },
        getItemById: function(id){
            let found = null;

            //Loop through the items
            data.items.forEach(function(item){
                if(item.id === id){
                    found = item;
                }
            });
            return found;
        },
        updateItem: function(name, calories){
            //Convert calories to number
            calories = parseInt(calories);

            let found = null;

            data.items.forEach(function(item){
                if (item.id === data.currentItem.id) {
                    item.name = name;
                    item.calories = calories;
                    found = item;
                }
            });

            return found; //updates in the data structure
        },
        deleteItem: function(id){
            //Get ids
            ids = data.items.map(function(item){
                return item.id;
            });

            //Get index
            const index = ids.indexOf(id);

            //Remove item 
            data.items.splice(index, 1);
        },
        clearAllItems: function(){
            data.items = [];
        },
        setCurrentItem: function(item){
            data.currentItem = item;
        },
        getCurrentItem: function(){
            return data.currentItem;
        },
        getTotalCalories: function(){
            let total = 0;

            //Loop through items and add calories
            data.items.forEach(function(item){
                total += item.calories;
            });

            //Set total calories in data structure   
            data.totalCalories = total;

            //Return total
            return data.totalCalories;
        },
        logData: function(){
            return data;
        }
    }
})();

//UIController
const UICtrl = (function(){
    const UISelectors = {
        clearBtn: '.clear-btn',
        itemList: '#item-list',
        listItems: '#item-list li',
        addBtn: '.add-btn',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories',
        totalCalories: '.total-calories'
    }

    //Public methods
    return{
        populateItemList: function(items){
            let html = '';

            items.forEach((item) => {
                html += `
                <li class="collection-item" id="item-${item.id}">
                    <strong>${item.name}</strong> <em>${item.calories} Calories</em>
                    <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
                </li>
                `; 
            });

            //Insert List items
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },
        getItemInput: function(){
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                calories: document.querySelector(UISelectors.itemCaloriesInput).value
            }
        },
        addListItem: function(item){
            //Make list visible
            document.querySelector(UISelectors.itemList).style.display = 'block';            

            //Create li element
            const li = document.createElement('li');
            //Add class
            li.className = 'collection-item'
            //Add ID
            li.id = `item-${item.id}`;

            //Add the HTML
            li.innerHTML = `
                <strong>${item.name}</strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
            `;
            //Insert the item 
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
        },
        updateListItem: function(item){
            let listItems = document.querySelectorAll(UISelectors.listItems);
            //console.log('update list item');

            //Convert Node list into array
            listItems = Array.from(listItems);

            listItems.forEach(function(listItem){
                const itemID = listItem.getAttribute('id');

                if (itemID === `item-${item.id}`) {
                    document.querySelector(`#${itemID}`).innerHTML = `
                        <strong>${item.name}</strong> <em>${item.calories} Calories</em>
                        <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
                    `;
                }
            });
        },
        deleteListItem: function(id){
            const itemID = `#item-${id}`;
            const item = document.querySelector(itemID);
            item.remove();
        },
        clearInput : function(){
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCaloriesInput).value = '';
        },
        addItemToForm: function(){
            document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
            document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
            UICtrl.showEditState();
        },
        removeItems: function(){
            let listItems = document.querySelectorAll(UISelectors.listItems);

            //Convert Nodelist into an array
            listItems = Array.from(listItems);

            listItems.forEach(function(item){
                item.remove();
            });
        },
        hideList: function(){
            document.querySelector(UISelectors.itemList).style.display = 'none';
        },
        showTotalCalories: function(totalCalories){
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
        },
        clearEditState: function(){
            UICtrl.clearInput();
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';            
            document.querySelector(UISelectors.backBtn).style.display = 'none';   
            document.querySelector(UISelectors.addBtn).style.display = 'inline';            
                     
        },
        showEditState: function(){
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';            
            document.querySelector(UISelectors.backBtn).style.display = 'inline';   
            document.querySelector(UISelectors.addBtn).style.display = 'none';            
                     
        },
        getSelectors: function(){
            return UISelectors;
        }
    }
    
})();

//App Controller
const App = (function(ItemCtrl, Storagectrl, UICtrl){
    // Load event Listeners
    const loadEventListeners = function(){
        // Get UI Selectors
        const UISelectors = UICtrl.getSelectors();

        //Add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

        //Disable submit on Enter
        document.addEventListener('keypress', function(e){
            if(e.keyCode === 13 || e.which === 13){ //If enter was hit
                e.preventDefault();
                return false;
            }
        })

        // Edit icon click event
        document.querySelector(UISelectors.itemList).addEventListener('click',  itemEditClick);

        // Update icon click event
        document.querySelector(UISelectors.updateBtn).addEventListener('click',  itemUpdateSubmit);

        // Delete button click event
        document.querySelector(UISelectors.deleteBtn).addEventListener('click',  itemDeleteSubmit);

        // Back button click event
        document.querySelector(UISelectors.backBtn).addEventListener('click',  UICtrl.clearEditState);

        // 'Clear All' button click event
        document.querySelector(UISelectors.clearBtn).addEventListener('click',  clearAllItemsClick);
    }
    
    //Add item submit
    const itemAddSubmit = function(e){

        //Get form input from UICtrl
        const input = UICtrl.getItemInput();

        //Check for name and calorie input
        if (input.name !== '' && input.calories !== '') {
            //Add item
            const newItem = ItemCtrl.addItem(input.name, input.calories);

            //Add item to UI list
            UICtrl.addListItem(newItem);

            // get the Total Calories
            const totalCalories = ItemCtrl.getTotalCalories();

            //Add total calories to the UI
            UICtrl.showTotalCalories(totalCalories);

            //Store in local storage
            Storagectrl.storeItem(newItem);

            //Clear input fields
            UICtrl.clearInput();
        }

        e.preventDefault();
    }

    //Edit item click
    const itemEditClick = function(e){
        if (e.target.classList.contains('edit-item')) { //Check if click is on the edit icon!
           //Get list item id
           const listId = e.target.parentNode.parentNode.id;

           //Break into an array the listId
           const listIdArr = listId.split('-');

           //console.log(listIdArr);

           //Get the actual Id
           const id = parseInt(listIdArr[1]);

           //Get item
           const itemToEdit = ItemCtrl.getItemById(id);

           //Set current item
           ItemCtrl.setCurrentItem(itemToEdit);

           //Add item to form
           UICtrl.addItemToForm();
        }

        e.preventDefault();
    }

    //Update item submit
    const itemUpdateSubmit = function(e){

        //Get item input 
        const input = UICtrl.getItemInput();

        //Update item
        const updatedItem = ItemCtrl.updateItem(input.name, input.calories);

        //Update the UI
        UICtrl.updateListItem(updatedItem);

        // get the Total Calories
        const totalCalories = ItemCtrl.getTotalCalories();

        //Add total calories to the UI
        UICtrl.showTotalCalories(totalCalories);

        //Update LS
        Storagectrl.updateItemStorage(updatedItem);

        UICtrl.clearEditState();

        e.preventDefault();
    }

    //Delete button click events
    const itemDeleteSubmit = function(e){
        //Get the current item
        const currentItem = ItemCtrl.getCurrentItem();

        //Delete from the data structure
        ItemCtrl.deleteItem(currentItem.id);

        //Delete from the UI
        UICtrl.deleteListItem(currentItem.id);

        // get the Total Calories
        const totalCalories = ItemCtrl.getTotalCalories();

        //Add total calories to the UI
        UICtrl.showTotalCalories(totalCalories);

        //Delete from LS
        Storagectrl.deleteItemFromStorage(currentItem.id);

        UICtrl.clearEditState();

        e.preventDefault();
    }

    //Clear button events
    const clearAllItemsClick = function(){

        //Delete all items from data structure 
        ItemCtrl.clearAllItems();

        // get the Total Calories
        const totalCalories = ItemCtrl.getTotalCalories();

        //Add total calories to the UI
        UICtrl.showTotalCalories(totalCalories);

        //Delete all items from the UI 
        UICtrl.removeItems();

        //Clears the whole LS
        Storagectrl.clearItemsFromStorage();

        UICtrl.clearEditState();        

        //Hide the UL
        UICtrl.hideList();
    }

    //Public methods
    return {
        init: function(){
            //Clear edit state / set initial state
            UICtrl.clearEditState();

            //Fetch items from data structure
            const items = ItemCtrl.getItems();

            //Check if any items
            if (items.length === 0) { //No items
                
                UICtrl.hideList();

            } else {
                
                //Populate list with items
                UICtrl.populateItemList(items);

            }

            // get the Total Calories
            const totalCalories = ItemCtrl.getTotalCalories();

            //Add total calories to the UI
            UICtrl.showTotalCalories(totalCalories);

            //Load Event Listeners
            loadEventListeners();
        }
    }
    
})(ItemCtrl, Storagectrl, UICtrl);

//Initialize App
App.init();