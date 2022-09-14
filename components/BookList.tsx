import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { MdAddCircle } from "react-icons/md";

const BookList: NextPage = ({ book }) => {
  return (
    <div key={book.id} className={styles.booklist_box}>
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
          <div className="">
            <p>{book.author}</p>
            <p>{book.publisher}</p>
          </div>
        </div>
        <div>{book.synopsis}</div>
      </div>
      <div className="relative flex justify-center flex-col">
        <div className="absolute p-2 rounded-30 border-solid border-2 border-slate-200 ml-1 bg-white">
          <MdAddCircle />
        </div>
      </div>
    </div>
  );
};

export default BookList;
