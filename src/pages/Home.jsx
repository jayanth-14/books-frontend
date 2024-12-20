import React from 'react'
import Hero from '../components/hero/Hero'
import BookList from '../components/books/booklist'
import booksData from '../data/data'

function Home() {
  return (
    <section className="home">
      <Hero />
      <h1 className="text-4xl text-center mt-2">Books Recently Added</h1>
      <BookList data={booksData} />
    </section>
  )
}

export default Home