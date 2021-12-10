// Book Class: Represents a Book
class Book {
    constructor(title, author, isbn){
        this.title = title
        this.author = author
        this.isbn = isbn
    }
  }
  
  // UI Class: Handle UI Tasks
  class UI {
    static displayBooks() {
        
        const books = Store.getBooks()

        books.forEach((book)=>{
            UI.addBookList(book)
        })

    
     }
     static addBookList(book){
        const bookList = document.getElementById('items')
        const createTd = document.createElement('tr')
        console.log(bookList);
        createTd.innerHTML = `
         <td>${book.title}</td>
         <td>${book.author}</td>
         <td>${book.isbn}</td>
         <td><a href='#' class="btn btn-danger btn-sm delete">X</a></td>
        `
        bookList.appendChild(createTd)
     }

     static clearFields(){
         document.getElementById('title').value = ''
         document.getElementById('author').value = ''
         document.getElementById('isbn').value = ''
     }
  
     static deleteBook(el){
        // console.log(el.className);
        if(el.classList.contains('delete')){
            if(confirm('Are you sure wanna delete?')){
                el.parentElement.parentElement.remove()
                this.showAlert('data deleted','success')
            }
        }
        
     }
     static showAlert(message,className){
         //create a div element
         const div = document.createElement('div')
        //  console.log(div);
         div.className = `alert alert-${className}`
         div.appendChild(document.createTextNode(message))
         const container = document.querySelector('.container')
         const form = document.querySelector('#book-form')
         container.insertBefore(div,form)

        //  set time for alert
        setTimeout(()=>{
            document.querySelector('.alert').remove()
        },2000)

     }
   
  }
  
// Store Class: Handles Storage
class Store{
    static getBooks(){
        let books
        if(localStorage.getItem('books') === null){
            books = []
        }else{
            books = JSON.parse(localStorage.getItem('books')) 
        }
        return books;
    }
    static addBook(book){
        const books = Store.getBooks()
        books.push(book)
        localStorage.setItem('books',JSON.stringify(books))
    }
    static removeBooks(isbn){
        // console.log(isbn);
      const books = Store.getBooks()
      books.forEach((book, index) =>{
          if(book.isbn === isbn){
            books.splice(index, 1);
          }
      })
      localStorage.setItem('books', JSON.stringify(books));
    }
}

  
// Event: Display Books
  UI.displayBooks()
 
// Event: Add a Book
 const addBook = document.getElementById('book-form')

 addBook.addEventListener('submit',function(e){
    e.preventDefault()
     var title = document.getElementById('title').value
     var author = document.getElementById('author').value
     var isbn = document.getElementById('isbn').value

     if(title === '' || author === '' || isbn === '')
     {
        // show alert('Please fill the form')
        UI.showAlert('Please fill all the input form','danger');
       
     }
     else{
    // instantiate book
     const book = new Book(title, author, isbn) 
     UI.addBookList(book)

     // add book to storage
     Store.addBook(book)

     // show alert
     UI.showAlert('Book added successfully!','success')

     // clear fields
     UI.clearFields();
     
     }
 })

  // Event: Remove a Book
  const removeBook = document.getElementById('items')
  removeBook.addEventListener('click',(e)=>{
    //   console.log(e.target);
    // remove book from UI
    
     UI.deleteBook(e.target)
    
    
    //remove book from storage
    // Store.removeBooks(e.target.parentElement.previousElementSibling.textContent)
    
  })


 
