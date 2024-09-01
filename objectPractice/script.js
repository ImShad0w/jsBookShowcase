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
  myLibrary.forEach(book => {
    const bookdiv = document.createElement("div");
    bookdiv.classList.add("book");
    bookdiv.innerHTML = `
      <h2>${book.title}</h2>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Read:</strong> ${book.read ? 'Yes' : 'No'}</p>
      `;
    container.appendChild(bookdiv);
  })
}


