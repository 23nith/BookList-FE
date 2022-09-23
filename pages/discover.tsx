import { useContext, useEffect } from "react";
import { fetchBooks } from "../api/fetchBooks";
import { BookList } from "../components/BookList";
import { Search } from "../components/Search";
import { BooksContext } from "../contexts/BooksContext";

const discover = () => {
  const { books, resetBooks } = useContext(BooksContext);

  useEffect(() => {
    resetBooks();
  }, []);

  useEffect(() => {
    resetBooks();
  }, [fetchBooks]);

  return (
    <>
      <Search />
      <div className="text-center text-xl">
        <p className="my-6">Welcome to the discover page. </p>
        <p className="mb-6">Here, let me load a few books for you... </p>
        <p className="mb-6">
          Here you go! Find more books with the search bar above.
        </p>
      </div>
      <div>
        {books &&
          books.map((book) => (
            <BookList book={book} key={book.id} state={"discover"} />
          ))}
      </div>
      <div className="py-20"></div>
    </>
  );
};

export default discover;
