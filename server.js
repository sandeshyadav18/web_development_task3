const express = require("express");
const app = express();

app.use(express.json());

// In-memory books data
let books = [
  { id: 1, title: "Atomic Habits", author: "James Clear" },
  { id: 2, title: "The Alchemist", author: "Paulo Coelho" }
];

// GET all books
app.get("/books", (req, res) => {
  res.json(books);
});

// POST add new book
app.post("/books", (req, res) => {
  const { title, author } = req.body;

  const newBook = {
    id: books.length + 1,
    title,
    author
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT update book by ID
app.put("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author } = req.body;

  const book = books.find(b => b.id === bookId);
  if (!book) return res.status(404).json({ message: "Book not found" });

  book.title = title;
  book.author = author;

  res.json(book);
});

// DELETE remove a book
app.delete("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);

  books = books.filter(b => b.id !== bookId);

  res.json({ message: "Book deleted successfully" });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
