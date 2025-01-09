import React, { useEffect, useState } from 'react'
import BookList from '../components/books/BookList';

function Explore() {
  const [result, setResults] = useState([]);
  const [noBooksFound, setNoBooksFound] = useState(false);
  useEffect(() => {
    handleExplore();
  }, [])
  const handleExplore = async () => {
    try {
      setNoBooksFound(false);
      const response = await fetch(`http://localhost:5000/books`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        credentials: 'include'
      });
      if (!response.ok) {
        setNoBooksFound(true);
        return;
      }
      setNoBooksFound(false)
      const data = await response.json();
      setResults(data.books);

    } catch (error) {
      console.log("error message: " + error);

    }
  }
  return (
    <div>

      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">Explore Books Near You</h1>
      </div>

      {/* <section id="Projects" */}
        {/* // className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"> */}

        <BookList data={result} />

      {/* </section> */}


    </div>
  )
}

export default Explore