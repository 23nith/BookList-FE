import type { NextPage } from "next";

const BookList: NextPage = ({ book }) => {
  return (
    <div key={book.id} className="flex flex-row">
      <div className="p-5 border-2 border-black border-solid grow">
        <img
          src={book.cover_image_url}
          width={140}
          height={210}
          className="min-w-140"
        />
      </div>
      <div className="p-5 border-2 border-black border-solid grow-3">
        <div className="flex flex-row justify-between">
          <div className="border-2 border-black border-solid ">
            <h3>{book.title}</h3>
          </div>
          <div className="border-2 border-black border-solid">
            <p>{book.author}</p>
            <p>{book.publisher}</p>
          </div>
        </div>
        <div>{book.synopsis}</div>
      </div>
    </div>
  );
};

export { BookList };
