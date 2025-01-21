import React from 'react'

export default function checkout(book, setBook, navigate) {
  setBook(book);
  navigate('/checkout');
}
