import type { NextPage } from "next";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { FinishedBooks } from "../contexts/FinishedBooksContext";
import BookList from "../components/BookList";

const finished: NextPage = () => {
  const { finishedBooks, setFinishedBooks, fetchFinishedBooks } =
    useContext(FinishedBooks);

  const [Finished, setFinished] = useState(() => {
    if (finishedBooks.length == 0) {
      console.log("blank");
      fetchFinishedBooks();
    }
  });

  useEffect(() => {
    console.log("Finished books: ", finishedBooks);
  }, [finishedBooks]);

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
