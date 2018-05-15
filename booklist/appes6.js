class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book){
    
        const list = document.getElementById('book-list');

        //Create a tr element 
        const row = document.createElement('tr');

        //generate columns
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="" class="delete">X</a></td>
    `   ;    


        list.appendChild(row);    
    }

    showAlert(message, className){
        
        //Create a div
        const div = document.createElement('div');
    
        //Add class to created div
        div.className = `alert ${className}`;
    
        //Add text to created div
        div.appendChild(document.createTextNode(message));
    
        //Get parent
        const container = document.querySelector('.container');
    
        //Get form
        const form = document.querySelector('#book-form');
    
        //Insert the alert
        container.insertBefore(div, form);

        //To make alert disappear after 3 seconds
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }

    clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

//Local Storage Class
class Store{
    static getBooks(){
        
        let books;
        
        if(localStorage.getItem('books') === null){
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static displayBooks(){
        const books = Store.getBooks();

        books.forEach(function(book) {
            const ui = new UI;

            //Add book to UI
            ui.addBookToList(book);
        });

    }

    static addBook(book){
        const books = Store.getBooks();
        
        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn){
        const books = Store.getBooks();
        
        books.forEach(function(book, index) {
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));        
    }
}

//Event listener on DOM load event
document.addEventListener('DOMContentLoaded', Store.displayBooks());

//Event listeners for adding books to the list
document.getElementById('book-form').addEventListener('submit',function(e){

    //Get form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;

    //Intantiate a book
    const book = new Book(title, author, isbn);

    //Intantiate UI
    const ui = new UI();

    //Validate
    if(title === '' || author === '' || isbn === ''){
        
        //Show error message
       ui.showAlert('Please fill in all fields!', 'error');

    } else {

        //Add book to list
        ui.addBookToList(book);

        //Add book to Local Storage
        Store.addBook(book);

        //Show sucess message
        ui.showAlert('Book sucessfully added to the list', 'success');

        //Clear fields
        ui.clearFields();
    }

    e.preventDefault();
} );

//Event listener for the delete button - will use event delegation
document.getElementById('book-list').addEventListener('click', function(e){
    
    //Intantiate UI
    const ui = new UI();

    //Delete the book from the list
    ui.deleteBook(e.target);

    //Remove book from local Storage
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    //Show message of deletion
    ui.showAlert('Book was sucessfully deleted from the list.', 'success');

    e.preventDefault();
});