import React, { useContext } from "react";
import { ShowBookContext } from "../contexts/ShowBookContext";

function book() {
  const { book } = useContext(ShowBookContext);

  return (
    <div className="border-2 border-black border-solid flex flex-row">
      <div className="border-2 border-black border-solid grow">
        <img
          src={book.cover_image_url}
          width={140}
          height={210}
          className="min-w-140"
        />
      </div>
      <div className="border-2 border-black border-solid grow-3">
        <div className="flex flex-row">
          <div className="grow-[3] border-2 border-black border-solid">
            <div>{book.title}</div>
            <div className="flex flex-row border-2 border-black border-solid">
              <div className="px-3">{book.author}</div> |{" "}
              <div className="px-3">{book.publisher}</div>
            </div>
          </div>
          <div className="grow-[1] border-2 border-black border-solid max-w-[24px]">
            <div className="max-w-[24px]">x</div>
          </div>
        </div>
        <div>{book.synopsis}</div>
      </div>
    </div>
  );
}

export default book;
