import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import BookList from "../components/BookList";

export interface IBook {
  title: string;
  author: string;
  cover_image_url: string;
  page_count: number;
  publisher: string;
  synopsis: string;
}

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
        console.log("books", data);
        setBooks(data);
      });
  }, []);

  return (
    <>
      <input
        type="text"
        className="bg-custom_light_gray rounded-3 px-4 py-3 w-full text-custom_gray"
        placeholder="Search books ..."
      />
      <div className="text-center text-xl">
        <p className="my-6">Welcome to the discover page. </p>
        <p className="mb-6">Here, let me load a few books for you... </p>
        <p className="mb-6">
          Here you go! Find more books with the search bar above.
        </p>
      </div>
      <div>{books && books.map((book) => <BookList book={book} />)}</div>
    </>
  );
};

export default discover;
