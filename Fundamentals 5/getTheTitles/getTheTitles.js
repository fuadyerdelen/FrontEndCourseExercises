const getTheTitles = function() {
        let booksTitle = [];

        for (i = 0; i < books.length; i++) {
            booksTitle.push(books[i].title)
        }
        return booksTitle;
}

module.exports = getTheTitles;
