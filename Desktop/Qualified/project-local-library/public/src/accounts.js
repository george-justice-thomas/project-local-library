function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id)
}

function sortAccountsByLastName(accounts) {
 return accounts.sort((accountA, accountB) => (accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1: -1))
}

function getTotalNumberOfBorrows(account, books) {
const user = account.id;
 
 let accumulator = 0;
 const total = books.reduce((acc, book) => {
   const borrows = book.borrows;
   const mapIds = borrows.map((borrow) => borrow.id);
   if (mapIds.includes(user))acc++;
   return acc;
 }, accumulator);
 
 return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  const accountBorrows = [];
  books.filter((book) => {
    if (book.borrows[0].id === account.id && book.borrows[0].returned === false) {
      let bookauthor = authors.find((author) => author.id === book.authorId);
      book.author = bookauthor;
      accountBorrows.push(book);
    }
  })
  return accountBorrows;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount
};
