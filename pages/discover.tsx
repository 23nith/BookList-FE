import type { NextPage } from "next";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import BookList from "../components/BookList";
import { IBook } from "../api/types";
import Search from "../components/Search";
import { fetchbooks } from "../api/books";
import { BooksContext } from "../contexts/BooksContext";

const discover: NextPage = () => {
  const { books, setBooks } = useContext(BooksContext);

  const [bookList, setBookList] = useState(() => {
    fetchbooks({ setBooks });
  });

  useEffect(() => {
    fetchbooks({ setBooks });
  }, [books]);

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
