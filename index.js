background = document.getElementById("background");
let shelfSize = background.offsetWidth - 40;
// Width of the book
const bookSize = 40;
let booksForShelf = Math.floor(shelfSize / bookSize);
let books = [];
let shelves = [];
let createBook = ({ title, pages, author, color }) => {
  let bookElement = document.createElement("div");
  bookElement.classList.add("book");
  let book = {
    bookElement: bookElement,
    currentPage: 0,
    author: author,
    color: color,
    title: title,
    pages: pages,
  };
  return book;
};

books.push(
  createBook({ title: "title", pages: 100, author: "author", color: "color" })
);
books.push(
  createBook({ title: "Da", pages: 200, author: "author2", color: "color2" })
);
books.push(
  createBook({ title: "piece", pages: 300, author: "author3", color: "color3" })
);

let createShelf = (number) => {
  let shelfElement = document.createElement("div");
  shelfElement.classList.add("shelf");
  let shelf = {
    shelfElement: shelfElement,
    number: number,
    books: [],
    addBook: (book) => {
      books.push(book);
    },
  };
  return shelf;
};

shelves.push(createShelf(1));
shelves.push(createShelf(2));
shelves.push(createShelf(3));


shelves[shelves.length - 1].books.push(createBook({ title: "piece", pages: 300, author: "author3", color: "color3" }));
shelves[shelves.length - 1].books.push(createBook({ title: "piece", pages: 300, author: "author3", color: "color3" }));
shelves[shelves.length - 1].books.push(createBook({ title: "piece", pages: 300, author: "author3", color: "color3" }));

addBook: (book) => {
  let lastShelf = shelves[shelves.length - 1];
  if (shelves[shelves.length - 1].books.length < booksForShelf) {
    
  }
  
}


console.log(shelves);
