import React, { useContext } from "react";
import { ShowBookContext } from "../contexts/ShowBookContext";
import { MdAddCircle } from "react-icons/md";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaMinusCircle } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { ShowBookPageContext } from "../contexts/ShowBookPageContext";
import { Notes } from "../components/Notes";
import { IBook } from "../api/types";

const book = () => {
  const { book, list } = useContext(ShowBookContext);
  const { previousPage } = useContext(ShowBookPageContext);
  const currentBook: IBook = previousPage != "/discover" ? list.book : book;

  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-5">
        <div className="grow">
          <img
            src={currentBook.cover_image_url}
            width={180}
            height={270}
            className="min-w-[180px]"
          />
        </div>
        <div className="grow-3">
          <div className="flex flex-row mb-14">
            <div className="grow-[3] leading-5">
              <div className="text-4xl font-medium p-2 pt-0">
                {currentBook.title}
              </div>
              <div className="flex flex-row">
                <div className="px-3 italic h-[21px]">
                  {currentBook.author} | {currentBook.publisher}
                </div>
              </div>
              <div className="p-2 pt-0 mt-4">
                {previousPage != "/discover" && (
                  <>
                    <FaRegCalendarAlt className="inline mb-1" />{" "}
                    <span className="inline text-center">Sep 22</span>
                  </>
                )}{" "}
                {previousPage == "/finished" ? <span>— Sep 23</span> : ""}
              </div>
            </div>
            {previousPage == "/discover" && (
              <div className="grow-[1] max-w-[24px] flex flex-col justify-center min-w-fit">
                <div className="p-2 rounded-30 border-solid border-2 border-slate-200 bg-white text-custom_gray">
                  <MdAddCircle className="hover:text-indigo-600" />
                </div>
              </div>
            )}
            {previousPage != "/discover" && (
              <div className="flex flex-col justify-around">
                <div className=" p-2 rounded-30 border-solid border-2 border-slate-200 ml-1 bg-white text-custom_gray">
                  {previousPage == "/list" ? (
                    <BsCheckCircleFill className="hover:text-green-600" />
                  ) : (
                    <FaBook className="hover:text-yellow-400" />
                  )}
                </div>
                <div className=" p-2 rounded-30 border-solid border-2 border-slate-200 ml-1 bg-white text-custom_gray">
                  <FaMinusCircle className="hover:text-rose-600" />
                </div>
              </div>
            )}
          </div>
          <div className="mt-6">{currentBook.synopsis}</div>
        </div>
      </div>
      {previousPage != "/discover" && <Notes list={list} />}
    </div>
  );
};

export default book;
