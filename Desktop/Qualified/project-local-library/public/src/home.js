function sortingHelper(objectToSort) {
  return Object.keys(objectToSort).sort((left, right) => {
    if (objectToSort[left] < objectToSort[right]) return 1
    if (objectToSort[left] > objectToSort[right]) return -1
    return 0
  } )
}
function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
 return accounts.length
}

function getBooksBorrowedCount(books) {
  const borrowed = books.filter((book)=>book.borrows[0].returned == false)
return borrowed.length
}

function getMostCommonGenres(books) {
  //here I think I need to create a map of the genres 
 
  const genres= books.reduce((genres, book)=>{
    if(!genres[book.genre]){
      genres[book.genre]=0
    }
    genres[book.genre]++
    return genres
  }, {})
  //console.log(genres)
  
  const sorted = sortingHelper(genres)
  const mappedGenres = sorted.map((genre)=>{
    return {name:genre,count:genres[genre]}
  })
  return mappedGenres.slice(0,5)
}

function getMostPopularBooks(books) {
  //I need to make a function that takes the books array, and gives the one with the most borrows
  const titles = books.reduce((titles, book)=>{
    if(!titles[book.title]){
      titles[book.title]=0
    }
    //console.log(book.borrows.length)
    titles[book.title]=book.borrows.length
    return titles
  },{})
  //console.log(titles)
  const sorted = sortingHelper(titles)
  const mappedTitles = sorted.map((title)=>{
    return {name:title,count:titles[title]}
  })
  return mappedTitles.slice(0,5)
  }

  function getMostPopularAuthors(books, authors) {
    const result= [];
    authors.forEach(author => {
      const returnAuthor = { 
        name: `${author.name.first} ${author.name.last}`, 
        count: 0
      }
      books.forEach(book => {
        if (book.authorId === author.id) {
          returnAuthor.count += book.borrows.length;
        }
      })
      result.push(returnAuthor);
    })
    return result.sort((a,b) => b.count - a.count).slice(0, 5);
  }
  


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
