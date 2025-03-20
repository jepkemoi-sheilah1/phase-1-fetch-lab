function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  //fetch data from the API and return the JSON-ified response
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())//parse the JSON response-convert the JSON response to a JavaScript object
  .then(data =>{renderBooks(data)});//pass the JSON data to the renderBooks function
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
