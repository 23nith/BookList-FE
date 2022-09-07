import type { NextPage } from "next";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { FinishedBooks } from "../contexts/FinishedBooksContext";
import BookList from "../components/BookList";
import { Spinner } from "../components/styled";

const finished: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { finishedBooks, setFinishedBooks, fetchFinishedBooks } =
    useContext(FinishedBooks);

  const [Finished, setFinished] = useState(() => {
    if (finishedBooks.length == 0) {
      fetchFinishedBooks(setIsLoading);
    }
  });

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
        finishedBooks.map((listItem) => <BookList book={listItem.book} />)}
    </>
  );
};

export default finished;
