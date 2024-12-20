import React from 'react'
import Hero from '../components/hero/Hero'
import BookList from '../components/books/booklist'
import booksData from '../data/data'

function Home() {
  return (
    <section className="home">
      <Hero />
      <BookList data={booksData} />
    </section>
  )
}

export default Home