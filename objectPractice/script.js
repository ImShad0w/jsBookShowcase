const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read)
  myLibrary.push(newBook);
  showcaseLibrary();
}

function showcaseLibrary() {
  const container = document.getElementById("library");
  container.innerHTML = "";
  myLibrary.forEach((book, index) => {//Loops through the array, adn gets index of the books
    const bookdiv = document.createElement("div");
    bookdiv.classList.add("book");
    bookdiv.innerHTML = `
      <h2>${book.title}</h2>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <button id="read" onclick="toggleRead()">Read</button>
      <button id="removeBook" onclick="deleteBook(${index})">Delete book</button>
      `;//Creates a book DOM object, with the button having the index of the array object
    container.appendChild(bookdiv);
  })
}

const dialog = document.querySelector("dialog");
const confirmBtn = document.getElementById("confirm");
const addBookBtn = document.getElementById("addBookBtn");
const cancelBtn = document.getElementById("cancel");

addBookBtn.addEventListener("click", () => {
  dialog.showModal();
})

 //Creates event listener for click, to retrieve data
confirmBtn.addEventListener("click", () => {
  let bookTitle = document.getElementById("bookTitle").value;
  let bookAuthor = document.getElementById("bookAuthor").value;
  let bookPages = document.getElementById("bookPages").value;
  let readBtn = document.getElementById("bookRead").checked;
  addBookToLibrary(bookTitle, bookAuthor, bookPages, readBtn); //Add the values of the newbook to the library
  dialog.close();
})

//Add event listener to cancel button
cancelBtn.addEventListener("click", () => {
  dialog.close(); //Closes dialog window
})

function deleteBook(index){
  //Deletes object from array based on given index
  myLibrary.splice(index, 1)
  showcaseLibrary();
}

Book.prototype.toggleRead = function(){
  //Checks if the book is read
  if(this.read != true){
    this.read = true; // Changes if it's not read
  }
  else{
    this.read = false; // Changes to false if the book was previously read
  }
}
