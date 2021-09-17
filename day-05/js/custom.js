// Book Class: Represents a Book
class Book {
    
  }
  
  // UI Class: Handle UI Tasks
  class UI {
    static displayBooks() {

        var defaultBooks = [
            {
                title: "Introduction to javaScript",
                author: "Jone doe",
                isbn: "345345553",
            },
            {
                title: "Introduction to PHP",
                author: "Jone dalton",
                isbn: "34453455435",
            },
            {
                title: "Introduction to Laravel",
                author: "Tylor otowel",
                isbn: "3453rtreert45553",
            },
        ]

        var books = defaultBooks
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
        `
        bookList.appendChild(createTd)
     }
  
     
   
  }
  
  // Store Class: Handles Storage

  
  // Event: Display Books
  UI.displayBooks()
 
  // Event: Add a Book

  // Event: Remove a Book

 // Remove book from UI

  
// Remove book from store

  
// Show success message
 
