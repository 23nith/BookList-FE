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
import { addToFinishedList } from "../api/addToFinishedList";
import { fetchFinishedBooks } from "../api/fetchFinishedBooks";
import { FinishedBooks } from "../contexts/FinishedBooksContext";
import { markAsReading } from "../api/markAsReading";

interface BooklistProps {
  book: IBook;
  state: string;
  list?: ListItem;
}

const BookList = ({ book, state, list }: BooklistProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { setBook } = useContext(ShowBookContext);
  const { user } = useContext(UserContext);
  const { setBooks } = useContext(BooksContext);
  const { setReadingList } = useContext(ReadingListContext);
  const { setFinishedBooks } = useContext(FinishedBooks);

  const handleBookClick = (e: React.SyntheticEvent<EventTarget>) => {
    setBook(e);
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

  const handleRemoveFromReadingList = async (
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
    const onComplete = () => {
      fetchReadingList(setIsLoading, setReadingList);
    };
    await addToFinishedList(list, list.book.id, list.user_id, onComplete);
  };

  const handleReturnToReadingList = async (
    e: React.SyntheticEvent<EventTarget>,
    list: ListItem
  ) => {
    e.stopPropagation();
    const onComplete = () => {
      fetchFinishedBooks(setIsLoading, setFinishedBooks);
    };
    await markAsReading(list, list.book.id, list.user_id, onComplete);
  };

  return (
    <div
      className="booklist_box cursor-pointer"
      onClick={(e) => {
        handleBookClick(book);
      }}
    >
      <div className="grow p-5">
        <img
          src={book.cover_image_url}
          width={140}
          height={210}
          className="min-w-140"
        />
      </div>
      <div className="grow-3 p-5 max-h-[255px] text-ellipsis overflow-hidden">
        <div className="flex flex-row justify-between mb-5">
          <div className={styles.booklist_title}>
            <h3>{book.title}</h3>
          </div>
          <div>
            <p>{book.author}</p>
            <p>{book.publisher}</p>
          </div>
        </div>
        <div>{book.synopsis}</div>
      </div>
      {state == "discover" && (
        <div className="relative flex justify-center flex-col">
          <div className="absolute p-2 rounded-30 border-solid border-2 border-slate-200 ml-1 bg-white">
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
        <div className="relative flex justify-center flex-col">
          <div className="absolute h-[250px] flex flex-col justify-around">
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
                  handleRemoveFromReadingList(e, list.id);
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
