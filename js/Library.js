class Library {
  constructor (){
    this.books = []; //<=== empty array that is because out library doesnt have any books or patrons yet.
    this.patrons = [];
  }

  addPatron(patron){
    this.patrons.push(patron);
  }
  addBook(book){
    this.books.push(book);
  }
} 