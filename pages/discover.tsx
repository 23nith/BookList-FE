import { useContext, useState } from "react";
import BookList from "../components/BookList";
import Search from "../components/Search";
import { fetchbooks } from "../api/books";
import { BooksContext } from "../contexts/BooksContext";

const discover = () => {
  const { books, setBooks } = useContext(BooksContext);

  const [bookList, setBookList] = useState(() => {
    fetchbooks(setBooks);
  });

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
    </>
  );
};

export default discover;
