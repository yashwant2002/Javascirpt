// Class to represent a Book
class Book {
  constructor(title, author, isRead = false) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
  }

  toggleReadStatus() {
    this.isRead = !this.isRead;
  }
}

// Class to manage the Library
class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    this.displayBooks();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    this.displayBooks();
  }

  displayBooks() {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";

    this.books.forEach((book, index) => {
      const bookDiv = document.createElement("div");
      bookDiv.classList.add("book");

      bookDiv.innerHTML = `
                <p><strong>Title:</strong> ${book.title}</p>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Status:</strong> ${
                  book.isRead ? "Read" : "Not Read"
                }</p>
                <button onclick="library.toggleRead(${index})">Toggle Read Status</button>
                <button onclick="library.removeBook(${index})">Remove</button>
            `;

      bookList.appendChild(bookDiv);
    });
  }

  toggleRead(index) {
    this.books[index].toggleReadStatus();
    this.displayBooks();
  }
}

// Initialize Library
const library = new Library();

// DOM Elements
const addBookButton = document.getElementById("addBook");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");

// Add Book Event Listener
addBookButton.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();

  if (title && author) {
    const newBook = new Book(title, author);
    library.addBook(newBook);
    titleInput.value = "";
    authorInput.value = "";
  } else {
    alert("Please enter both a title and an author.");
  }
});
