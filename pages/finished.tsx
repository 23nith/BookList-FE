import type { NextPage } from "next";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { FinishedBooks } from "../contexts/FinishedBooksContext";
import { BookList } from "../components/BookList";
import { Spinner } from "../components/styled";
import { fetchFinishedBooks } from "../api/fetchFinishedBooks";

const finished: NextPage = () => {
  const { finishedBooks, isLoading, resetFinishedBooksList } =
    useContext(FinishedBooks);

  useEffect(() => {
    resetFinishedBooksList();
  }, []);

  useEffect(() => {
    resetFinishedBooksList();
  }, [fetchFinishedBooks]);

  useEffect(() => {}, [finishedBooks]);

  if (isLoading) return <Spinner />;
  return (
    <>
      {!finishedBooks && (
        <div className="text-center text-xl">
          <p className="my-6">
            Hey there! This is where books will go when you've finished reading
            them. Get started by heading over to the{" "}
            <Link href="/discover">
              <a className="text-blue-500">Discover</a>
            </Link>{" "}
            page to add books to your list.
          </p>
        </div>
      )}
      {finishedBooks &&
        finishedBooks.map((listItem) => (
          <BookList
            book={listItem.book}
            key={listItem.book.id}
            state={"finished"}
          />
        ))}
    </>
  );
};

export default finished;
