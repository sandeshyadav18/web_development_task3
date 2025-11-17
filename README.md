## Books REST API 

## Overview

This project is a simple **Node.js + Express** REST API to manage a list of books.
It supports basic CRUD operations: GET, POST, PUT, DELETE.

---

## How to Run

1. Open terminal in project folder.
2. Install dependencies:

```
npm install
```

3. Start the server:

```
node server.js
```

4. If it shows:

```
Server running on port 3000
```

API is working.
## API Endpoints

### GET all books

```
http://localhost:3000/books
```

## POST a new book
http://localhost:3000/books

Body (JSON):

```json
{
  "title": "Book Title",
  "author": "Author Name"
}
```
## PUT (update) a book
http://localhost:3000/books/:id

Body (JSON):
```json
{
  "title": "Updated Title",
  "author": "Updated Author"
}
```
## DELETE a book
http://localhost:3000/books/:id

## Tools Used
* Node.js
* Express.js
* Postman
* VS Code
## Notes
* Data is stored in memory and resets when server restarts.
* Use Postman to test all API endpoints.
