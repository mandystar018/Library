class Patron {
  constructor (name, email){
    this.name = name;
    this.email = email;
    this.currentBook = null; // <== because patron has not checkout a book yet.
  }
  checkOut(book){
    this.currentBook = book;
    book.out = true;
    book.patron = this;

    // const newDueDate = new Date();
    // newDueDate.setDate(newDueDate.getDate() + 14);
    // book.dueDate = newDueDate;
  }

  returnBook(book){
    this.currentBook = null;
    book.out = false;
    book.patron = null;
    // book.dueDate = null;
  }
}