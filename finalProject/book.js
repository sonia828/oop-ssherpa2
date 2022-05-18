
function Book(title, author, edition) { //book contructor
    this.title = title;
    this.author= author;
    this.edition = edition;
    }
    
    function uInterface(){}

    uInterface.prototype.addBookToList = function(book){ //add book to the list
    const list = document.getElementById('booklist'); //list created
    const row = document.createElement('tr');
    
    //Insert Col by using template literals
    row.innerHTML = `
     
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.edition}</td>
    <td><a href="" class="delete">X</a></td>
    `;
    
    list.appendChild(row); //appened to the list
    }
    uInterface.prototype.showAlert = function(message, className){
    
    const div = document.createElement('div');
    div.className = `alert ${className}`; // classname added
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form); //alert inserted
    // Here, I use windows object
    setTimeout(function(){
    
        document.querySelector('.alert').remove();
    }, 3000);
    
    }
    
    uInterface.prototype.deleteBook = function(target){ //to delete the book
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    } 
    
    uInterface.prototype.clearFields = function(){ //clear the fields
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('edition').value = '';
    }
    
    //Event Listening
    document.getElementById('book-form').addEventListener('submit',function(e){
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const edition = document.getElementById('edition').value;
    const book = new Book(title, author, edition);
    // book object created
    
    //Instantiate UL
    const uinterface = new uInterface();
    
    if(title === '' || author === '' || edition === '') {

        uinterface.showAlert('please do not keep the fields empty', 'error');
    }
    else{
    
    uinterface.addBookToList(book);
    uinterface.showAlert('Book Added', 'success');
    uinterface.clearFields();
    }

    e.preventDefault();
    })
    document.getElementById('booklist').addEventListener('click', function(e){
    
    const uinterface = new uInterface();     //Instantiate UL
    uinterface.deleteBook(e.target);
    uinterface.showAlert('Book has been removed!', 'success');
    e.preventDefault();
    });