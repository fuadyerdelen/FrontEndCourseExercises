let myLibrary = [];



function Book(name, author, page, isRead) {

    this.name = name;
    this.author = author;
    this.page = page;
    this.isRead = isRead;

}

function addBookToLibrary(book) {
    myLibrary.push(book);

    render();

}






let getBookName = document.getElementById('get_book_name');
let getAuthor = document.getElementById('get_author');
let getPage = document.getElementById('get_page');
let getRead = document.getElementById('get_read');

function addBook() {
    const book = new Book(getBookName.value, getAuthor.value, getPage.value, getRead.checked);
    addBookToLibrary(book);
    console.log(myLibrary);


}


function render() {
    library.innerHTML = "";
    myLibrary.forEach(book => newBook(book));
}

function newBook(book) {

    localStorage.setItem('library', JSON.stringify(book));

    let getbook = JSON.parse(localStorage.getItem('library'));



    let library = document.getElementById('library');

    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('m-2');
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body')
    let cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title')
    cardTitle.innerText = getbook.name;
    let cardList = document.createElement('ul');
    cardList.classList.add('list-group')
    cardList.classList.add('list-group-flush')
    let cardLiAuthor = document.createElement('li');
    cardLiAuthor.classList.add('list-group-item')
    cardLiAuthor.innerText = getbook.author;
    let cardLiPage = document.createElement('li');
    cardLiPage.classList.add('list-group-item');
    cardLiPage.innerText = getbook.page;
    let cardLiRead = document.createElement('li');
    cardLiRead.classList.add('list-group-item');

    let removeBtn = document.createElement('button');
    removeBtn.classList.add('btn');
    removeBtn.classList.add('btn-warning');
    removeBtn.innerText = 'remove book';


    cardLiRead.innerText = getbook.isRead ? "read" : "not read yet";


    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    card.appendChild(cardList);
    cardList.appendChild(cardLiAuthor);
    cardList.appendChild(cardLiPage);
    cardList.appendChild(cardLiRead);
    card.appendChild(removeBtn);
    library.appendChild(card);

    removeBtn.addEventListener('click', function () {
        let bookIndex = myLibrary.indexOf(book);
        myLibrary.splice(bookIndex, 1)
        render();
        localStorage.removeItem('library', JSON.stringify(book));
    });




}