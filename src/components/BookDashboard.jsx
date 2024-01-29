// components/BookDashboard.js
import React, { useState } from 'react';
import BookForm from './BookForm';
import './BookDashboard.css';

const BookDashboard = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  const addBook = (book) => {
    setBooks([...books, book]);
    setEditingBook(null);
  };

  const editBook = (index) => {
    setEditingBook(index);
  };

  const deleteBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Book Dashboard</h1>

      <BookForm
        initialValues={editingBook !== null ? books[editingBook] : {}}
        onSubmit={(values) => {
          editingBook !== null ? addBook(values) : editBook(values);
        }}
      />

      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <span>{`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}, Publication Date: ${book.publicationDate}`}</span>
            <button onClick={() => editBook(index)}>Edit</button>
            <button onClick={() => deleteBook(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookDashboard;
