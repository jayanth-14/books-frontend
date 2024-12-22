import React, { useContext } from 'react'
import BookList from '../books/BookList'
import { Context } from '../../data/states'

function Cart() {
  const { cart } = useContext(Context)

  return (
<section className='mb-20  w-full py-16 flex flex-col items-center'>
  <h1 className="text-2xl">Your Cart</h1>
  <BookList data={cart} />
</section>
  )
}

export default Cart