import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import BookList from "../components/BookList";
import { IBook } from "../api/types";
import Search from "../components/Search";

const discover: NextPage = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/books", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBooks(data);
      });
  }, []);

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
