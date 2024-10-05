
let bookCount = 0;
const myLibrary = [];

function Book(title, author, pages, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.id = id;
}


function addBookToLibrary(title, author, pages, bookCount) {
  const newBook = new Book(title, author, pages, bookCount)
  myLibrary.push(newBook);
  showcaseLibrary();
}

function showcaseLibrary() {
  const container = document.getElementById("library");
  container.innerHTML = "";
  myLibrary.forEach(book => {
    const bookdiv = document.createElement("div");
    bookdiv.classList.add("book");
    bookdiv.innerHTML = `
      <h2>${book.title}</h2>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <button id="removeBook" onclick="deleteBook()">Delete book</button>
      `;
    container.appendChild(bookdiv);
  })
}


const dialog = document.querySelector("dialog")
const confirmBtn = document.getElementById("confirm")
const addBookBtn = document.getElementById("addBookBtn")
const cancelBtn = document.getElementById("cancel")

addBookBtn.addEventListener("click", () => {
  dialog.showModal();
})
confirmBtn.addEventListener("click", () => {
  bookCount++;
  let bookTitle = document.getElementById("bookTitle").value;
  let bookAuthor = document.getElementById("bookAuthor").value;
  let bookPages = document.getElementById("bookPages").value;
  addBookToLibrary(bookTitle, bookAuthor, bookPages, bookCount);
  dialog.close();
})

cancelBtn.addEventListener("click", () => {
  dialog.close();
})

function deleteBook(){

  let book = myLibrary.find(i => i.id === bookCount);
  console.log(book);
  showcaseLibrary();
}