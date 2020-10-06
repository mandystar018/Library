class Book {
  constructor(title,author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
  this._out = false;//<== this represent whether or not a book is check out. Its set to a boolean because its either out or not. When _(backing properties) is meant to be updated with setter method. We don't use out with out _ because its going to call it. (Usually we have a setter and a getter method together)
  this.dueDate = null;
  this.patron = null; //<=== this represente the patron that currently has the book checked out.
  }

  get out() { //<=== is going to call the set method
    return this._out;
}
  set out(out) {
    this._out = out;

    if (out){
      const newDueDate = new Date();
    newDueDate.setDate(newDueDate.getDate() + 14); // <== if you want to check the due date of a book change the + to - that way it will be two weeks overdue.
    book.dueDate = newDueDate;
    } else {
      this.dueDate = null;
    }
  }
}