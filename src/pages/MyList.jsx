import React, { useEffect, useState } from 'react'
import BookList from '../components/books/BookList';
import useGet from '../hooks/useGet';
import LoadingPage from './Loading';

function Mylist() {
  const [result, setResults] = useState([]);
  const [noBooksFound, setNoBooksFound] = useState(false);
  useEffect(() => {
    handleExplore();
  }, [])
  const handleExplore = async () => {
    try {
      setNoBooksFound(false);
      const response = await fetch("http://localhost:5000/mybooks", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        credentials: 'include'
      });
      const data = await response.json();
      console.log(data);
      
      if (data.books.length === 0) {
        setNoBooksFound(true);
        return;
      }
      setNoBooksFound(false)
      console.log(data);
      setResults(data.books);
    } catch (error) {
      console.log("error message: " + error);

    }
  }
  return (
    <div>
      {result ?
        <>
          <div className="text-center p-10">
            <h1 className="font-bold text-4xl mb-4">books Listed ByYou</h1>
          </div>
          <BookList data={result} />
        </>
        : <LoadingPage />
      }

    </div>
  )
}

export default Mylist