class Library {
  constructor (){
    this.books = []; //<=== empty array that is because out library doesnt have any books or patrons yet.
    this.patrons = [];
    this.dailyFine = .1; //<=== the value for patron that is over due.
  }

  addPatron(patron){
    this.patrons.push(patron);
  }
  addBook(book){
    this.books.push(book);
  }

  chargeFines() {
    const now = new Date();
    
  }
} 