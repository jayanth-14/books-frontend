import React from 'react'
import Hero from '../components/hero/Hero'
import { useContext } from 'react'
import { Context } from '../data/states'
import BookList from '../components/books/BookList'

function Home() {
  const {books} = useContext(Context)

  return (
    <section className="home">
      <Hero />
      <h1 className="text-4xl text-center mt-2">Books Recently Added</h1>
      <BookList data={books} />
    </section>
  )
}

export default Home