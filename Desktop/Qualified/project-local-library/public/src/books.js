function findAuthorById(authors, id) {
  return authors.find(author => author.id === id)
}

function findBookById(books, id) {
  return books.find(book => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
 //must return an array that has two arrays:borrowed books and returned books
const stillOut = books.filter((book)=>book.borrows[0].returned==false)//an array that holds all the books where it's most recent returned value is false
const returned = books.filter((book)=>book.borrows[0].returned==true)// an array where it holds books that have the recent value as true
let list =[stillOut,returned]//a new array that will hold both created arrays
return list;
}

function getBorrowersForBook(book, accounts) {
    const result = book.borrows.map(borrower => { 
    const result = accounts.find(account => borrower.id === account.id )
    result.returned = borrower.returned;
    return result;
   })
   return result.filter((borrower, index)=> result.findIndex(item => item.id === borrower.id) === index);
 }

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
