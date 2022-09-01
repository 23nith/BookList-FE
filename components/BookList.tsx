import type { NextPage } from "next";

const BookList: NextPage = ({ book }) => {
  return (
    <div key={book.id} className="flex flex-row">
      <div className="grow border-2 border-solid border-black p-5">
        <img
          src={book.cover_image_url}
          width={140}
          height={210}
          className="min-w-140"
        />
      </div>
      <div className="grow-3 border-2 border-solid border-black p-5">
        <div className="flex flex-row justify-between">
          <div className="border-black border-2 border-solid ">
            <h3>{book.title}</h3>
          </div>
          <div className="border-black border-2 border-solid">
            <p>{book.author}</p>
            <p>{book.publisher}</p>
          </div>
        </div>
        <div>{book.synopsis}</div>
      </div>
    </div>
  );
};

export default BookList;
