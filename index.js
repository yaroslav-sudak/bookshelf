let books = [];
let createBook = ({ title, pages, author, color }) => {
  let book = {
    title: title,
    pages: pages,
    currentPage: 0,
    author: author,
    color: color,
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
  createBook({ title: "piece", pages: 300, author: "author3", color: "color3" }))
console.log(books);
