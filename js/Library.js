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
    const latePatrons = this.patrons.filter(patron => (patron.currentBook !== null && patron.currentBook.dueDate < now));

    for(let patron of latePatrons){
      const dateDiff = new Date (now - patron.currentBook.dueDate);
      const daysLate = dateDiff.getDate();
      patron.balance += this.dailyFine * daysLate;
    }
  }
} 