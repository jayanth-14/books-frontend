import { useState } from 'react'
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import booksData from './data/data';
import BookList from './components/books/booklist';

function Agree(params) {

  return (
    <Header />
  )
}

function App() {
  console.log("app reload");
  
  return (
    <>
    <Header></Header>
    <Hero />
    <BookList data={booksData} />
    </>
  )
}

export default App 
