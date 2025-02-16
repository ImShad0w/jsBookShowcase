const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  toggleRead(index) {
    this.read = !this.read;
    updateStatus(index);
    showcaseLibrary()
  }
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
      <button class="read" data-index="${index}">${book.read ? 'Mark as Unread' : 'Mark as Read'}</button>
      <button id="removeBook" onclick="deleteBook(${index})">Delete book</button>
      `;//Creates a book DOM object, with the button having the index of the array object

    container.appendChild(bookdiv);
    //Select read button
    const readBn = bookdiv.querySelector(".read");
    readBn.addEventListener("click", () => {
      book.toggleRead(index);
    })
  })
}


const dialog = document.querySelector("dialog");
const confirmBtn = document.getElementById("confirm");
const addBookBtn = document.getElementById("addBookBtn");
const cancelBtn = document.getElementById("cancel");
const container = document.querySelector("container");
addBookBtn.addEventListener("click", () => {
  dialog.showModal();
  container.style.filter = "blur(100px)";
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

function deleteBook(index) {
  //Deletes object from array based on given index
  myLibrary.splice(index, 1)
  showcaseLibrary();
}

function updateStatus(index) {
  const book = myLibrary[index]; // Get the book at the specified index
  const readButton = document.querySelector(`.read[data-index="${index}"]`); // Get the corresponding button

  if (book.read) {
    readButton.style.backgroundColor = "green"
    // If the book is read, set background to green
    readButton.textContent = "Mark as Unread"; // Update button text
  } else {
    // If the book is unread, set background to red
    readButton.style.backgroundColor = "red"
    readButton.textContent = "Mark as Read"; // Update button text
  }
}
