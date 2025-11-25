// Q3: Library Management System (Classes + Objects)
// Book class with title, author, ISBN, isIssued.
// Methods: issueBook(), returnBook().
// Array of books, display available, issue by ISBN.

class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }

    // Issue the book
    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            console.log(`Book "${this.title}" has been issued.`);
        } else {
            console.log(`Book "${this.title}" is already issued.`);
        }
    }

    // Return the book
    returnBook() {
        if (this.isIssued) {
            this.isIssued = false;
            console.log(`Book "${this.title}" has been returned.`);
        } else {
            console.log(`Book "${this.title}" was not issued.`);
        }
    }

    // Display book details
    displayDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}, Issued: ${this.isIssued}`;
    }
}

// Create array of book objects
const books = [
    new Book('The Great Gatsby', 'F. Scott Fitzgerald', '1234567890'),
    new Book('1984', 'George Orwell', '0987654321'),
    new Book('To Kill a Mockingbird', 'Harper Lee', '1122334455'),
    new Book('Pride and Prejudice', 'Jane Austen', '5566778899')
];

// Display all available books (not issued)
console.log('Available books:');
books.filter(book => !book.isIssued).forEach(book => console.log(book.displayDetails()));

// Function to issue a book by ISBN
function issueBookByISBN(isbn) {
    const book = books.find(b => b.ISBN === isbn);
    if (book) {
        book.issueBook();
    } else {
        console.log('Book with ISBN not found.');
    }
}

// Example: Issue a book (uncomment to test)
// issueBookByISBN('1234567890');
