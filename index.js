// This is my first Javascript code.ever. you better get a co op. 9/26/24.
console.log('Hello world');

const myLibrary = [];

function Book(name, title, pages, read) {
    this.name = name;
    this.title = title;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary(newbook) {
    myLibrary.push(newbook);
    console.log('Updated Library:', myLibrary);
}

document.getElementById('Addbook').addEventListener('submit',function(event) {
    event.preventDefault();
    let userInput = document.getElementById('bookname').value;
    console.log(userInput)
    addBookToLibrary(userInput);
});
