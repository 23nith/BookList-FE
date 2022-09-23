import Link from "next/link";
import { useContext, useEffect } from "react";
import { fetchReadingList } from "../api/books/fetchReadingList";
import { BookList } from "../components/BookList";
import { Spinner } from "../components/styled";
import { ReadingListContext } from "../contexts/ReadingListContext";

const List = () => {
  const { readingList, isLoading, resetReadingList } =
    useContext(ReadingListContext);

  useEffect(() => {
    resetReadingList();
  }, []);

  useEffect(() => {
    resetReadingList();
  }, [fetchReadingList]);

  if (isLoading)
    return (
      <div className="flex h-[70vh] justify-center align-middle items-center">
        <Spinner size={50} />
      </div>
    );
  return (
    <>
      {readingList.length == 0 && (
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
          <BookList
            book={list.book}
            list={list}
            key={list.book.id}
            state={"reading"}
          />
        ))}
      <div className="py-20"></div>
    </>
  );
};

export default List;
