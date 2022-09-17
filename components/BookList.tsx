import { useContext } from "react";
import styles from "../styles/Home.module.css";
import { MdAddCircle } from "react-icons/md";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaMinusCircle } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { IBook } from "../api/types";
import { ShowBookContext } from "../contexts/ShowBookContext";
import { useRouter } from "next/router";
import { UserContext } from "../contexts/UserContext";
import { addToReadingList } from "../api/addToReadingList";

interface BooklistProps {
  book: IBook;
  state: string;
}

const BookList = ({ book, state }: BooklistProps) => {
  const router = useRouter();
  const { setBook } = useContext(ShowBookContext);
  const { user } = useContext(UserContext);

  const handleBookClick = (e) => {
    setBook(e);
    router.push("/book");
  };

  const handleAddToReadingList = (e, bookID) => {
    e.stopPropagation();
    addToReadingList(bookID, user.id);
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
                <BsCheckCircleFill className="hover:text-green-600" />
              ) : (
                <FaBook className="hover:text-yellow-400" />
              )}
            </div>
            <div className=" p-2 rounded-30 border-solid border-2 border-slate-200 ml-1 bg-white">
              <FaMinusCircle className="hover:text-rose-600" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { BookList };
