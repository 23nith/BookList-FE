import type { NextPage } from "next";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import BookList from "../components/BookList";
import { Spinner } from "../components/styled";
import { ReadingListContext } from "../contexts/ReadingListContext";

const List = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { readingList, setReadingList, fetchReadingList } =
    useContext(ReadingListContext);

  const [reading, setReading] = useState(() => {
    if (readingList.length == 0) {
      fetchReadingList(setIsLoading);
    }
  });

  if (isLoading) return <Spinner />;
  return (
    <>
      {!readingList && (
        <div className="text-center text-xl">
          <p className="my-6">
            Hey there! Welcome to your bookshelf reading list. Get started by
            heading over to the{" "}
            <Link href="/discover">
              <a className="text-blue-500">Discover</a>
            </Link>{" "}
            page to add books to your list.
          </p>
        </div>
      )}
      {readingList && readingList.map((list) => <BookList book={list.book} />)}
    </>
  );
};

export default List;
