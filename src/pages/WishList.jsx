import React from 'react'
import { useEffect } from 'react'
import useGet from '../hooks/useGet'
import { useState } from 'react'
import BookList from '../components/books/BookList';
import LoadingPage from './Loading';

export default function WishList() {
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    const fetchWishList = async () => {
      const data = await useGet("http://localhost:5000/wishlist");
      console.log(data);
      setWishlist(data.wishList);
    }
    fetchWishList();
  }, [])
  return (
     <div>
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">Your Saved Wishlist</h1>
      </div>
      {wishlist ? <BookList data={wishlist} /> : <LoadingPage />}
    </div>
  )
}
