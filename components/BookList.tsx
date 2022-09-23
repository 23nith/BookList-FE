import { useContext, useState } from "react";
import styles from "../styles/Home.module.css";
import { MdAddCircle } from "react-icons/md";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaMinusCircle } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { IBook, ListItem } from "../api/types";
import { ShowBookContext } from "../contexts/ShowBookContext";
import { useRouter } from "next/router";
import { UserContext } from "../contexts/UserContext";
import { addToReadingList } from "../api/addToReadingList";
import { BooksContext } from "../contexts/BooksContext";
import { fetchBooks } from "../api/fetchBooks";
import { removeFromReadingList } from "../api/removeFromReadingList";
import { fetchReadingList } from "../api/fetchReadingList";
import { ReadingListContext } from "../contexts/ReadingListContext";
import { fetchFinishedBooks } from "../api/fetchFinishedBooks";
import { FinishedBooks } from "../contexts/FinishedBooksContext";
import { ShowBookPageContext } from "../contexts/ShowBookPageContext";
import { markAsInProgress } from "../api/markAsInProgress";
import { markAsFinished } from "../api/markAsFinished";
import { StarRating } from "./StarRating";

interface BooklistProps {
  book: IBook;
  state: string;
  list?: ListItem;
}

const BookList = ({ book, state, list }: BooklistProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { setBook, setList } = useContext(ShowBookContext);
  const { user } = useContext(UserContext);
  const { setBooks } = useContext(BooksContext);
  const { setReadingList } = useContext(ReadingListContext);
  const { setFinishedBooks } = useContext(FinishedBooks);
  const { previousPage, setPreviousPage } = useContext(ShowBookPageContext);

  const handleBookClick = (item: IBook | ListItem) => {
    if (router.pathname == "/discover") {
      setBook(item);
    } else {
      setList(item);
    }
    setPreviousPage(router.pathname);
    router.push("/book");
  };

  const handleAddToReadingList = async (
    e: React.SyntheticEvent<EventTarget>,
    bookID: number
  ) => {
    e.stopPropagation();
    const onComplete = () => {
      fetchBooks(setBooks);
    };
    await addToReadingList(bookID, user.id, onComplete);
  };

  const handleClickRemove = async (
    e: React.SyntheticEvent<EventTarget>,
    listID: number
  ) => {
    e.stopPropagation();
    const onComplete = () => {
      if (router.pathname == "/list") {
        fetchReadingList(setIsLoading, setReadingList);
      } else {
        fetchFinishedBooks(setIsLoading, setFinishedBooks);
      }
    };
    await removeFromReadingList(listID, onComplete);
  };

  const handleAddToFinishedList = async (
    e: React.SyntheticEvent<EventTarget>,
    list: ListItem
  ) => {
    e.stopPropagation();
    const onComplete = () => fetchReadingList(setIsLoading, setReadingList);
    await markAsFinished(list, onComplete);
  };

  const handleReturnToReadingList = async (
    e: React.SyntheticEvent<EventTarget>,
    list: ListItem
  ) => {
    e.stopPropagation();
    const onComplete = () => {
      fetchFinishedBooks(setIsLoading, setFinishedBooks);
    };
    await markAsInProgress(list, onComplete);
  };

  return (
    <div
      className="booklist_box cursor-pointer hover:shadow-md flex sm:flex-row flex-col"
      onClick={(e) => {
        handleBookClick(router.pathname == "/discover" ? book : list);
      }}
    >
      <div className="grow p-5 flex justify-center">
        <img
          src={book.cover_image_url}
          width={140}
          height={210}
          className="min-w-140"
        />
      </div>
      <div className="grow-3 p-5 max-h-[255px] text-ellipsis overflow-hidden ">
        <div className="flex sm:flex-row justify-between items-center sm:items-stretch mb-5 flex-col text-center sm:text-start">
          <div className={styles.booklist_title}>
            <h3>{book.title}</h3>
            {router.pathname == "/finished" ? <StarRating list={list} /> : ""}
          </div>
          <div>
            <p>{book.author}</p>
            <p>{book.publisher}</p>
          </div>
        </div>
        <div>{book.synopsis}</div>
      </div>
      {state == "discover" && (
        <div className="lg:relative flex justify-center flex-col   items-center sm:items-stretch w-full sm:w-0">
          <div className="lg:absolute p-2 rounded-30 border-solid border-2 border-slate-200 ml-1 bg-white">
            <MdAddCircle
              className="hover:text-indigo-600"
              onClick={(e) => {
                handleAddToReadingList(e, book.id);
              }}
            />
          </div>
        </div>
      )}
      {state != "discover" && (
        <div className="sm:relative flex justify-center flex-col ">
          <div className="sm:absolute sm:h-[250px] my-[5px] sm:my-0 sm:m-0 flex sm:flex-col justify-around flex-row lg:h-full w-full sm:w-auto">
            <div className=" p-2 rounded-30 border-solid border-2 border-slate-200 ml-1 bg-white">
              {state == "reading" ? (
                <BsCheckCircleFill
                  className="hover:text-green-600"
                  onClick={(e) => {
                    handleAddToFinishedList(e, list);
                  }}
                />
              ) : (
                <FaBook
                  className="hover:text-yellow-400"
                  onClick={(e) => {
                    handleReturnToReadingList(e, list);
                  }}
                />
              )}
            </div>
            <div className=" p-2 rounded-30 border-solid border-2 border-slate-200 ml-1 bg-white">
              <FaMinusCircle
                className="hover:text-rose-600"
                onClick={(e) => {
                  handleClickRemove(e, list.id);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { BookList };
