
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
      <button id="read" onclick="toggleRead(${index})">Read</button>
      <button id="removeBook" onclick="deleteBook(${index})">Delete book</button>
      `;//Creates a book DOM object, with the button having the index of the array object
    container.appendChild(bookdiv);
  })
}

const dialog = document.querySelector("dialog");
const confirmBtn = document.getElementById("confirm");
const addBookBtn = document.getElementById("addBookBtn");
const cancelBtn = document.getElementById("cancel");
const readBtn = document.getElementById("read");

addBookBtn.addEventListener("click", () => {
  dialog.showModal();
})

confirmBtn.addEventListener("click", () => {
  let bookTitle = document.getElementById("bookTitle").value;
  let bookAuthor = document.getElementById("bookAuthor").value;
  let bookPages = document.getElementById("bookPages").value;
  addBookToLibrary(bookTitle, bookAuthor, bookPages);
  dialog.close();
})

cancelBtn.addEventListener("click", () => {
  dialog.close();
})

function deleteBook(index){
  //Deletes object from array based on given index
  myLibrary.splice(index, 1)
  showcaseLibrary();
}
Book.prototype.toggleRead= function(){
  this.read= !this.read;
}

function toggleRead(index){
  myLibrary[index].toggleRead();
}
