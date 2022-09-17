import type { NextPage } from "next";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { fetchReadingList } from "../api/fetchReadingList";
import { BookList } from "../components/BookList";
import { Spinner } from "../components/styled";
import { ReadingListContext } from "../contexts/ReadingListContext";

const List = () => {
  const { readingList, isLoading, resetReadingList } =
    useContext(ReadingListContext);

  useEffect(() => {
    resetReadingList();
  }, []);

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
      {readingList &&
        readingList.map((list) => (
          <BookList book={list.book} key={list.book.id} state={"reading"} />
        ))}
    </>
  );
};

export default List;
