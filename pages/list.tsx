import Link from "next/link";
import { useContext, useEffect } from "react";
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

  useEffect(() => {
    console.log("trigger fetchReadingList");
    resetReadingList();
  }, [fetchReadingList]);

  if (isLoading) return <Spinner />;
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
    </>
  );
};

export default List;
