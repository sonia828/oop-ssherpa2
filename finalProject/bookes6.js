class Book {
    constructor(title, author, edition) {
    this.title = title;
    this.author = author;
    this.edition = edition;
    }
}
    
class uInterface {
    addBookToList(book) {

        const list = document.getElementById('booklist');
        const row = document.createElement('tr');
        row.innerHTML = `
        
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.edition}</td>
        <td><a href="" class="delete">X</a></td>
        `;
    list.appendChild(row);
    
}   

showAlert(message, className){
    const div = document.createElement('div');

    div.className = `alert ${className}`; //classname added
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);
    setTimeout(function(){
    
        document.querySelector('.alert').remove();
    }, 3000);         

}
deleteBook(target) {
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}

clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('edition').value = '';
}
}

document.getElementById('book-form').addEventListener('submit',function(e){
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const edition = document.getElementById('edition').value;
    
    //Instantiate book
    const book = new Book(title, author, edition);
    const uinterface = new uInterface();
    
    if(title === '' || author === '' || edition === '') {

        uinterface.showAlert('please fill in all fields', 'error');
    }
    else{
    
    uinterface.addBookToList(book);
    uinterface.showAlert('Book Added', 'success');
    uinterface.clearFields();    
    }
    
    e.preventDefault();
    })
    
    //Event listening to delete 
    document.getElementById('booklist').addEventListener('click', function(e){
    const uinterface = new uInterface();
    uinterface.deleteBook(e.target);
    uinterface.showAlert('Book Removed!', 'success');
    e.preventDefault();
    });