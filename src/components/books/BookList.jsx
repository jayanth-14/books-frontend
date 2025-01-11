import BookCard from "./BookCard";

function BookList({ data }) {
  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4 md:gap-6">
        {data.map((book, index) => (
         <BookCard book={book} key={index} index={index} />
        ))}
      </div>
    </div>
  );
}

export default BookList;